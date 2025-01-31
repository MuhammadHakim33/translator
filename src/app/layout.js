import { SpeedInsights } from '@vercel/speed-insights/next';
import "../styles/globals.css";
import {Providers} from "./providers";

export const metadata = {
	title: "Translator",
	description: "AI Translator",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className='min-h-screen bg-neutral-50'>
				<Providers>
					{children}
				</Providers>
				<SpeedInsights />
			</body>
		</html>
	);
}
