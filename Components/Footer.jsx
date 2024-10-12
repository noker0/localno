import Image from "next/image"
import Frame30 from "../public/Frame-30.png"
import Frame29 from "../public/Frame-29.png" 
import Frame27 from "../public/Frame-27.png" 
import Frame28 from "../public/Frame-28.png" 

const Footer = () => {
  return (
    <>
        <footer className="border-t border-[grey] pb-[50px] mt-[150px]">
             <div className="top flex justify-around pt-[50px]">
                <div className="left">
                    <p className="text-[25px] mb-[30px]">Subscribe our newsletter</p>
                    <div className="flex">
                        <input type="text" name="" id="" className="border-[1px] border-black w-[350px] h-[35px] px-[10px] focus:outline-none"  />
                        <div className="bg-[black] w-[120px] h-[35px]"></div>
                    </div>
                    <div className="flex gap-[20px] mt-[200px]">
                        <Image src={Frame29}/>
                        <Image src={Frame27}/>
                        <Image src={Frame28}/>
                    </div>
                </div>
                <div className="right flex gap-[75px]">
                    <div className="">
                        <div className="flex gap-[10px] flex-col">
                            <p className="text-[25px]">Landing Pages</p>
                            <a href="">Landing 1</a>
                            <a href="">Landing 2</a>
                            <a href="">Landing 3</a>
                            <a href="">Landing 4</a>
                        </div>
                        <div className="flex gap-[10px] flex-col mt-[30px]">
                            <p className="text-[25px]">Company</p>
                            <a href="">About 1</a>
                            <a href="">About 2</a>
                            <a href="">Contact 1</a>
                            <a href="">Contact 2</a>
                            <a href="">Contact 3</a>
                            <a href="">Team</a>
                            <a href="">FAQ</a>
                        </div>
                    </div>
                    <div className="flex gap-[10px] flex-col">
                            <p className="text-[25px]">CMS Pages</p>
                            <a href="">Blog 1</a>
                            <a href="">Blog 2</a>
                            <a href="">Blog 3</a>
                            <a href="">Single Post Page</a>
                            <a href="">Shop 1</a>
                            <a href="">Shop 2</a>
                            <a href="">Single Product Page</a>
                            <a href="">Careers</a>
                            <a href="">Single Careers Page</a>
                            <a href="">Works</a>
                            <a href="">Single Works Page</a>
                    </div>
                    <div className="flex gap-[10px] flex-col">
                            <p className="text-[25px]">Utility</p>
                            <a href="">Coming Soon</a>
                            <a href="">Password</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Teams And Conditions</a>
                            <a href="">404</a>
                            <a href="">Licensing</a>
                            <a href="">Style Guide</a>
                    </div>
                </div>
             </div>
             <div className="bottom flex justify-center mt-[100px]">
                <Image src={Frame30}/>
             </div>
        </footer>
    </>
  )
}

export default Footer