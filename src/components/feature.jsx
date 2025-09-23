import { feature } from "../data/data"

function Feature() {
  return (
    <section className="px-3 md:px-10 pb-[70px]">
        <div className="max-w-[1368px] mx-auto">
            <div className="w-full flex justify-center mb-[70px]">
                <h2 className="text-[55px] font-[700] py-[15px] px-[60px] text-center bg-[#1A00E1] rounded-[35px] text-[#fff]">Nima Uchun Bizni Tanlashadi?</h2>  
            </div>
            <div className="flex flex-col gap-[20px]">
                {feature.map(item => (
                    <div key={item.title} className="bg-[#fff] border-l-[15px] rounded-[40px] border-[#1A00E1] p-[30px] flex gap-[25px] items-center">
                        <div className="flex flex-col items-center justify-center min-w-[271px]">
                            <img src={item.img} alt={item.title} className="mb-[44px]"/>
                            <h4 className="text-center text-[30px] font-[800] text-[#0C1146] leading-[122%]">{item.title}</h4>
                        </div>
                        <p className="text-[30px] font-[600] leading-[122%]">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Feature