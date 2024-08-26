import Image from "next/image";
import Navbar from "./components/Navbar";
import Herosection from "./components/ui/Herosection";
import Skills from "./components/Skills";
import Footer from "./components/ui/Footer";


export default function Home() {
  return (
   <>
   <div className="min-h-screen bg-black text-white overflow-hidden z-[3] w-full absolute">
    <div className=" dark:bg-black bg-grid-white/[0.05]  dark:bg-grid-white/[0.05]  relative">
    <div className="p-5 mx-auto max-w-7xl ">
  <Navbar/>
  <Herosection/>
    </div>
    <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0"></div>
   </div>
   <div className="p-5 mx-auto max-w-7xl mt-20">
    <Skills/>
    <Footer/>
   </div>
  
   </div>
   </> 
  );
}
