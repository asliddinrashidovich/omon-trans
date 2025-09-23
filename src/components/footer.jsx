function Footer() {
  return (
    <footer className="bg-[#10186D] pt-[129px] rounded-tl-[100px] rounded-tr-[100px]">
        <div className="px-[80px] flex gap-[106px] ">
            <div className="max-w-[445px]">
                <h3 className="text-[27px] font-[700] leading-[122%] text-[#fff] mb-[25px]">OMON-TRANS</h3>
                <p className="text-[20px] font-[500] leading-[122%] text-[#fff] mb-[25px]">Yirik korxonalar uchun ishonchli logistika va transport yechimlari. Global miqyosda sifatli xizmat.</p>
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
                <h3 className="text-[27px] font-[700] leading-[122%] text-[#fff] mb-[25px]">{`Aloqa Ma'lumotlari`}</h3>
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
                    <p className="text-[20px] font-[500] text-[#fff] leading-[122%]">Dushanba - Shanba: 9:00 - 18:00</p>
                </div>
            </div>
            <div>
                <h3 className="text-[27px] font-[700] leading-[122%] text-[#fff] mb-[25px]">{`Tezkor Havolalar `}</h3>
                <ul>
                    <li className="mb-[10px]">
                        <a className="text-[20px] font-[500] leading-[122%] text-[#fff]" href="#">Bosh Sahifa</a>
                    </li>
                    <li className="mb-[10px]">
                        <a className="text-[20px] font-[500] leading-[122%] text-[#fff]" href="#">Biz Haqimizda</a>
                    </li>
                    <li className="mb-[10px]">
                        <a className="text-[20px] font-[500] leading-[122%] text-[#fff]" href="#">Xizmatlar</a>
                    </li>
                    <li className="mb-[10px]">
                        <a className="text-[20px] font-[500] leading-[122%] text-[#fff]" href="#">Afzalliklar</a>
                    </li>
                    <li className="mb-[10px]">
                        <a className="text-[20px] font-[500] leading-[122%] text-[#fff]" href="#">Hamkorlar</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr className="border-[2px] mt-[15px] border-[#FFFFFF]"/>
        <p className="text-[#ADADAD] leading-[122%] font-[500] text-[20px] text-center py-[15px]">© 2025 OMON TRANS. Barcha huquqlar himoyalangan.</p>
    </footer>
  )
}

export default Footer