import NavBar from '@/components/NavBar';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en' data-theme='garden'>
			<Head />
			<body>
				<NavBar />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
