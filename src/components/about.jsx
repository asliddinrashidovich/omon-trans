import { useTranslation } from "react-i18next"

function About() {
    const {t} = useTranslation()
  return (
    <section id="Biz Haqimizda" className="px-3 md:px-10 py-[40px] md:py-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div className="flex justify-center">
                <div className="flex justify-center flex-col items-center mb-[28px] md:mb-[70px] py-[10px] sm:py-[15px] px-[40px] sm:px-[60px] text-center bg-[#1A00E1] rounded-[35px] w-full md:w-auto">
                    <h2 className="text-[35px] lg:text-[55px] font-[700]  text-[#fff] ">{t("about")}</h2>  
                    <hr className="md:hidden flex border-[1px] border-[#FFFFFF] w-[130px] mt-[7px]"/>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-[10px] mb-[10px]">
                <div className="py-[26px] md:py-[42px] relative my-box px-[26px] md:px-[35px] border-[#0C114666] border-[1px] border-dashed rounded-[50px]">
                    <div className="z-[10] absolute bottom-0 left-[50%] translate-x-[-50%] w-[200px] md:w-[300px] mx-auto">
                        <img src="/images/elipses/Ellipse1.svg" alt="elipse" />
                    </div>
                    <p className="z-[20] text-[18px] min-[800px]:text-[24px] min-[1050px]:text-[32px] font-[700] leading-[122%]"><span className="text-[#10186D]">OMON TRANS</span>{t("abouttext1")}</p>
                    <br />
                    <p className="z-[20] relative text-[18px] min-[800px]:text-[24px] min-[1050px]:text-[32px] font-[700] leading-[122%]">{t("abouttext2")}</p>
                </div>
                <div className="rounded-[23px] overflow-hidden border-[#0C114666] border-[1px] border-dashed">
                    <img src="/images/model.jpg" alt="model" className="object-cover w-full h-full"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5px]">
                <div className="relative border-[1px] border-[#1A00E166] border-dashed rounded-[50px] h-[228px] md:h-[338px] flex items-center justify-center flex-col gap-[6px]">
                    <h3 className="z-[20] text-[#0C1146] text-[85px] font-[700]">12+</h3>
                    <p className="z-[20] text-[25px] font-[700] leading-[122%] text-center">{t("box1")}</p>
                    <div className="z-[10] absolute  left-0 top-[50%] translate-y-[-50%]">
                        <img src="/images/elipses/Ellipse2.svg" alt="elipse" />
                    </div>
                </div>
                <div className="relative border-[1px] border-[#1A00E166] border-dashed rounded-[50px] h-[228px] md:h-[338px] flex items-center justify-center flex-col gap-[6px]">
                    <h3 className="z-[20] text-[#0C1146] text-[70px] font-[700]">3000+</h3>
                    <p className="z-[20] text-[25px] font-[700] leading-[122%] text-center">{t("box2")}</p>
                    <div className="z-[10] absolute  bottom-0 left-[50%] translate-x-[-50%]">
                        <img src="/images/elipses/Ellipse3.svg" alt="elipse" />
                    </div>
                </div>
                <div className="relative border-[1px] border-[#1A00E166] border-dashed rounded-[50px] h-[228px] md:h-[338px] flex items-center justify-center flex-col gap-[6px]">
                    <h3 className="z-[20] text-[#0C1146] text-[60px] font-[700]">12000+</h3>
                    <p className="z-[20] text-center text-[25px] font-[700] leading-[122%]">{t("box3")}</p>
                    <div className="z-[10] absolute  top-0 left-[50%] translate-x-[-50%]">
                        <img src="/images/elipses/Ellipse4.svg" alt="elipse" />
                    </div>
                </div>
                <div className="relative border-[1px] border-[#1A00E166] border-dashed rounded-[50px] h-[228px] md:h-[338px] flex items-center justify-center flex-col gap-[6px]">
                    <h3 className="z-[20] text-[#0C1146] text-[85px] font-[700]">15+</h3>
                    <p className="z-[20] text-[25px] font-[700] text-center leading-[122%]">{t("box4")}</p>
                    <div className="z-[10] absolute  right-0 top-[50%] translate-y-[-50%]">
                        <img src="/images/elipses/Ellipse5.svg" alt="elipse" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About