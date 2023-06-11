import About from "@/components/Portfolio/About/About";
import Main from "@/components/Portfolio/Main/Main";
import Skills from "@/components/Portfolio/Skills/Skills";
import Contact from "@/components/Portfolio/Contact/Contact";
import {FC} from "react";

const Page:FC = () => {
    
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default Page;