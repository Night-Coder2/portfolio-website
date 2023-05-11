import About from "@/components/About";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
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