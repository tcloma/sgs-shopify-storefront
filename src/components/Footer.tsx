import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
	return (
		<>
			<footer className='footer bg-base-200 p-10 text-base-content'>
				<div>
					<span className='footer-title'>Company</span>
					<a className='link-hover link'>About</a>
					<a className='link-hover link'>Collections</a>
					<a className='link-hover link'>Learning</a>
				</div>
				<div>
					<span className='footer-title'>Policies</span>
					<a className='link-hover link'>Terms of use</a>
					<a className='link-hover link'>Shop Policy</a>
					<a className='link-hover link'>Return Policy</a>
					<a className='link-hover link'>Privacy Policy</a>
				</div>
				<div>
					<span className='footer-title'>Mailing List</span>
					<div className='form-control w-80'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Email Address'
								className='input-bordered input w-full pr-16'
							/>
							<button className='btn-primary btn absolute top-0 right-0 rounded-l-none'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</footer>
			<footer className='footer border-t border-base-300 bg-base-200 px-10 py-4 text-base-content'>
				<div className='grid-flow-col items-center'>
					<p className='font-bold text-neutral'>
						© 2023, Sacred Goddess Studio
					</p>
				</div>
				<div className='md:place-self-center md:justify-self-end'>
					<div className='grid grid-flow-col gap-4'>
						<a>
							<FaFacebookF className='text-2xl' />
						</a>
						<a>
							<FaInstagram className='text-2xl' />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
