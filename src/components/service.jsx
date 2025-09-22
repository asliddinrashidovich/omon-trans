import { services } from "../data/data"

function Service() {
  return (
    <section className="px-3 md:px-10 pb-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div className="w-full flex justify-center mb-[80px]">
                <h2 className="text-[55px] font-[700] py-[15px] px-[60px] text-center bg-[#1A00E1] rounded-[35px] text-[#fff]">Xizmatlar</h2>  
            </div>
            <div className="pt-[67px] px-[108px] pb-[58px] border-[1px] border-[#1A00E1] rounded-[50px]">
                <h3 className="font-[500] text-[35px] leading-[122%] text-center mb-[35px]">Biz xizmatlarimizga 100% javob beramiz eng ishonchli logistika kompaniyasi </h3>
                <div className="flex justify-center flex-wrap gap-[14px]">
                    {services.map(item => (
                        <div key={item.title} className="bg-[#F3F3F3] max-w-[341px] rounded-[50px] box-shadow overflow-hidden">
                            <div className="bg-[#1A00E1] h-[95px]  rounded-tl-[50px] rounded-tr-[50px] flex justify-center items-center">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="p-[32px] bg-[#F3F3F3]">
                                <h4 className="font-[700] text-[20px] leading-[122%] text-center text-[#1A00E1] mb-[16px]">{item.title}</h4>
                                <p className="text-[#727272] text-[15px] font-[500] leading-[122%] mb-[41px]">{`O'zbekistonning barcha shaharlari oralig'ida tez va xavfsiz yuk tashish xizmati.`}</p>
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