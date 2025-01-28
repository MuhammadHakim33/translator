import {useState, useContext} from 'react';
import gemini from '@/services/gemini';
import {SentenceContext} from '@/contexts/sentenceContext';
import {LanguageContext} from '@/contexts/languageContext';

export default function useTranslation() {
    const [isLoaded, setIsLoaded] = useState(true);
    const [translate, setTranslate] = useState("");
    const {sentence} = useContext(SentenceContext);
    const [{source}, {target}] = useContext(LanguageContext);
  
    const handleTranslate = async () => {
        try {
            setIsLoaded(false);
            const result = await gemini(sentence, source, target);
            setTranslate(result);
        } catch (error) {
            console.error("Translation error:", error);
        } finally {
            setIsLoaded(true);
        }
    };
  
    return {isLoaded, translate, handleTranslate};
}