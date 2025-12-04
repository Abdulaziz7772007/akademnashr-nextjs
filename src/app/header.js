export default function Header() {
	return (
		<div>
			<hr className='border-4 border-[#FF7500]' />
			<div className='bg-white '>
				<div className='container mx-auto px-5 flex justify-between  items-center w-full  p-10'>
					<a href='/'>
						<img src='./logo.svg' alt='logo' />
					</a>
					<nav className='flex text-black gap-10 items-center'>
						<a href='/' className='hover:text-blue-700'>
							BOSH SAHIFA
						</a>
						<a href='./kitoblar' className='hover:text-blue-700'>
							KITOBLAR{' '}
						</a>
						<a href='./aksiyalar' className='hover:text-blue-700'>
							AKSIYALAR
						</a>
						<a href='./kontaktlar' className='hover:text-blue-700'>
							KONTAKTLAR
						</a>
						<button className='btn bg-[#FF7500] px-5 py-2 w-60 rounded-md hover:text-amber-300 hover:bg-amber-900'>
							Ro'yxatdan o'tish
						</button>
					</nav>
				</div>
			</div>
		</div>
	)
}
