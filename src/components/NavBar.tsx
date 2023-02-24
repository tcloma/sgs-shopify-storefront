import { BsBag } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
	return (
		<nav className='absolute flex w-full items-center justify-between p-8'>
			<motion.p
				whileHover={{ scale: 1.2, rotate: -15 }}
				className='select-none text-4xl'
			>
				<Image
					src='https://cdn.shopify.com/s/files/1/0017/2808/6067/files/Transparent_PNG_4_300x300.png?v=1614290034'
					height={100}
					width={100}
					alt='logo'
				/>
			</motion.p>
			<ul className='menu rounded-box menu-horizontal bg-base-100 p-2'>
				<li className='dropdown-left dropdown' tabIndex={0}>
					<span className='text-xl'>
						<HiMenuAlt3 />
					</span>
					<ul className='dropdown-content rounded-box mr-4 mt-[-.5rem] flex-row bg-base-100 p-2'>
						<li className='w-auto'>
							<Link href={'/'}>Home</Link>
						</li>
						<li className='w-auto'>
							<Link href={'/collections'}>Collections</Link>
						</li>
						<li className='w-auto'>
							<a>Learning</a>
						</li>
					</ul>
				</li>
				<li>
					<a className='text-xl'>
						<BsBag />
					</a>
				</li>
			</ul>
		</nav>
	);
}
