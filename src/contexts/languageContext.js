import {useState, createContext} from "react";

export const LanguageContext = createContext();

export function LanguageContextProvider({children}) {
    const [source, setSource] = useState("Indonesian");
	const [target, setTarget] = useState("English US");

    return (
        <LanguageContext.Provider value={
            [{source, setSource}, 
             {target, setTarget}]
        }>
            {children}
        </LanguageContext.Provider>
    )
}