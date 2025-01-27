'use client'

import {HeroUIProvider} from '@heroui/react';
import {SentenceContextProvider} from "@/contexts/sentenceContext";

export function Providers({children}) {
    return (
        <SentenceContextProvider>
            <HeroUIProvider>
                {children}
            </HeroUIProvider>
        </SentenceContextProvider>
    )
}