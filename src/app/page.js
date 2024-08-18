"use client";

import { useEffect, useState } from 'react';
import language from './language.json';

export default function Home() {
	const [translate, setTranslate] = useState("");
	const [output, setOutput] = useState({});

	useEffect(() => {
		console.log(translate);
	}, [translate])	

	async function handleTranslate() {
		let res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB_8Yv8cLTkQ4_tvuZxb7KrHHue2xZ9AEY', {
			method: "POST",
			body: JSON.stringify(
				{
					"contents": [{
						"parts":[{"text": `sentace: '${translate}'. Translate that sentence from indonesia to english. provide only the translation`}]
					}]
				}
			),
		});
		setOutput(await res.json());
		console.log(output.candidates[0].content.parts[0].text);
	};

	return (
		<main className="container max-w-4xl mx-auto my-6">
			<div className="columns-2">
				<div>
					<select className="select select-bordered select-sm mb-4">
						{language.map((item) => 
							<option key={item.code}>{item.language}</option>
						)}
					</select>
					<textarea 
						value={translate} 
						className="textarea textarea-bordered w-full" 
						onChange={(e) => setTranslate(e.target.value)} 
						placeholder="Type to translate">
					</textarea>
					<button className="btn btn-sm btn-neutral mt-1" onClick={handleTranslate}>Translate</button>
				</div>
				<div>
					<select className="select select-bordered select-sm mb-4">
						{language.map((item) => 
							<option key={item.code}>{item.language}</option>
						)}
					</select>
					<textarea 
					value={output.candidates[0].content.parts[0].text}
					className="textarea textarea-bordered w-full" readOnly>
					</textarea>
				</div>
			</div>
		</main>
	);
}
