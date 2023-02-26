import { Collection } from '@/types/shopifyTypes';
import { storeFront } from '@/utils/shopifyClient';
import { getAllCollectionIds, getAllCollections } from '@/utils/shopifyHelpers';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import CollectionCard from './CollectionCard';

type Props = {
	collections: Collection[];
};

export async function getStaticProps() {
	return {
		props: {
			collections: await getAllCollections(),
		},
	};
}

export default function Collections({ collections }: Props) {
	console.log(collections);

	return (
		<>
			<NextSeo
				title='Collections'
				description='Crystal collections for all moods'
			/>
			<main className='flex min-h-screen flex-col items-center pt-20 gap-4 bg-base-300 text-center'>
				<h1 className='text-5xl font-bold'>Collections</h1>
				<div className='grid grid-cols-2 gap-6'>
					{collections.map((col) => {
						if (col.title !== 'IG SALES')
							return <CollectionCard collection={col} />;
					})}
				</div>
			</main>
		</>
	);
}
