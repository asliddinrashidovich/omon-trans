function Partners() {
    const arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  return (
     <section className="px-3 md:px-10 pb-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div className="w-full flex justify-center mb-[70px]">
                <h2 className="text-[55px] font-[700] py-[15px] px-[60px] text-center bg-[#1A00E1] rounded-[35px] text-[#fff]">Hamkorlar</h2>  
            </div>
            <div className="bg-[#fff] rounded-[50px] p-[60px]">
                <h3 className="text-[25px] font-[700] leading-[122%] text-center mb-[70px]">{`Kuchli hamkorlik – muvaffaqiyatli biznes! Bizning ishonchli logistika hamjamiyatimizga qo'shiling va yangi imkoniyatlar dunyosini oching.`}</h3>
                <div className="grid grid-cols-4 justify-between flex-wrap gap-x-[34px] gap-y-[30px]">
                    {arr.map((item, i) => (
                        <div key={i} className="px-[44px] py-[30px] border-[2px] border-[#000] rounded-[35px]">
                            <h2 className="text-[55px] font-[800] leading-[122%] text-[#000]">LOGO1</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners