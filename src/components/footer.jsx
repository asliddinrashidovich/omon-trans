import { useTranslation } from "react-i18next"
import { navbar } from "../data/data"

function Footer() {
    const {t} = useTranslation()
    const FooterData = navbar(t)
  return (
    <footer className="bg-[#10186D] relative pt-[90px] md:pt-[129px] rounded-tl-[50px] md:rounded-tl-[100px] rounded-tr-[50px] md:rounded-tr-[100px]">
        <div className="z-[10] absolute top-0 left-[50%] translate-x-[-50%] w-[150px] md:w-[200px] mx-auto">
            <img src="/images/elipses/Ellipse9.svg" alt="elipse" />
        </div>
        <div className="px-[24px] md:px-[80px] flex min-[900px]:flex-row flex-col gap-[40px] md:gap-[106px] ">
            <div className="min-[900px]:max-w-[445px]">
                <h3 className="text-[27px] font-[700] leading-[122%] text-[#fff] mb-[25px]">OMON-TRANS</h3>
                <p className="text-[20px] font-[500] leading-[122%] text-[#fff] mb-[25px]">{t("footerTitle")}</p>
                <div className="flex gap-5 items-center">
                    <a href="#">
                        <img src="/images/instagram.png" alt="instagram" />
                    </a>
                    <a href="#">
                        <img src="/images/facebook.png" alt="facebook" />
                    </a>
                    <a href="#">
                        <img src="/images/telegram.png" alt="telegram" />
                    </a>
                    <a href="#">
                        <img src="/images/linkedin.png" alt="linkedin" />
                    </a>
                </div>
            </div>
            <div>
                <h3 className="text-[27px] font-[700] leading-[122%] text-[#fff] mb-[25px]">{t("footerContact")}</h3>
                <div className="flex gap-[8px] mb-[10px] items-center">
                    <img src="/images/location.svg" alt="location" />
                    <p className="text-[20px] font-[500] text-[#fff] leading-[122%]">Toshkent sh., Yunusobod t., 12-uy</p>
                </div>
                <div className="flex gap-[8px] mb-[10px] items-center">
                    <img src="/images/tel.svg" alt="location" />
                    <p className="text-[20px] font-[500] text-[#fff] leading-[122%]">+998 71 123 45 67</p>
                </div>
                <div className="flex gap-[8px] mb-[10px] items-center">
                    <img src="/images/email.svg" alt="location" />
                    <p className="text-[20px] font-[500] text-[#fff] leading-[122%]">info@omontrans.uz</p>
                </div>
                <div className="flex gap-[8px] mb-[10px] items-center">
                    <img src="/images/clock.svg" alt="location" />
                    <p className="text-[20px] font-[500] text-[#fff] leading-[122%]">{t("footerDate")}</p>
                </div>
            </div>
            <div>
                <h3 className="text-[27px] font-[700] leading-[122%] text-[#fff] mb-[25px]">{`Tezkor Havolalar `}</h3>
                <ul>
                    {FooterData.map(item => (
                        <li key={item.title} className="mb-[10px]">
                            <a className="text-[20px] font-[500] leading-[122%] hover:text-[#049BD2] translate-all duration-200 text-[#fff]" href={`#${item.title}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <hr className="border-[2px] mt-[15px] border-[#FFFFFF]"/>
        <p className="text-[#ADADAD] leading-[122%] font-[500] text-[12px] md:text-[20px] text-center py-[15px]">{t("footerFooter")}</p>
    </footer>
  )
}

export default Footer