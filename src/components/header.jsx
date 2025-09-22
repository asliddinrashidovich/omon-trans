
function Header() {
  return (
    <header className="px-3 md:px-10 py-[10px]">
        <div className="max-w-[1368px] mx-auto flex items-center gap-[10px]">
            <a href="/">
                <img src="/images/logo.svg" alt="logo"/>
            </a>
            <div className="bg-[#10186D] p-[10px] w-full rounded-[17px] flex items-center justify-between">
                <a href="/" className="text-[35px] font-[400] text-[#fff] ml-[27px] paytone-one cursor-pointer">OMON TRANS</a>
                <div className="flex gap-[10px]">
                    <ul className="flex items-center gap-[10px]">
                        <li><a href="#" className="font-montserrat font-[500] text-[16px] text-[#fff] leading-[122%]">Bosh Sahifa</a></li>
                        <li><a href="#" className="font-montserrat font-[500] text-[16px] text-[#fff] leading-[122%]">Biz Haqimizda</a></li>
                        <li><a href="#" className="font-montserrat font-[500] text-[16px] text-[#fff] leading-[122%]">Xizmatlar</a></li>
                        <li><a href="#" className="font-montserrat font-[500] text-[16px] text-[#fff] leading-[122%]">Afzalliklar</a></li>
                        <li><a href="#" className="font-montserrat font-[500] text-[16px] text-[#fff] leading-[122%]">Hamkorlar</a></li>
                    </ul>
                    <div className="bg-[#1E2AAE] py-[18px] px-[14px] rounded-[17px] border-[1px] border-[#049BD2]">
                        <select name="lang" id="lang">
                            <option value="uz">uz</option>
                            <option value="uz">ru</option>
                            <option value="en">en</option>
                        </select>
                    </div>
                    <button className="py-[19px] px-[32px] bg-[#1E2AAE] border-[#049BD2] text-[#fff] text-[20px] leading-[100%] font-[400] border-[1px] font-montserrat rounded-[17px] cursor-pointer">{"Bog'lanish"}</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header