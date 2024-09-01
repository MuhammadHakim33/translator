"use client";

import { useState, useEffect } from 'react';
import language from './libs/language.json';
import gemini from '../services/gemini'
import Textarea from './components/textarea';

export default function Home() {
	const [sentance, setSentance] = useState("");
	const [result, setResult] = useState("");
	const [langOrigin, setLangOrigin] = useState("Indonesian");
	const [langdestination, setLangdestination] = useState("English US");
	const [loading, setLoading] = useState(false);

	async function translate() {
		if (sentance == "") {
			return;
		}
		setLoading(true);
		setResult(await gemini(sentance, langOrigin, langdestination));
		setLoading(false);
	};

	function swap() {
		let langTemp = langOrigin;
		let resultTemp = result;
		setLangOrigin(langdestination);
		setLangdestination(langTemp);
		setResult(sentance);
		setSentance(resultTemp);
	}

	function clear() {
		setSentance("");
		setResult("");
	}

	return (
		<main className='max-w-5xl mx-4 md:mx-auto py-10'>
			<div className='border'>
				<div className='flex justify-evenly bg-white px-2 py-2 border-b'>
					<select 
						className="select-lang" 
						value={langOrigin}
						onChange={(e) => setLangOrigin(e.target.value)}
					>
						{language.map((item) => 
							<option 
								key={item.code} 
								value={item.language}
								disabled={item.language == langdestination && true}
							>
								{item.language}
							</option>
						)}
					</select>
					<button className="btn-swap" onClick={swap}>
						<i className="ri-arrow-left-right-line ri-lg"></i>
					</button>
					<select 
						className="select-lang" 
						value={langdestination}
						onChange={(e) => setLangdestination(e.target.value)}
					>
						{language.map((item) => 
							<option 
								key={item.code} 
								value={item.language}
								disabled={item.language == langOrigin && true}
							>
								{item.language}
							</option>
						)}
					</select>
				</div>
				<div className='flex justify-evenly flex-col md:flex-row'>
					<div className='flex-1 flex bg-white relative border-r'>
						<Textarea 
							className='textarea' 
							placeholder='Type to translate' 
							rows={10}
							value={sentance}
							onChange={(e) => setSentance(e.target.value)} 
						/>
						<div className='flex flex-col gap-y-3 pt-4 pr-4'>
							<button 
								className="btn-translate" 
								onClick={translate}
								disabled={sentance == "" && true}
							>
								<i className="ri-send-plane-2-line text-white"></i>
							</button>
							{sentance != "" && 
								<button className="btn-clear" onClick={clear}>
									<i className="ri-close-large-line ri-lg"></i>
								</button>
							}
						</div>
					</div>
					{loading ? 
						<div className='flex-1 bg-neutral-100'>
							<div className='p-4 animate-pulse space-y-2'>
								<div className='h-4 bg-neutral-300 max-w-full'></div>
								<div className='h-4 bg-neutral-300 max-w-64'></div>
								<div className='h-4 bg-neutral-300 max-w-32'></div>
							</div>
						</div> :
						<div className='flex-1 bg-neutral-100'>
							<Textarea 
								className='textarea' 
								placeholder='Translation' 
								rows={10}
								value={result}
								readOnly={true}
							/>
						</div>
					}
				</div>
			</div>
		</main>
	);
}
