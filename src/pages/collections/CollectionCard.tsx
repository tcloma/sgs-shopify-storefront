import { Collection } from '@/types/shopifyTypes';
import Image from 'next/image';

type Props = { collection: Collection };

export default function CollectionCard({ collection }: Props) {
	return (
		<div className='bg-base-200 rounded-box shadow-md'>
			<h2 className='text-xl font-bold p-4'>{collection.title}</h2>
			<Image
				className='aspect-square'
				alt='Collection preview'
				src={collection.image.src}
				width={400}
				height={400}
			/>
		</div>
	);
}
