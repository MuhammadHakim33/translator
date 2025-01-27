"use client";

import {useState, useContext} from 'react';
import {SentenceContext} from '@/contexts/sentenceContext';
import CardWrapper from '@/components/CardWrapper';
import SelectLang from '@/components/SelectLang';
import ButtonIcon from '@/components/ButtonIcon';
import TranslationBox from '@/components/TranslationBox';
import {IconArrowLeftRightLine, IconSendLine} from '@/components/icons';
import language from '@/libs/language.json';

export default function Page() {
    const [langOrigin, setLangOrigin] = useState("Indonesian");
	const [langDestination, setLangDestination] = useState("English US");
    const {sentence, setSentence} = useContext(SentenceContext);

    const handleSwapLang = () => {
        let temp = langOrigin;
        setLangOrigin(langDestination);
		setLangDestination(temp);
    }

    return (
        <main className='max-w-5xl mx-4 md:mx-auto py-10 space-y-6'>
            <CardWrapper className="flex-row justify-between">
                <SelectLang 
                    items={language} 
                    itemSelected={langOrigin} 
                    setitemSelected={setLangOrigin}
                    disabledKeys={[langDestination]}
                />
                <ButtonIcon onPress={handleSwapLang}>
                    <IconArrowLeftRightLine className='h-4 w-4' />
                </ButtonIcon>
                <SelectLang 
                    items={language} 
                    itemSelected={langDestination} 
                    setitemSelected={setLangDestination} 
                    disabledKeys={[langOrigin]} 
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