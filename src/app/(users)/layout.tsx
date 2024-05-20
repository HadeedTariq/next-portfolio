import React from "react";
import SideBar from "./_components/SideBar";

interface HomeProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeProps) => {
  return (
    <>
      <div className="flex w-full relative min-h-[100vh] overflow-hidden">
        <div className="h-full max-[600px]:h-[50px] min-[600px]:w-[60px] relative">
          <SideBar />
        </div>
        <div className="my-[23px] px-2 w-full">{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
