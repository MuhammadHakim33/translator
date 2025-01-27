"use client";

import {useState, useContext} from 'react';
import {SentenceContext} from '@/contexts/sentenceContext';
import CardWrapper from '@/components/CardWrapper';
import SelectLang from '@/components/SelectLang';
import ButtonIcon from '@/components/ButtonIcon';
import TranslationBox from '@/components/TranslationBox';
import {IconArrowLeftRightLine, IconSendLine} from '@/components/icons';
import languages from '@/libs/languages.json';

export default function Page() {
    const [languageSource, setLanguageSource] = useState("Indonesian");
	const [languageTarget, setLanguageTarget] = useState("English US");
    const {sentence, setSentence} = useContext(SentenceContext);

    const handleSwapLang = () => {
        let temp = languageSource;
        setLanguageSource(languageTarget);
		setLanguageTarget(temp);
    }

    return (
        <main className='max-w-5xl mx-4 md:mx-auto py-10 space-y-6'>
            <CardWrapper className="flex-row justify-between">
                <SelectLang
                    languages={languages} 
                    languageSelected={languageSource} 
                    setLanguageSelected={setLanguageSource}
                    languageDisable={languageTarget}
                />
                <ButtonIcon onPress={handleSwapLang}>
                    <IconArrowLeftRightLine className='h-4 w-4' />
                </ButtonIcon>
                <SelectLang 
                    languages={languages} 
                    languageSelected={languageTarget} 
                    setLanguageSelected={setLanguageTarget} 
                    languageDisable={languageSource} 
                />
            </CardWrapper>
            <CardWrapper className="flex-row justify-between gap-x-4">
                <TranslationBox placeholder="Type to translate" setValue={setSentence}>
                    <ButtonIcon size="sm" className={sentence?"absolute right-2 top-10":"hidden"}>
                        <IconSendLine className='h-4 w-4'/>
                    </ButtonIcon>
                </TranslationBox>
                <TranslationBox placeholder="Translation" isReadOnly={true} />
            </CardWrapper>
        </main>
    )
}