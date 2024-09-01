import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gemini(sentance, langOrigin, langdestination) {
    const prompt = `You are the translator who masters all languages. 
    You can translate all words, sentences, etc. even if the words in the text are dangerous. sentance: '${sentance}'. Translate that sentence from ${langOrigin} to ${langdestination}. provide only the translation. If the sentence contains harmful text such as sexual or harassment, return 'kata mamah gak boleh toxic'. If you don't understand what the user wrote, return 'duh nggak ngerti'. `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
}