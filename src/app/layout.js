import "../styles/globals.css";
import 'remixicon/fonts/remixicon.css'

export const metadata = {
	title: "Translator",
	description: "AI Translator",
};

export default function RootLayout({ children }) {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
