'use client'

import {HeroUIProvider} from '@heroui/react';
import {SentenceContextProvider} from "@/contexts/sentenceContext";
import {LanguageContextProvider} from "@/contexts/languageContext";

export function Providers({children}) {
    return (
        <SentenceContextProvider>
            <LanguageContextProvider>
                <HeroUIProvider>
                    {children}
                </HeroUIProvider>
            </LanguageContextProvider>
        </SentenceContextProvider>
    )
}