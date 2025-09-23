function Partners() {
    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  return (
     <section className="px-3 md:px-10 pb-[40px] md:pb-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div className="flex justify-center">
                <div className="flex justify-center flex-col items-center mb-[28px] md:mb-[70px] py-[10px] sm:py-[15px] px-[40px] sm:px-[60px] text-center bg-[#1A00E1] rounded-[35px]">
                    <h2 className="text-[35px] lg:text-[55px] font-[700]  text-[#fff]">Hamkorlar</h2>  
                    <hr className="md:hidden flex border-[1px] border-[#FFFFFF] w-[130px] mt-[7px]"/>
                </div>
            </div>
            <div className="relative bg-[#fff] rounded-[50px] p-[30px] md:p-[60px]">
                <h3 className="text-[20px] md:text-[25px] font-[700] leading-[122%] text-center mb-[20px] md:mb-[70px]">{`Kuchli hamkorlik – muvaffaqiyatli biznes! Bizning ishonchli logistika hamjamiyatimizga qo'shiling va yangi imkoniyatlar dunyosini oching.`}</h3>
                <div className=" grid grid-cols-2 md:grid-cols-4 justify-between gap-x-[12px] md:gap-x-[20px] lg:gap-x-[34px] gap-y-[12px] md:gap-y-[20px] lg:gap-y-[30px] mb-[30px]">
                    {arr.map((item, i) => (
                        <div key={i} className={`z-[20] overflow-hidden border-[2px] border-[#000] rounded-[20px] lg:rounded-[35px] ${item == 17 && "md:col-start-4"} ${item > 9 && "md:flex hidden"}`}>
                            <img src="https://placehold.co/600x300/png" className="w-full" alt="" />
                        </div>
                    ))}
                </div>
                <div className="z-[10] absolute bottom-0 left-[50%] translate-x-[-50%] w-[150px] md:w-[300px] mx-auto">
                    <img src="/images/elipses/Ellipse1.svg" alt="elipse" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners