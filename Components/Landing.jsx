import Image from "next/image"
import z from '../public/IMAGE-8.png'
import x from '../public/IMAGE-9.png'
import c from '../public/IMAGE-10.png'
import v from '../public/IMAGE-11.png'


const Landing = () => {
  return (
    <div className="flex justify-center mt-[250px]">
        <div className="w-[90%]">
            <p className="uppercase bg-black text-white text-[36px] w-[400px] p-[10px] py-[5px] ml-[32px]">landing pages</p>
            <div className="flex mt-[50px] gap-[50px] justify-center">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={z}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
                </div>
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={x}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
                </div>
            </div>
            <div className="flex mt-[100px] gap-[50px] justify-center">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={c}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 3</p>
                </div>
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={v}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 4</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing