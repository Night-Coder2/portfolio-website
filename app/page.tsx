import About from "@/components/Portfolio/About";
import Main from "@/components/Portfolio/Main";
import Skills from "@/components/Portfolio/Skills";
import {FC} from "react";

const Page:FC = () => {
  return (
    <div>
      <Main />
      <About />
      <Skills />
    </div>
  );
}

export default Page;