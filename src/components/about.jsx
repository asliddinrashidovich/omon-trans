function About() {
  return (
    <section className="px-3 md:px-10 py-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div className="w-full flex justify-center mb-[70px]">
                <h2 className="text-[55px] font-[700] py-[15px] px-[60px] text-center bg-[#1A00E1] rounded-[35px] text-[#fff]">BIZ HAQIMIZDA</h2>  
            </div>
            <div className="grid grid-cols-2 gap-[10px] mb-[10px]">
                <div className="p-[42px] my-box px-[35px] border-[#0C114666] border-[1px] border-dashed dashes-[20] rounded-[50px]">
                    <p className="text-[32px] font-[700] leading-[122%]"><span className="text-[#10186D]">OMON TRANS</span>{`,- bu O'zbekistondagi yetakchi logistika va transport kompaniyasi bo'lib, O’zbekiston bo’ylab yuk tashish, boj clearance va zanjir boshqaruvi xizmatlarini taklif etadi. `}</p>
                    <br />
                    <p className="text-[32px] font-[700] leading-[122%]">{`Bizning missiyamiz - mijozlarimizga ishonchli, tez va innovatsion logistika yechimlarini taqdim etish orqali ularning biznesi rivojlanishiga hissa qo'shish.`}</p>
                </div>
                <div className="rounded-[50px]">
                    <img src="/images/model.jpg" alt="model" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-[5px]">
                <div className="border-[1px] border-[#1A00E166] border-dashed rounded-[50px] h-[338px] flex items-center justify-center flex-col gap-[6px]">
                    <h3 className="text-[#0C1146] text-[85px] font-[700]">12+</h3>
                    <p className="text-[25px] font-[700] leading-[122%]">Yillik Tajriba</p>
                </div>
                <div className="border-[1px] border-[#1A00E166] border-dashed rounded-[50px] h-[338px] flex items-center justify-center flex-col gap-[6px]">
                    <h3 className="text-[#0C1146] text-[70px] font-[700]">3000+</h3>
                    <p className="text-[25px] font-[700] leading-[122%]">Korporativ Mijozlar</p>
                </div>
                <div className="border-[1px] border-[#1A00E166] border-dashed rounded-[50px] h-[338px] flex items-center justify-center flex-col gap-[6px]">
                    <h3 className="text-[#0C1146] text-[60px] font-[700]">12000+</h3>
                    <p className="text-[25px] font-[700] leading-[122%]">Muvaffaqiyatli Yetkazish</p>
                </div>
                <div className="border-[1px] border-[#1A00E166] border-dashed rounded-[50px] h-[338px] flex items-center justify-center flex-col gap-[6px]">
                    <h3 className="text-[#0C1146] text-[85px] font-[700]">15+</h3>
                    <p className="text-[25px] font-[700] leading-[122%]">Xalqaro Hamkorlar</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About