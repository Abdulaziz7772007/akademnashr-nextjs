export default function page() {
	return (
		<div>
			
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
			
		</div>
	)
}
