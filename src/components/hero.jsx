import { useTranslation } from "react-i18next"
import * as AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  const {t} = useTranslation()
  useEffect(() => {
      AOS.init({
          duration: 1000,  
          once: true,  
      });
  }, []);
  return (
    <section id="Bosh Sahifa"  className="px-3 md:px-10 py-[10px] hero h-[100vh] lg:h-[840px]">
        <div className="max-w-[1368px] mx-auto flex lg:items-center h-full">
            <div  className="max-w-[500px] md:max-w-[658px] mt-[150px] lg:mt-[0]">
                <h1 dangerouslySetInnerHTML={{ __html: t("heroHeader") }} className="text-[25px] min-[370px]:text-[35px] min-[500px]:text-[40px] md:text-[55px] fnt-inter font-[800] leading-[122%] mb-[10px]" />
                <p className="text-[#000000] text-[15px] md:text-[20px] font-[400] leading-[122%] mb-[10px]">{t("heroText")}</p>
                <div className="flex min-[370px]:flex-row flex-col min-[370px]:items-center gap-[15px] ">
                    <button className="py-[10px] md:py-[17px] px-[25px] md:px-[50px] text-[#fff] rounded-[15px] bg-gradient-to-r from-[#10186D] to-[#1E2AAE] cursor-pointer">{t("calculate")}</button>
                    <button className="py-[8px] md:py-[15px] px-[20px] md:px-[50px] rounded-[15px] text-[#000] border-[3px] border-[#1E2AAE] cursor-pointer">{t("contact")}</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero