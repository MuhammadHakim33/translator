import {useState, useContext} from 'react';
import gemini from '@/services/gemini';
import {SentenceContext} from '@/contexts/sentenceContext';
import {LanguageContext} from '@/contexts/languageContext';

export default function useTranslation() {
    const [isLoaded, setIsLoaded] = useState(true);
    const [isError, setIsError] = useState(false);
    const [translate, setTranslate] = useState("");
    const {sentence, setSentence} = useContext(SentenceContext);
    const [{source, setSource}, {target, setTarget}] = useContext(LanguageContext);
  
    const handleTranslate = async () => {
        try {
            setIsLoaded(false);
            const response = await gemini(sentence, source, target);
            setTranslate(response);
            // console.log(response);
        } catch (error) {
            setIsError(true)
            // console.error(error);
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
  
    return {isLoaded, isError, setIsError, translate, handleSwapLanguage, handleTranslate, handleClear};
}