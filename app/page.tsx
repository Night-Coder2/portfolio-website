import About from "@/components/Portfolio/About/About";
import Main from "@/components/Portfolio/Main/Main";
import Skills from "@/components/Portfolio/Skills/Skills";
import Contact from "@/components/Portfolio/Contact/Contact";
import Navbar from "@/components/Portfolio/Navbar/Navbar";
import Footer from "@/components/Portfolio/Footer/Footer";
import {FC} from "react";

const Page:FC = () => {
    
  return (
    <div>
      <Navbar/>
      <Footer />
      <Main />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default Page;