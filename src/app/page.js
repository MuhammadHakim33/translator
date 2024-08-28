"use client";

import { useState } from 'react';
import language from './language.json';
import gemini from '../services/gemini'

export default function Home() {
	const [sentance, setSentance] = useState("");
	const [result, setResult] = useState("");
	const [langOrigin, setLangOrigin] = useState("Indonesian");
	const [langdestination, setLangdestination] = useState("English US");

	async function translate() {
		setResult(await gemini(sentance, langOrigin, langdestination));
		console.log(result);
	};

	function swap() {
		let langTemp = langOrigin;
		setLangOrigin(langdestination);
		setLangdestination(langTemp);
		let resultTemp = result;
		setResult(sentance);
		setSentance(resultTemp);
	}

	return (
		<main className="container max-w-4xl mx-auto my-6">
			<div className="flex gap-4">
				<div className='flex-1'>
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
					<button className="btn btn-sm btn-neutral mt-1" onClick={translate}>Translate</button>
				</div>
				<div className='flex-none'>
					<button className="btn btn-sm btn-ghost mt-1" onClick={swap}>
						<i className="ri-arrow-left-right-line"></i>
					</button>
				</div>
				<div className='flex-1'>
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
