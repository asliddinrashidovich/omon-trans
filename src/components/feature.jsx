import { useTranslation } from "react-i18next"
import { feature } from "../data/data"

function Feature() {
    const {t} = useTranslation()
    const featureData = feature(t)
  return (
    <section id="Afzalliklar" className="px-3 md:px-10 pb-[40px] md:pb-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div data-aos="fade-up" className="flex justify-center">
                <div className="flex justify-center flex-col items-center mb-[28px] md:mb-[70px] py-[10px] sm:py-[15px] px-[40px] sm:px-[60px] text-center bg-[#1A00E1] rounded-[35px]">
                    <h2 className="text-[25px] md:text-[35px] lg:text-[55px] font-[700]  text-[#fff]">{t("featureTitle")}</h2>  
                    <hr className="md:hidden flex border-[1px] border-[#FFFFFF] w-[130px] mt-[7px]"/>
                </div>
            </div>
            <div className="flex flex-col gap-[20px]">
                {featureData.map(item => (
                    <div data-aos="fade-up" key={item.title} className="relative bg-[#fff] border-t-[15px] md:border-t-[0] border-l-[0] md:border-l-[15px] rounded-[40px] border-[#1A00E1] p-[30px] flex gap-[25px] md:flex-row flex-col items-center">
                        <div className="flex flex-col items-center justify-center min-w-[271px]">
                            <img src={item.img} alt={item.title} className="mb-[44px]"/>
                            <h4 className="z-[20] text-center text-[26px] md:text-[30px] font-[800] text-[#0C1146] leading-[122%]">{item.title}</h4>
                            <div className="z-[10] flex md:hidden absolute bottom-0 right-0">
                                <img src="/images/elipses/Ellipse6.svg" alt="elipse" />
                            </div>
                        </div>
                        <p className="z-[20] text-[16px] text-center md:text-start md:text-[30px] font-[600] leading-[122%]">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Feature