import Image from "next/image"
import q19 from '../public/IMAGE-19.png'
import q20 from '../public/IMAGE-20.png'
import q21 from '../public/IMAGE-21.png'
import q22 from '../public/IMAGE-22.png'
import q23 from '../public/IMAGE-23.png'
import q24 from '../public/IMAGE-24.png'
import q25 from '../public/IMAGE-25.png'
import q26 from '../public/IMAGE-26.png'
import q27 from '../public/IMAGE-27.png'
import q28 from '../public/IMAGE-28.png'
import q29 from '../public/IMAGE-29.png'

const CMS = () => {
  return (
    <div className="flex justify-center mt-[250px]">
    <div className="w-[90%]">
        <p className=" bg-black text-white text-[36px] w-[400px] p-[10px] py-[5px] ml-[32px]">CMS Pages</p>
        <div className="flex mt-[50px] gap-[50px] justify-center">
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q19}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
            </div>
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q20}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
            </div>
        </div>
        <div className="flex mt-[100px] gap-[50px] justify-center">
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q21}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 3</p>
            </div>
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q22}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 4</p>
            </div>
        </div>
        <div className="flex mt-[50px] gap-[50px] justify-center">
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q23}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
            </div>
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q24}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
            </div>
        </div>
        <div className="flex mt-[50px] gap-[50px] justify-center">
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q25}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
            </div>
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q26}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
            </div>
        </div>
        <div className="flex mt-[50px] gap-[50px] justify-center">
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q27}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
            </div>
            <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                <Image src={q28}/>
                <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
            </div>
        </div>
        <div className="flex mt-[50px] gap-[50px] pl-[40px]">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={q29}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
                </div>
                
            </div>
    </div>
</div>
  )
}

export default CMS