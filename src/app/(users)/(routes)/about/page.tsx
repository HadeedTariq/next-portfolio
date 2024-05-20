import React from "react";
import { Akaya_Kanadaka, Average_Sans } from "next/font/google";

const aclonia = Akaya_Kanadaka({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
const font = Average_Sans({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
const AboutPage = () => {
  return (
    <div className="p-6 min-[600px]:mx-4 text-[23px]">
      <h1
        className={`text-4xl ${aclonia.className} font-bold mb-4 text-purple-500`}>
        About Me
      </h1>

      <p className={`mb-4 ${font.className}`}>
        Hello there! I&apos;m a{" "}
        <span className="text-purple-500">MERN stack developer</span> with{" "}
        <span className="text-purple-500">
          1.75 years of learning experience
        </span>
        , currently pursuing my BS IT degree from a government college.
      </p>

      <p className={`mb-4 ${font.className}`}>
        I have <span className="text-purple-500">expertise</span> in both
        frontend and backend development. I&apos;ve successfully created many
        complex projects and implemented numerous{" "}
        <span className="text-purple-500">REST APIs</span>. My experience
        includes working with{" "}
        <span className="text-purple-500">NoSQL databases</span> like{" "}
        <span className="text-purple-500">MongoDB</span> and{" "}
        <span className="text-purple-500">Firebase Firestore</span>.
      </p>

      <p className={`mb-4 ${font.className}`}>
        Additionally, I am familiar with various{" "}
        <span className="text-purple-500 mx-2">React libraries</span> and
        frameworks, including{" "}
        <span className="text-purple-500 mx-2">Next.js</span>. If you are hiring
        or looking for a
        <span className="text-purple-500 mx-2">full-stack developer</span> then
        consider hiring me for my passion and skills in web development.
      </p>
    </div>
  );
};

export default AboutPage;
