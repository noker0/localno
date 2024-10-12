import Image from "next/image"
import q from '../public/image 1.png'
import z from '../public/IMAGE-3.png'
import x from '../public/IMAGE-4.png'
import c from '../public/IMAGE-5.png'
import v from '../public/IMAGE-6.png'
import b from '../public/IMAGE-7.png'
const Main = () => {
  return (
    <>
    {/* First Change */}
        <div className="flex items-center   mt-[20px]">
            <div className="left pl-[50px]">
                <p className="bg-[#e2b013] w-max px-[10px] text-white uppercase">Design Addicented</p>
                <p className=" text-[100px] mb-[0px]">A stylish UI Kit</p>
                <p className="text-[50px] mt-[0px]">for all web creatives</p>
                <p className="text-[26px] w-[700px] mt-[20px]">Zero is a Webflow Ecommerce and CMS UI kit including several carefully designed page layouts.</p>
                <div className="flex gap-[30px] mt-[100px] ml-[-30px]">
                    <div className="w-[150px]">
                        <div className="flex justify-center">
                        <Image className="w-[60px] h-[60px]" src={z} />
                        </div>
                        <p className="w-[150px] text-center uppercase">smooth interactions</p>
                    </div>
                    <div className="w-[150px]">
                        <div className="flex justify-center">
                        <Image className="w-[60px] h-[60px]" src={x} />
                        </div>
                        <p className="w-[150px] text-center uppercase">smooth interactions</p>
                    </div>
                    <div className="w-[150px]">
                        <div className="flex justify-center">
                        <Image className="w-[60px] h-[60px]" src={c} />
                        </div>
                        <p className="w-[150px] text-center uppercase">smooth interactions</p>
                    </div>
                    <div className="w-[150px]">
                        <div className="flex justify-center">
                        <Image className="w-[60px] h-[60px]" src={v} />
                        </div>
                        <p className="w-[150px] text-center uppercase">smooth interactions</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <Image src={q}/>
            </div>
        </div>
        {/* Second Change */}

        <div className="mt-[250px] flex justify-center gap-[50px] items-center">
            <div className="left">
                <Image src={b}/>
            </div>
            <div className="right">
                <p className="text-[96px]">Zero Design</p>
                <p className="w-[609px] text-[22px]">Includes a total of 10 static pages, divided like this: 4 Landing pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In addition to these, there are Webflow CMS driven pages: Blog (in 2 variations), Shop (in 2 variations), Works and Careers. All with their respective single pages!</p>
                <div className="mt-[30px]">
                    <div className="flex gap-[15px]">
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">4 Landing</a>
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">2 About</a>
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">3 contact</a>
                    </div>
                    <div className="flex gap-[15px] mt-[15px]">
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">3 blog</a>
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">2 shop</a>
                    </div>
                    <div className="flex gap-[15px] mt-[15px]">
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">works</a>
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">team</a>
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">careers</a>
                    </div>
                    <div className="flex gap-[15px] mt-[15px]">
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">forms</a>
                        <a href="" className="bg-black uppercase text-white p-[10px] px-[30px]">utility</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main