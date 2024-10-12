import Image from "next/image"
import i30 from '../public/IMAGE-30.png'
import i31 from '../public/IMAGE-31.png'
import i32 from '../public/IMAGE-32.png'
import i33 from '../public/IMAGE-33.png'

const Utility = () => {
  return (
    <>
    <div className="flex justify-center mt-[250px]">
      <div className="w-[90%]">
      <p className=" bg-black text-white text-[36px] w-[400px] p-[10px] py-[5px] ml-[32px]">Utility</p>
      <div className="flex mt-[50px] gap-[50px] justify-center">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={i30}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
                </div>
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={i31}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
                </div>
                
            </div>
            <div className="flex mt-[50px] gap-[50px] justify-center">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={i32}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
                </div>
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={i33}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 2</p>
                </div>
              
            </div>
            <div className="flex mt-[50px] gap-[50px] pl-[35px]">
                <div className="bg-[#f5f5f5] p-[25px]  cursor-pointer">
                    <Image src={i33}/>
                    <p className="uppercase text-[20px] mt-[10px]">landing 1</p>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Utility