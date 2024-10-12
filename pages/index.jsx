import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import Main from "@/Components/Main"
import Landing from "@/Components/Landing"
import Company from "@/Components/Company"
import CMS from "@/Components/CMS"
import Utility from "@/Components/Utility"


const Home =() =>{
  return (
    <>
     <Navbar/>
     <Main/>
     <Landing/>
     <Company/>
     <CMS/>
     <Utility/>
     <Footer/>
    </>
  )
}

export default Home