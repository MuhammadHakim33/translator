"use client";

import {useState, useContext} from 'react';
import {SentenceContext} from '@/contexts/sentenceContext';
import {LanguageContext} from '@/contexts/languageContext';
import CardWrapper from '@/components/CardWrapper';
import SelectLang from '@/components/SelectLang';
import ButtonIcon from '@/components/ButtonIcon';
import TranslationBox from '@/components/TranslationBox';
import {IconArrowLeftRightLine, IconSendLine} from '@/components/icons';
import gemini from '@/services/gemini';
import languages from '@/libs/languages.json';

export default function Page() {
    const [translate, setTranslate] = useState("");
    const {sentence, setSentence} = useContext(SentenceContext);
    const [{source, setSource}, {target, setTarget}] = useContext(LanguageContext);

    const handleTranslate = async () => {
        let result = await gemini(sentence, source, target);
        setTranslate(result);
        console.log(result);
    }

    const handleSwapLang = () => {
        let temp = source;
        setSource(target);
		setTarget(temp);
    }

    return (
        <main className='max-w-5xl mx-4 md:mx-auto py-10 space-y-6'>
            <CardWrapper className="flex-row justify-between">
                <SelectLang
                    languages={languages} 
                    languageSelected={source} 
                    setLanguageSelected={setSource}
                    languageDisable={target}
                />
                <ButtonIcon onPress={handleSwapLang}>
                    <IconArrowLeftRightLine className='h-4 w-4' />
                </ButtonIcon>
                <SelectLang 
                    languages={languages} 
                    languageSelected={target} 
                    setLanguageSelected={setTarget} 
                    languageDisable={source} 
                />
            </CardWrapper>
            <CardWrapper className="flex-row justify-between gap-x-4">
                <TranslationBox placeholder="Type to translate" setValue={setSentence}>
                    <ButtonIcon onPress={handleTranslate} size="sm" className={sentence?"absolute right-2 top-2":"hidden"}>
                        <IconSendLine className='h-4 w-4'/>
                    </ButtonIcon>
                </TranslationBox>
                <TranslationBox placeholder="Translation" value={translate} isReadOnly={true} />
            </CardWrapper>
        </main>
    )
}