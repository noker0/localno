import Image from "next/image"
import q from '../public/IMAGE-12.png'
import w from '../public/IMAGE-13.png'
import e from '../public/IMAGE-14.png'
import r from '../public/IMAGE-15.png'
import t from '../public/IMAGE-16.png'
import y from '../public/IMAGE-17.png'
import u from '../public/IMAGE-18.png'

const Company = () => {
  return (
    <>
    <div className="flex justify-center mt-[250px]">
      <div className="w-[90%]">
      <p className=" bg-black text-white text-[36px] w-[400px] p-[10px] py-[5px] ml-[32px]">Company</p>
      <div className="flex mt-[50px] gap-[50px] justify-center">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={q}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
                </div>
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={w}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
                </div>
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={e}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
                </div>
            </div>
            <div className="flex mt-[50px] gap-[50px] justify-center">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={r}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
                </div>
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={t}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
                </div>
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={y}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
                </div>
            </div>
            <div className="flex mt-[50px] gap-[50px] pl-[40px]">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={u}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Company