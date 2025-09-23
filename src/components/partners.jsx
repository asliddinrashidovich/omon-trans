function Partners() {
    const arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  return (
     <section className="px-3 md:px-10 pb-[40px] md:pb-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div className="flex justify-center">
                <div className="flex justify-center flex-col items-center mb-[28px] md:mb-[70px] py-[10px] sm:py-[15px] px-[40px] sm:px-[60px] text-center bg-[#1A00E1] rounded-[35px]">
                    <h2 className="text-[35px] lg:text-[55px] font-[700]  text-[#fff]">Hamkorlar</h2>  
                    <hr className="md:hidden flex border-[1px] border-[#FFFFFF] w-[130px] mt-[7px]"/>
                </div>
            </div>
            <div className="bg-[#fff] rounded-[50px] p-[30px] md:p-[60px]">
                <h3 className="text-[20px] md:text-[25px] font-[700] leading-[122%] text-center mb-[20px] md:mb-[70px]">{`Kuchli hamkorlik – muvaffaqiyatli biznes! Bizning ishonchli logistika hamjamiyatimizga qo'shiling va yangi imkoniyatlar dunyosini oching.`}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 justify-between  gap-x-[34px] gap-y-[30px]">
                    {arr.map((item, i) => (
                        <div key={i} className="px-[44px] py-[30px] border-[2px] border-[#000] rounded-[35px]">
                            <h2 className="text-[25px] md:text-[40px] lg:text-[55px] font-[800] leading-[122%] text-[#000]">LOGO1</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners