import {useState, useContext} from 'react';
import {NextResponse} from 'next/server'
import gemini from '@/services/gemini';
import {handleRateLimit} from '@/libs/rateLimit';
import {SentenceContext} from '@/contexts/sentenceContext';
import {LanguageContext} from '@/contexts/languageContext';

export default function useTranslation() {
    const [isLoaded, setIsLoaded] = useState(true);
    const [isError, setIsError] = useState(false);
    const [translate, setTranslate] = useState("");
    const {sentence, setSentence} = useContext(SentenceContext);
    const [{source, setSource}, {target, setTarget}] = useContext(LanguageContext);
  
    const handleTranslate = async () => {
        const {allowed, cooldown} = await handleRateLimit();

        if (!allowed) {
            // return NextResponse.json(
            //     {error: "Unable to process at this time", timelimit},
            //     {status: 429}
            // );
            alert("Unable to process at this time, wait " + cooldown + "s");
            return;
        }
        
        try {
            setIsLoaded(false);
            const response = await gemini(sentence, source, target);
            setTranslate(response);
        } catch (error) {
            setIsError(true)
        } finally {
            setIsLoaded(true);
        }
    };

    const handleSwapLanguage = () => {
        const previousSource = source;
        setSource(target);
        setTarget(previousSource);

        const previousSentence = sentence;
        setSentence(translate);
        setTranslate(previousSentence);
    }

    const handleClear = () => {
        setSentence("");
        setTranslate("");
    }
  
    return {
        isLoaded, 
        isError, 
        setIsError, 
        translate, 
        handleSwapLanguage, 
        handleTranslate, 
        handleClear
    };
}