export default function page() {
	return (
		<div>
			<hr className='border-4 border-[#FF7500]' />
			<div className='bg-white '>
				<div className='container mx-auto px-5 flex justify-between  items-center w-full  p-10'>
					<a href=' #'>
						<img src='./logo.svg' alt='logo' />
					</a>
					<nav className='flex text-black gap-10 items-center'>
						<a href='#' className='hover:text-blue-700'>
							BOSH SAHIFA
						</a>
						<a href='#' className='hover:text-blue-700'>
							KITOBLAR{' '}
						</a>
						<a href='#' className='hover:text-blue-700'>
							AKSIYALAR
						</a>
						<a href='#' className='hover:text-blue-700'>
							KONTAKTLAR
						</a>
						<button className='btn bg-[#FF7500] px-5 py-2 w-60 rounded-md hover:text-amber-300 hover:bg-amber-900'>
							Ro'yxatdan o'tish
						</button>
					</nav>
				</div>
			</div>
			<div className='bg-[#252420]'>
				<div className='container mx-auto px-5 flex  justify-between'>
					<div className='w-[400px] h-[350px] '>
						<hr className='border-2 w-20 mt-10 border-[#FF7500]' />
						<h1 className='text-4xl mt-10 '>Pythonda dasturlash asoslari</h1>
						<p className='mt-10'>
							Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal
							qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar
							yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish
							mumkin.
						</p>
						<button className='bg-[#FF7500] mt-10 p-2 hover:text-amber-300 hover:bg-amber-900'>
							Buyurtma berish
						</button>
					</div>
					<div className='transform translate-y-10'>
						<img src='./python-book.jpg' alt='Python book' />
					</div>
				</div>
			</div>
			<div className='container mx-auto px-5 mb-20'>
				<hr className='border-2 w-20 border-[#FF7500] mt-20' />
				<h1 className='text-6xl text-black mt-10'>Nega aynan Akademnashr?</h1>
				<div className='flex mt-10 justify-between'>
					<div className=' text-black '>
						<img src='./icon1.png' alt='' />
						<h2 className='mt-5 mb-5 text-2xl'>Oson buyurtma qilish</h2>
						<p>
							Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
							buyurtma qila olasiz.
						</p>
					</div>
					<div className=' text-black '>
						<img src='./icon2.png' alt='' />
						<h2 className=' mt-5 mb-5 text-2xl'>Eng sara kitoblar</h2>
						<p>
							Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har xil
							janrdagi kitoblarni topa olasiz.
						</p>
					</div>
					<div className=' text-black '>
						<img src='./icon3.png' alt='' />
						<h2 className='text-2xl mt-5 mb-5'>Tez yetkazib berish</h2>
						<p>
							O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro
							buyurtmalarni 10 ish kuni ichida yetkazib beriladi.
						</p>
					</div>
				</div>
			</div>
			<div className='container mx-auto px-10'>
				<div className='bg-[#252420] flex justify-between px-10 rounded-md'>
					<div className='w-[440px] mt-10'>
						<h2 className='text-4xl'>Bolalar kitoblari uchun ajoyib aksiya!</h2>
						<p className='mt-10 mb-5 '>
							Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun
							turli mashq qo’llanmalari va komikslar.
						</p>
						<p>
							Aksiyadagi eng katta to’plamda 50 ta kitobni 350 ming so’mga
							(aslida 383 ming so’m) sotib olishingiz mumkin.
						</p>
						<button className='bg-[#FF7500] mt-10 p-2 hover:text-amber-300 hover:bg-amber-900'>
							Buyurtma berish
						</button>
					</div>
					<div className='transform rounded-md translate-y-[-40px]'>
						<img src='./sale-img.jpg' alt='books' />
					</div>
				</div>
			</div>
			<div className='container mx-auto mt-10 px-5'>
				<div className='flex justify-between items-center'>
					<a href='#'>
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
