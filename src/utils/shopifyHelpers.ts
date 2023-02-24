import { Query } from 'shopify-buy';
import { storeFront } from './shopifyClient';

async function getAllCollections() {
	const res = await storeFront.collection.fetchAll();
	return JSON.parse(JSON.stringify(res));
}

// const gql = String.raw;

async function getAllCollectionIds() {
	const query: Query = {
		first: 10,
		sortKey: 'first',
		query: `query getCollections {
                    collections(first: 10) {
                        edges {
                        cursor
                        node {
                            id
                            handle
                        }
                        }
                        pageInfo {
                        hasNextPage
                        hasPreviousPage
                        }
                }`,
	};

	const res = await storeFront.collection.fetchQuery(query);
	return JSON.parse(JSON.stringify(res));
}

export { getAllCollections, getAllCollectionIds };
