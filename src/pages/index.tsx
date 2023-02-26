import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Home() {
	const testArrivals = [
		{ img: '/placeholders/wide.jpg' },
		{ img: '/placeholders/wide.jpg' },
		{ img: '/placeholders/wide.jpg' },
		{ img: '/placeholders/wide.jpg' },
	];

	return (
		<>
			<NextSeo
				title='Home'
				description='Sacred space crystals for the modern goddess'
			/>
            {/* Add cursor gimmick to hero section as overlay */}
			<section className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col text-center'>
					<motion.h1
						initial={{ y: '50%', opacity: 0, scale: 0.5 }}
						animate={{ y: 0, opacity: 1, scale: 1 }}
						className='text-9xl font-bold'
					>
						Sacred Goddess Studio
					</motion.h1>
					<p className='py-6 text-3xl text-neutral'>
						High Vibe Crystals for the Modern Goddess
					</p>
				</div>
			</section>
            {/* Try to make infinite carousel */}
			<section className='flex h-[70vh] flex-col gap-4 p-8'>
				<h2 className='ml-24 text-4xl font-bold'>New Arrivals</h2>
				<div className='flex w-full items-center justify-center gap-4'>
					{testArrivals.map((product) => {
						return (
							<div className='h-60 w-60'>
								<Image
									src={product.img}
									className='aspect-square rounded-box'
									height={600}
									width={600}
									alt='preview'
								/>
							</div>
						);
					})}
				</div>
			</section>
			<section className='px-[15%] mb-20'>
				<div className='card bg-base-100 shadow-2xl shadow-neutral lg:card-side'>
					<figure>
						<Image
							src='/placeholders/vertical.jpg'
							alt='Nina'
                            height={1000}
                            width={600}
						/>
					</figure>
					<div className='card-body w-2/3'>
						<h2 className='card-title text-2xl'>The Goddess behind the Studio</h2>
                        <h3 className='text-neutral font-bold text-lg underline'>Who?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odio labore explicabo error alias maiores, cupiditate eum deleniti aut similique doloremque optio quos est velit veritatis aperiam harum? Impedit, voluptate!</p>
                        <h3 className='text-neutral font-bold text-lg underline'>Why?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odio labore explicabo error alias maiores, cupiditate eum deleniti aut similique doloremque optio quos est velit veritatis aperiam harum? Impedit, voluptate!</p>
                        <h3 className='text-neutral font-bold text-lg underline'>What Next?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odio labore explicabo error alias maiores, cupiditate eum deleniti aut similique doloremque optio quos est velit veritatis aperiam harum? Impedit, voluptate!</p>

						<div className='card-actions justify-end'>
						</div>
					</div>
				</div>
			</section>
			{/* Free shipping indicator at top that tracks cart value */}
		</>
	);
}
