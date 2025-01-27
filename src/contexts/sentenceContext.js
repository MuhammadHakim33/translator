import {useState, createContext} from "react";

export const SentenceContext = createContext();

export function SentenceContextProvider({children}) {
    const [sentence, setSentence] = useState("");

    return (
        <SentenceContext.Provider value={{sentence, setSentence}}>
            {children}
        </SentenceContext.Provider>
    )
}