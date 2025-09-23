import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { navbar } from "../data/data"
import { TiArrowSortedDown } from "react-icons/ti"

function HeaderSidebar() {
    const [openSidebar, setOpenSideBar] = useState(false)
    function handleOpen() {setOpenSideBar(true)}
    function handleClose() {setOpenSideBar(false)}
    const [langOpen, setLangOpen] = useState(false)
    const [lang, setLang] = useState("uz")

    const handleChangeLang = (language) => {
        setLangOpen(prev => !prev)
        setLang(language)
    }

  return (
    <div className="min-[1250px]:hidden flex">
        <button onClick={handleOpen} className="min-[1250px]:hidden flex max-[600px]:py-[9px] max-[600px]:px-[20px] py-[20px] lg:py-[24px] px-[32px] bg-[#10186D] border-[#049BD2] text-[#fff] text-[20px] leading-[100%] font-[400] border-[1px] font-montserrat rounded-[17px] cursor-pointer">
            <FaBars className="text-[30px]"/>
        </button>
        {<div className={`fixed top-0 ${openSidebar ? "translate-x-0" : "translate-x-[100%]"} transition-liniar duration-200  right-0 bottom-0 menu bg-[#fff] w-full md:w-[40%] z-30 p-[37px]`}>
            <div className="flex items-center justify-between">
                <div></div>
                <button onClick={() => setOpenSideBar(prev => !prev)}> 
                    <ImCross className="cursor-pointer"/>
                </button>
            </div>
            <div className="flex justify-center items-center gap-[22px] flex-col mt-[30px]">
                {navbar.map(item => {
                    const Icon = item.icon;
                    return (
                        <div onClick={handleClose} key={item.title} className="flex  gap-[7px] group">
                            <Icon size={20} className="text-[#262525] translate-all duration-200 group-hover:text-[#1A00E1]"/>
                            <p className="text-[16px] text-[#262525] group-hover:text-[#1A00E1] font-[500] leading-[122%] cursor-pointer translate-all duration-200">{item.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="relative flex lg:hidden w-[100px] mx-auto mt-[50px]">
                <div onClick={() => setLangOpen(prev => !prev)} className="bg-transparent py-[15px] px-[14px] cursor-pointer rounded-[17px] border-[1px] border-[#049BD2] flex items-center gap-[10px]">
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
            <div className="flex justify-center mt-[20px]">
                <button className="w-full justify-center flex min-[440px]:hidden max-[600px]:py-[17px] py-[25px] active:bg-[#1E2AAE] translate-all duration-100 hover:bg-[#1425df] px-[32px] bg-[#1E2AAE] border-[#049BD2] max-[600px]:text-[15px] text-[#fff] text-[20px] leading-[100%] font-[400] border-[1px] font-montserrat rounded-[17px] cursor-pointer">{"Bog'lanish"}</button>
            </div>
        </div>}
        {openSidebar && <div onClick={handleClose} className="fixed top-0 left-0 bottom-0 bg-black/50 w-[100%] brightness-50 z-20"></div>}
        </div>
  )
}

export default HeaderSidebar