"use client";

import {useContext} from 'react';
import {Skeleton} from "@heroui/skeleton";
import {Alert} from "@heroui/react";
import {SentenceContext} from '@/contexts/sentenceContext';
import {LanguageContext} from '@/contexts/languageContext';
import CardWrapper from '@/components/CardWrapper';
import SelectLang from '@/components/SelectLang';
import ButtonIcon from '@/components/ButtonIcon';
import TranslationBox from '@/components/TranslationBox';
import {IconArrowLeftRightLine, IconSendLine} from '@/components/icons';
import languages from '@/libs/languages.json';
import useTranslation from '@/hooks/useTranslation';

export default function Page() {
    const {sentence, setSentence} = useContext(SentenceContext);
    const [{source, setSource}, {target, setTarget}] = useContext(LanguageContext);
    const {
        isLoaded, 
        isError, 
        setIsError, 
        translate, 
        handleSwapLanguage, 
        handleTranslate
    } = useTranslation();

    return (
        <main className='max-w-5xl mx-4 md:mx-auto py-10 space-y-6'>
            <CardWrapper className="flex-row justify-between">
                <SelectLang
                    languages={languages} 
                    languageSelected={source} 
                    setLanguageSelected={setSource}
                    languageDisable={target}
                />
                <ButtonIcon onPress={handleSwapLanguage}>
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
                <TranslationBox placeholder="Type to translate" value={sentence} setValue={setSentence}>
                    {sentence && (
                        <ButtonIcon onPress={handleTranslate} size="sm" className="absolute right-2 top-2">
                            <IconSendLine className='h-4 w-4'/>
                        </ButtonIcon>
                    )}
                </TranslationBox>
                <Skeleton className='w-full' isLoaded={isLoaded}>
                    <TranslationBox placeholder="Translation" value={translate} isReadOnly={true} />
                </Skeleton>
            </CardWrapper>
            
            {isError && (
                <Alert 
                    hideIcon 
                    isVisible={isError}
                    color={"danger"} 
                    title={`Sistem Error`}
                    description={"Mohon coba lagi."}
                    classNames={{
                        base: "max-w-xs"
                    }}
                    onClose={() => setIsError(false)}
                />
            )}
        </main>
    )
}