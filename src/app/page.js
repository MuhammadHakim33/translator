"use client";

import {useContext} from 'react';
import {Skeleton} from "@heroui/skeleton";
import {SentenceContext} from '@/contexts/sentenceContext';
import {LanguageContext} from '@/contexts/languageContext';
import CardWrapper from '@/components/CardWrapper';
import SelectLang from '@/components/SelectLang';
import ButtonIcon from '@/components/ButtonIcon';
import TranslationBox from '@/components/TranslationBox';
import AlertPopup from '@/components/AlertPopup';
import {IconArrowLeftRightLine, IconSendLine, IconCloseLine} from '@/components/icons';
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
        handleTranslate,
        handleClear
    } = useTranslation();

    return (
        <main className='max-w-5xl md:mx-auto py-10 px-4 space-y-6'>
            <CardWrapper>
                <div className="flex divide-x border">
                    <SelectLang
                        languages={languages} 
                        languageSelected={source} 
                        setLanguageSelected={setSource}
                        languageDisable={target}
                    />
                    <ButtonIcon radius="none" size="sm" onPress={handleSwapLanguage}>
                        <IconArrowLeftRightLine className='h-4 w-4' />
                    </ButtonIcon>
                    <SelectLang 
                        languages={languages} 
                        languageSelected={target} 
                        setLanguageSelected={setTarget} 
                        languageDisable={source} 
                    />
                </div>
                <div className="flex flex-col md:flex-row divide-x divide-y border border-t-0">
                    <TranslationBox 
                        placeholder="Type to translate" 
                        value={sentence} 
                        setValue={setSentence}
                    >
                        {sentence && (
                            <div className="flex flex-col gap-y-2 absolute right-2 top-2">
                                <ButtonIcon radius="none" onPress={handleTranslate} size="sm" className="">
                                    <IconSendLine className='h-4 w-4'/>
                                </ButtonIcon>

                                <ButtonIcon radius="none" onPress={handleClear} size="sm" className="">
                                    <IconCloseLine className='h-4 w-4'/>
                                </ButtonIcon>
                            </div>
                        )}
                    </TranslationBox>
                    <Skeleton className='w-full' isLoaded={isLoaded}>
                        <TranslationBox 
                            placeholder="Translation" 
                            value={translate} 
                            isReadOnly={true} 
                        />
                    </Skeleton>
                </div>
            </CardWrapper>

            {isError && (
                <AlertPopup 
                    hideIcon
                    variant="solid"
                    isVisible={isError}
                    color="danger"
                    title="Sistem Error! Mohon coba lagi."
                    onClose={() => setIsError(false)}
                />
            )}
        </main>
    )
}