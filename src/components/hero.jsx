function Hero() {
  return (
    <section className="px-3 md:px-10 py-[10px] hero h-[100vh] lg:h-[840px]">
        <div className="max-w-[1368px] mx-auto flex lg:items-center h-full">
            <div className="max-w-[500px] md:max-w-[658px] mt-[150px] lg:mt-[0]">
                <h1 className="text-[25px] min-[370px]:text-[35px] min-[500px]:text-[40px] md:text-[55px] fnt-inter font-[800] leading-[122%] mb-[10px]"><span className="text-[#1A00E1]">O’zbekiston</span> boylab barcha turdagi yuklarni istalgan <span className="text-[#1A00E1]">nuqtaga</span>  yetkazib beruvchi <span className="text-[#1A00E1]">Logistika</span> Kompaniyasi</h1>
                <p className="text-[#000000] text-[15px] md:text-[20px] font-[400] leading-[122%] mb-[10px]">{"Yirik korxonalar uchun ishonch, tezlik va innovatsion yondashuv. O’zbekiston bo'ylab logistika xizmatlari."}</p>
                <div className="flex min-[370px]:flex-row flex-col min-[370px]:items-center gap-[15px] ">
                    <button className="py-[10px] md:py-[17px] px-[25px] md:px-[50px] text-[#fff] rounded-[15px] bg-gradient-to-r from-[#10186D] to-[#1E2AAE] cursor-pointer">Narxni Hisoblash</button>
                    <button className="py-[8px] md:py-[15px] px-[20px] md:px-[50px] rounded-[15px] text-[#000] border-[3px] border-[#1E2AAE] cursor-pointer">Aloqa</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero