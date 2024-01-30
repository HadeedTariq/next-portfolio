import React from "react";
import SideBar from "./_components/SideBar";

interface HomeProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeProps) => {
  return (
    <>
      <div className="flex max-[600px]:gap-0 min-[600px]:gap-2 relative min-h-[100vh]">
        <div className="h-full max-[600px]:h-[50px] min-[600px]:w-[60px] relative">
          <SideBar />
        </div>
        {children}
      </div>
    </>
  );
};

export default HomeLayout;
