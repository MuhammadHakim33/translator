import "../styles/globals.css";

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
