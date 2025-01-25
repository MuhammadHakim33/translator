"use client";

import Control from "@/components/control";
import InputOutput from "@/components/inputoutput";

export default function Page() {
    return (
        <main className='max-w-5xl mx-4 md:mx-auto py-10 space-y-6'>
            <Control />
            <InputOutput />
        </main>
    )
}