import Client from 'shopify-buy';

export const storeFront = Client.buildClient({
	domain: process.env.NEXT_PUBLIC_API_URL as string,
	storefrontAccessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN as string,
});