import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next"

function Contact() {
    const {t} = useTranslation()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post(`https://api.omon-trans.uz/contact/create/`, {name, phone, message}, {headers: {"Content-Type": "application/json"}}).then(() => {
            toast.success("Arizangiz muvaffiqiyatli qabul qilindi, tez orada siz bilan bog'lanamiz")
        }).catch(() => {
            toast.error('Something went wrong')
        })
    };
  return (
    <section id="contact" className="px-3 md:px-10 pb-[40px] md:pb-[70px]">
        <div className="max-w-[1368px] mx-auto grid grid-cols-1 min-[1000px]:grid-cols-2 items-center gap-[24px]">
            <div  className="relative rounded-[50px] bg-[#fff] pt-[26px] pb-[112px] md:py-[171px] px-[20px] md:px-[30px]">
                <p className="z-[20] relative text-[18px] sm:text-[31px] font-[700] leading-[122%]">{t("contactText1")} <span className="text-[#1A00E1]">OMON TRANS</span> {t("contactText2")}</p>
                <div className="z-[10] absolute bottom-0 left-0 w-[150px] md:w-[300px] mx-auto">
                    <img src="/images/elipses/Ellipse7.svg" alt="elipse" />
                </div>
            </div>
            <div className="bg-[#fff] py-[33px] px-[15px] sm:px-[43px] rounded-[50px]">
                <hr className="border-[#1A00E1] mx-auto border-[3px] md:border-[6px] h-[0] w-[150px] sm:w-[200px] md:w-[301px] mb-[43px]"/>
                <form onSubmit={onSubmit}>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="mb-[23px] rounded-[15px] bg-[#F3F3F3] text-[17px] font-[400] leading-[122%] text-[#ACA6A6] w-full py-[16px] px-8 outline-none" placeholder={t("formName")}/>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" className="mb-[23px] rounded-[15px] bg-[#F3F3F3] text-[17px] font-[400] leading-[122%] text-[#ACA6A6] w-full py-[16px] px-8 outline-none" placeholder={t("formPhone")}/>
                    {/* <input value={name} onChange={(e) => setName(e.target.value)} type="email" name="email" className="mb-[23px] rounded-[15px] bg-[#F3F3F3] text-[17px] font-[400] leading-[122%] text-[#ACA6A6] w-full py-[16px] px-8 outline-none" placeholder={t("formEmail")}/> */}
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" className="mb-[23px] rounded-[15px] bg-[#F3F3F3] text-[17px] font-[400] leading-[122%] text-[#ACA6A6] w-full py-[16px] px-8 outline-none" placeholder={t("formMessage")} rows={10}></textarea>
                    <button type="submit" className="text-[25px] md:text-[35px] font-[700] w-full bg-[#1A00E1] rounded-[50px] text-[#fff] py-[13px] md:py-[22px] cursor-pointer">{t("formSubmit")}</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact