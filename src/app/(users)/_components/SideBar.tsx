"use client";
import {
  FolderClosed,
  Github,
  Home,
  Linkedin,
  SquarePen,
  User,
} from "lucide-react";
import { Average_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
const font = Average_Sans({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="fixed max-[600px]:bottom-0 max-[600px]:w-full max-[600px]:h-[60px] max-[600px]:flex-row w-[50px] flex-wrap max-[600px]:px-2  bg-gradient-to-r from-violet-600 via-violet-600 to-purple-500 h-[100vh] text-white flex flex-col justify-center items-center  gap-6">
      <div title="Home" className="flex flex-col items-center">
        <Home
          size={30}
          onClick={() => router.push("/")}
          cursor={"pointer"}
          className={`hover:animate-pulse ${
            pathname === "/" && "text-red-400 scale-90"
          }`}
        />
        <p
          className={`${font.className} min-[600px]:text-[0px] text-[18px] font-semibold `}>
          Home
        </p>
      </div>
      <div title="About me" className="flex flex-col items-center">
        <User
          size={30}
          onClick={() => router.push("/about")}
          cursor={"pointer"}
          className={`hover:animate-pulse ${
            pathname === "/about" && "text-red-400 scale-90"
          }`}
        />
        <p
          className={`${font.className} min-[600px]:text-[0px] text-[18px] font-semibold`}>
          About
        </p>
      </div>
      <div title="Projects" className="flex flex-col items-center">
        <FolderClosed
          size={30}
          onClick={() => router.push("/projects")}
          cursor={"pointer"}
          className={`hover:animate-pulse ${
            (pathname === "/projects" || pathname.includes("/projects")) &&
            "text-red-400 scale-90"
          }`}
        />
        <p
          className={`${font.className} min-[600px]:text-[0px] text-[18px] font-semibold `}>
          Projects
        </p>
      </div>
      <div title="Blogs" className="flex flex-col items-center">
        <SquarePen
          size={30}
          onClick={() => router.push("/blogs")}
          cursor={"pointer"}
          className={`hover:animate-pulse ${
            (pathname === "/blogs" || pathname.includes("/blogs")) &&
            "text-red-400 scale-90"
          }`}
        />
        <p
          className={`${font.className} min-[600px]:text-[0px] text-[18px] font-semibold `}>
          Blogs
        </p>
      </div>
      <Link href={"https://github.com/HadeedTariq"} target="_blank">
        <div title="Github" className="flex flex-col items-center">
          <Github
            size={30}
            cursor={"pointer"}
            className="hover:animate-pulse"
          />
        </div>
        <p
          className={`${font.className} min-[600px]:text-[0px] text-[18px] font-semibold `}>
          Github
        </p>
      </Link>
    </div>
  );
};

export default SideBar;
