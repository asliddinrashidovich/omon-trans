function Contact() {
  return (
    <section className="px-3 md:px-10 pb-[70px]">
        <div className="max-w-[1368px] mx-auto grid grid-cols-2 items-center gap-[24px]">
            <div className="rounded-[50px] bg-[#fff] py-[171px] px-[30px]">
                <p className="text-[31px] font-[700] leading-[122%]">Agar sizda qanaqadir muammo yoki da boshqa narsa qiziqtiryatgan bolsa, biror bir xatolik yoki tushunmovchilik bolgan bolsa <span className="text-[#1A00E1]">OMON TRANS</span> 24/7 qollab quvvatlash xizmatiga murojat qiling siz bilan 24 soat ichida aloqaga chiqishadi.</p>
            </div>
            <div className="bg-[#fff] py-[33px] px-[43px] rounded-[50px]">
                <div className="border-[#1A00E1] mx-auto border-[6px] h-[0] w-[301px] mb-[43px]"></div>
                <form>
                    <input type="text" name="name" className="mb-[23px] rounded-[15px] bg-[#F3F3F3] text-[17px] font-[400] leading-[122%] text-[#ACA6A6] w-full py-[16px] px-8 outline-none" placeholder="Ismingiz"/>
                    <input type="tel" name="phone" className="mb-[23px] rounded-[15px] bg-[#F3F3F3] text-[17px] font-[400] leading-[122%] text-[#ACA6A6] w-full py-[16px] px-8 outline-none" placeholder="Telefon raqamingiz"/>
                    <input type="email" name="email" className="mb-[23px] rounded-[15px] bg-[#F3F3F3] text-[17px] font-[400] leading-[122%] text-[#ACA6A6] w-full py-[16px] px-8 outline-none" placeholder="Email manizlingiz"/>
                    <textarea name="message" className="mb-[23px] rounded-[15px] bg-[#F3F3F3] text-[17px] font-[400] leading-[122%] text-[#ACA6A6] w-full py-[16px] px-8 outline-none" placeholder="Xabaringizni qoldiring" rows={10}></textarea>
                    <button className="text-[35px] font-[700] w-full bg-[#1A00E1] rounded-[50px] text-[#fff] py-[22px] cursor-pointer">Yuborish</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact