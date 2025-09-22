function Hero() {
  return (
    <section className="px-3 md:px-10 py-[10px] hero h-[840px]">
        <div className="max-w-[1368px] mx-auto flex items-center h-full">
            <div className="w-[658px]">
                <h1 className="text-[55px] fnt-inter font-[800] leading-[122%] mb-[10px]">O’zbekiston boylab barcha turdagi yuklarni istalgan nuqtaga yetkazib beruvchi Logistika Kompaniyasi</h1>
                <p className="text-[#000000] font-[400] leading-[122%] mb-[10px]">{"Yirik korxonalar uchun ishonch, tezlik va innovatsion yondashuv. O’zbekiston bo'ylab logistika xizmatlari."}</p>
                <div className="flex items-center gap-[15px] ">
                    <button className="py-[15px] px-[50px] text-[#fff] rounded-[15px] bg-gradient-to-r from-[#10186D] to-[#1E2AAE] cursor-pointer">Narxni Hisoblash</button>
                    <button className="py-[15px] px-[50px] rounded-[15px] text-[#000] border-[3px] border-[#1E2AAE] cursor-pointer">Aloqa</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero