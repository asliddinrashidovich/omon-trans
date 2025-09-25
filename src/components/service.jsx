import { useTranslation } from "react-i18next"
import { services } from "../data/data"

function Service() {
    const {t} = useTranslation()
    const servicesData = services(t)
  return (
    <section id="Xizmatlar" className="px-3 md:px-10 pb-[40px] md:pb-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div data-aos="fade-up" className="flex justify-center">
                <div className="flex justify-center flex-col items-center mb-[28px] md:mb-[70px] py-[10px] sm:py-[15px] px-[40px] sm:px-[60px] text-center bg-[#1A00E1] rounded-[35px] w-full md:w-auto">
                    <h2 className="text-[35px] lg:text-[55px] font-[700]  text-[#fff]">{t("service")}</h2>  
                    <hr className="md:hidden flex border-[1px] border-[#FFFFFF] w-[130px] mt-[7px]"/>
                </div>
            </div>
            <div className="bg-[#fff] pt-[35px] md:pt-[67px] px-[30px] md:px-[108px] pb-[58px] border-[1px] border-[#1A00E1] rounded-[50px]">
                <h3 className="font-[500] text-[20px] md:text-[35px] leading-[122%] text-center mb-[20px] md:mb-[35px]">{t("serviceHeader")}</h3>
                <div className="flex justify-center flex-wrap gap-[14px]">
                    {servicesData.map(item => (
                        <div data-aos="fade-up" key={item.title} className="bg-[#F3F3F3] max-w-[341px] rounded-[50px] box-shadow overflow-hidden">
                            <div className="bg-[#1A00E1] h-[95px]  rounded-tl-[50px] rounded-tr-[50px] flex justify-center items-center">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="p-[32px] bg-[#F3F3F3]">
                                <h4 className="font-[700] text-[20px] leading-[122%] text-center text-[#1A00E1] mb-[16px]">{item.title}</h4>
                                <p className="text-[#727272] text-[15px] font-[500] leading-[122%] mb-[41px]">{item.paragraph}</p>
                                {item.lists.map(list => (
                                    <div key={list.title} className="flex items-center gap-[8px] mb-[15px]">
                                        <img src="/images/check.svg" alt="check" />
                                        <p className="text-[15px] font-[500] leading-[122%] text-[#000000]">{list.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service