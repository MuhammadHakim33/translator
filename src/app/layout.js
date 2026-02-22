import {SpeedInsights} from '@vercel/speed-insights/next';
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
				
				<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17968986140"></script>
				<script>
				  	window.dataLayer = window.dataLayer || [];
				  	function gtag(){dataLayer.push(arguments);}
				  	gtag('js', new Date());
				 	gtag('config', 'AW-17968986140');
				</script>
			</body>
		</html>
	);
}
