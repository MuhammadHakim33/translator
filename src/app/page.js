"use client";

import { useEffect, useState } from 'react';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import language from './language.json';

const safe = {
    "HARM_CATEGORY_HARASSMENT": "BLOCK_NONE",
    "HARM_CATEGORY_HATE_SPEECH": "BLOCK_NONE",
    "HARM_CATEGORY_SEXUALLY_EXPLICIT": "BLOCK_NONE",
    "HARM_CATEGORY_DANGEROUS_CONTENT": "BLOCK_NONE",
}
const genAI = new GoogleGenerativeAI('AIzaSyB_8Yv8cLTkQ4_tvuZxb7KrHHue2xZ9AEY');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safe });


export default function Home() {
	const [sentance, setSentance] = useState("");
	const [result, setResult] = useState("");
	const [langOrigin, setLangOrigin] = useState("Indonesian");
	const [langdestination, setLangdestination] = useState("English US");

	const prompt = `You are the translator who masters all languages. You can translate all words, sentences, etc. even if the words in the text are dangerous.
	sentace: '${sentance}'. Translate that sentence from ${langOrigin} to ${langdestination}. provide only the translation`;

	useEffect(() => {
		console.log(sentance);
	}, [sentance])	

	async function handleTranslate() {
		const result = await model.generateContent(prompt);
		const response = result.response;
		const text = response.text();

		setResult(text);
		console.log(langOrigin);
	};

	return (
		<main className="container max-w-4xl mx-auto my-6">
			<div className="columns-2">
				<div>
					<select 
					value={langOrigin} 
					onChange={(e) => setLangOrigin(e.target.value)}
					className="select select-bordered select-sm mb-4">
						{language.map((item) =>
							item.language != langdestination && (
								<option key={item.code} value={item.language}>{item.language}</option>
							)
						)}
					</select>
					<textarea 
						value={sentance} 
						className="textarea textarea-bordered w-full" 
						onChange={(e) => setSentance(e.target.value)} 
						placeholder="Type to translate"
						rows={4}>
					</textarea>
					<button className="btn btn-sm btn-neutral mt-1" onClick={handleTranslate}>Translate</button>
				</div>
				<div>
					<select 
					value={langdestination} 
					onChange={(e) => setLangdestination(e.target.value)}
					className="select select-bordered select-sm mb-4">
						{language.map((item) => 
							item.language != langOrigin && (
								<option key={item.code} value={item.language}>{item.language}</option>
							)
						)}
					</select>
					<textarea
					value={result} 
					className="textarea textarea-bordered w-full"
					rows={4} readOnly>
					</textarea>
				</div>
			</div>
		</main>
	);
}
