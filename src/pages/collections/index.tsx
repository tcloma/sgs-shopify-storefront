import { Collection } from '@/types/shopifyTypes';
import { storeFront } from '@/utils/shopifyClient';
import { getAllCollectionIds, getAllCollections } from '@/utils/shopifyHelpers';
import Image from 'next/image';

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
		<main className='grid min-h-screen grid-cols-2 place-content-start bg-base-300 pt-64 text-center'>
			<h1 className='col-span-full text-5xl font-bold'>Collections</h1>
			{collections.map((col) => {
				if (col.title !== 'IG SALES')
					return (
						<div>
							<h2>{col.title}</h2>
							<Image
								className='aspect-square'
								alt='Collection prewview'
								src={col.image.src}
								width={400}
								height={400}
							/>
						</div>
					);
			})}
		</main>
	);
}
