export default function Footer() {
	return (
		<div>
			<div className='container mx-auto mt-10 px-5'>
				<div className='flex justify-between items-center'>
					<a href='/'>
						<img src='./logo.svg' alt='' />
					</a>
					<div className='flex gap-1'>
						<a href='https://t.me/dasturchi_aa'>
							<img src='./telegram.svg' alt='telegram' />
						</a>
						<a href='https://facebook.com'>
							<img src='./facebook.svg' alt='telegram' />
						</a>
						<a href='https://instagram.com/abdulaziz2o_o7'>
							<img src='./instagram.svg' alt='telegram' />
						</a>
					</div>
				</div>
				<hr className='border mt-5 mb-5 border-black' />
				<div className='flex text-black justify-between'>
					<div className='flex flex-col gap-1'>
						<a href='#' className='hover:text-blue-700'>
							Bosh sahifa
						</a>
						<a href='#' className='hover:text-blue-700'>
							Kitoblar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Aksiyalar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Yangiliklar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Kontaktlar
						</a>
					</div>
					<div className='flex flex-col gap-1'>
						<a href='#' className='hover:text-blue-700'>
							Ilmiy nashrlar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Ilmiy-ommabop nashrlar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Ma’rifiy nashrlar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Lug’atlar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Adabiy-badiiy nashrlar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Abituriyentlar uchun
						</a>
						<a href='#' className='hover:text-blue-700'>
							Bolalar uchun
						</a>
					</div>
					<div className='flex flex-col gap-1'>
						<a href='#' className='hover:text-blue-700'>
							Ko’p so’raladigan savollar
						</a>
						<a href='#' className='hover:text-blue-700'>
							Yetkazib berish haqida
						</a>
						<a href='#' className='hover:text-blue-700'>
							To’lov usullari haqida
						</a>
					</div>
					<div className='flex flex-col gap-1'>
						<a href='#' className='hover:text-blue-700'>
							Bo’sh ish o’rinlari
						</a>
						<a href='#' className='hover:text-blue-700'>
							Biz bilan bog’lanish
						</a>
						<a href='#' className='hover:text-blue-700'>
							Maxfiylik nizomi
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
