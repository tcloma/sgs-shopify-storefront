import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<DefaultSeo
				titleTemplate='Sacred Goddess Studio | %s'
				defaultTitle='Sacred Goddess Studio'
				additionalLinkTags={[
					{
						rel: 'icon',
						href: '/favicons/favicon-32x32.png',
						sizes: '32x32',
					},
					{
						rel: 'icon',
						href: '/favicons/favicon-16x16.png',
						sizes: '16x16',
					},
					{
						rel: 'apple-touch-icon',
						href: '/favicons/apple-touch-icon.png',
						sizes: '180x180',
					},
					{
						rel: 'manifest',
						href: '/site.webmanifest',
					},
				]}
			/>
			<Component {...pageProps} />
		</Layout>
	);
}
