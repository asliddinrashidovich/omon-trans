import { useState } from "react";
import { navbar } from "../data/data"
import { TiArrowSortedDown } from "react-icons/ti";
import HeaderSidebar from "./sidebar";


function Header() {
    const [langOpen, setLangOpen] = useState(false)
    const [lang, setLang] = useState("uz")

    const handleChangeLang = (language) => {
        setLangOpen(prev => !prev)
        setLang(language)
    }
  return (
    <header className="px-3 md:px-10 py-[10px] fixed w-full z-100">
        <div className="max-w-[1368px] mx-auto flex items-center justify-between gap-[10px]">
            <a href="/" className="z-100 lg:flex hidden shrink-0">
                <img src="/images/logo.svg" alt="logo"/>
            </a>
            <div className="bg-[#10186D] relative navbar px-[20px] py-[10px] lg:p-[10px] lg:w-full rounded-[17px] flex items-center justify-between">
                <a href="/" className="max-[600px]:text-[20px] text-nowrap text-[35px] font-[400] text-[#fff] lg:ml-[27px] paytone-one cursor-pointer">OMON TRANS</a>
                <div className="flex gap-[10px]">
                    <ul className="min-[1250px]:flex items-center gap-[10px] hidden">
                        {navbar.map(item => (
                            <li key={item.title} className="relative  inline-block group">
                                <a href={`#${item.title}`} className="font-montserrat font-[500] text-[16px] text-[#fff] leading-[122%] hover:text-[#ffb48f] translate-all duration-300 ">{item.title}</a>
                                <span className="absolute left-0 -bottom-1 rounded-[2px] h-[3px] w-0 bg-[#ffb48f] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                    <div className="relative lg:flex hidden">
                        <div onClick={() => setLangOpen(prev => !prev)} className="bg-[#1E2AAE] py-[15px] px-[14px] cursor-pointer rounded-[17px] border-[1px] border-[#049BD2] flex items-center gap-[10px]">
                            {lang == "uz" && <img src="/images/uzbekistan.png" alt="uzbekistan" className="w-[25px]"/>}
                            {lang == "ru" && <img src="/images/russia.png" alt="uzbekistan" className="w-[25px]"/>}
                            {lang == "en" && <img src="/images/united-states.png" alt="uzbekistan" className="w-[25px]"/>}
                            <TiArrowSortedDown className="text-[#fff] text-[22px]"/>
                        </div>
                        {langOpen && <div className="absolute bg-[#999] top-[50px] rounded-[10px] p-[10px]">
                            <div onClick={() => handleChangeLang("uz")} className="flex items-center gap-[7px] px-[10px] hover:bg-[#888] py-[5px] cursor-pointer rounded-[10px] mb-[4px]">
                                <img src="/images/uzbekistan.png" alt="uzbekistan" className="w-[25px]"/>
                                <p className="pr-[25px]">uzb</p>
                            </div>
                            <div onClick={() => handleChangeLang("ru")} className="flex items-center gap-[7px] px-[10px] hover:bg-[#888] py-[5px] cursor-pointer rounded-[10px] mb-[4px]">
                                <img src="/images/russia.png" alt="russia" className="w-[25px]"/>
                                <p className="pr-[25px]">rus</p>
                            </div>
                            <div onClick={() => handleChangeLang("en")} className="flex items-center gap-[7px] px-[10px] hover:bg-[#888] py-[5px] cursor-pointer rounded-[10px] mb-[4px]">
                                <img src="/images/united-states.png" alt="uzbekistan" className="w-[25px]"/>
                                <p className="pr-[25px]">eng</p>
                            </div>
                        </div>}
                    </div>
                    <button className="lg:flex hidden py-[19px] active:bg-[#1E2AAE] translate-all duration-100 hover:bg-[#1425df] px-[32px] bg-[#1E2AAE] border-[#049BD2] text-[#fff] text-[20px] leading-[100%] font-[400] border-[1px] font-montserrat rounded-[17px] cursor-pointer">{"Bog'lanish"}</button>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <button className="hidden min-[440px]:flex lg:hidden max-[600px]:py-[17px] py-[25px] active:bg-[#1E2AAE] translate-all duration-100 hover:bg-[#1425df] px-[32px] bg-[#1E2AAE] border-[#049BD2] max-[600px]:text-[15px] text-[#fff] text-[20px] leading-[100%] font-[400] border-[1px] font-montserrat rounded-[17px] cursor-pointer">{"Bog'lanish"}</button>
                <HeaderSidebar/>
            </div>
        </div>
    </header>
  )
}

export default Header