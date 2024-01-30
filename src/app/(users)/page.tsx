import React from "react";
import TypeEffect from "./_components/TypeEffect";
import { Fira_Code } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowBigDown } from "lucide-react";
import Link from "next/link";
const fira = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});
const HomePage = () => {
  return (
    <div className="flex flex-col min-[600px]:w-[80%] max-[600px]:w-[100%] max-[600px]:px-2  min-[600px]:px-6 justify-center gap-2">
      <h1 className="gap-3">
        <span className="text-[28px] font-semibold mr-2">Skills and Stack</span>
        <TypeEffect />
      </h1>
      <div>
        <h2 className={`text-[23px] max-[600px]:text-[19px] ${fira.className}`}>
          Hello! My name is{" "}
          <span className="text-pink-400">Muhammad Hadeed Tariq</span>. I am a
          full stack developer with 1.5 years of learning experience. My
          experties are in <span className="text-pink-400">Mern</span> stack. I
          have a passion to create stunning web apps and websites.
        </h2>
      </div>
      <h2 className={`text-[25px] max-[600px]:text-[19px] ${fira.className}`}>
        Want to know more about me{" "}
        <span>
          <ArrowBigDown className="animate-bounce" size={28} />
        </span>
      </h2>
      <div className="flex items-center gap-4">
        <Button variant={"secondary"} asChild>
          <Link href={"/MyCv.pdf"} download>
            Download Cv
          </Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link href={"/about"}>About Me</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
