import { Collection } from '@/types/shopifyTypes';
import { storeFront } from '@/utils/shopifyClient';

type Props = {
	collections: Collection[];
};

export async function getStaticProps() {
	const res = await storeFront.collection.fetchAll();
	return {
		props: {
			collections: JSON.parse(JSON.stringify(res)),
		},
	};
}

export default function Collections({ collections }: Props) {
	return (
		<main className='grid min-h-screen grid-cols-2 place-content-start bg-base-300 pt-64 text-center'>
			<h1 className='col-span-full text-5xl font-bold'>Collections</h1>
			{collections.map((col) => {
                if (col.title !== "IG SALES")
				return (
					<div>
						<h2>{col.title}</h2>
					</div>
				);
			})}
		</main>
	);
}
