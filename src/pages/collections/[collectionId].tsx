
export async function getStaticPaths() {
	return {
		paths: [
			{ params: { collectionId: '1' } },
			{ params: { collectionId: '2' } },
		],
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
    return {
        props: {
            products: { test: "Product" }
        }
    }
}

export default function CollectionPage({ products }) {
	return (
		<div>
			<h1>{JSON.stringify(products)}</h1>
		</div>
	);
}
