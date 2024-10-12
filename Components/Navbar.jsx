import Image from "next/image"
import IMAGE from '../public/IMAGE.png'
import q from "../public/IMAGE-1.png"
import q1 from "../public/IMAGE-2.png"

const Navbar = () => {
  return (
    <>
        <nav className="h-[114px] flex items-center justify-around gap-[500px] bg-[white]">
            <div className="flex    gap-[50px]">
            <Image src={IMAGE}/>
            <ul className="flex items-center gap-[35px]">
                <li><a href="#">Landing</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">CMS Pages</a></li>
                <li><a href="#">Utility</a></li>
            </ul>
            </div>
            <div className="flex items-center gap-[10px]">
                <button className="text-white bg-black p-[10px] px-[20px]" >$129 Buy Now</button>
                <Image className="cursor-pointer" src={q}/>
                <Image className="cursor-pointer" src={q1}/>
            </div>
        </nav>
    </>
  )
}

export default Navbar