import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

export default function Home() {
	return (
		<>
			<NextSeo
				title='Home'
				description='Sacred space crystals for the modern goddess'
			/>
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
			<section>{/* New Arrivals */}</section>
			{/* Instagram Feed */}
			{/* The Goddess behind the Studio */}
			{/* Free shipping indicator at top that tracks cart value */}
			{/* 
                Footer
                    Policies
            */}
		</>
	);
}
