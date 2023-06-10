import About from "@/components/Portfolio/About";
import Main from "@/components/Portfolio/Main";
import Skills from "@/components/Portfolio/Skills";
import Contact from "@/components/Portfolio/Contact";
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