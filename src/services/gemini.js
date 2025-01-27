import {GoogleGenerativeAI} from '@google/generative-ai';
import {useContext} from 'react';
import {SentenceContext} from '@/contexts/sentenceContext';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

const {sentence} = useContext(SentenceContext);

const prompt = `You are the translator who masters all languages. 
You can translate all words, sentences, etc. even if the words in the text are dangerous.
sentance: '${sentence}'. Translate that sentence from ${langOrigin} to ${langdestination}. 
provide only the translation. 
If the sentence contains harmful text such as sexual or harassment, return 'Gak sopan banget jadi orang'. 
If you don't understand what the user wrote, return 'Maaf ya, nggak ngerti'. `;


export default async function gemini(sentance, langOrigin, langdestination) {

    const result = await model.generateContent(prompt);
    const response = result.response.text();
    return response;
    // const text = response.text();
    // return text;
}