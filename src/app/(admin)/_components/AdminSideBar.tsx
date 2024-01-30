"use client";
import { Grip, Newspaper, PencilLine, PlusSquare } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const AdminSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="fixed w-[60px] bg-gradient-to-r from-violet-600 via-violet-600 to-purple-500 h-[100vh] text-white flex flex-col justify-center items-center gap-6">
      <div title="Create Project">
        <PlusSquare
          size={30}
          onClick={() => router.push("/admin")}
          cursor={"pointer"}
          className={`hover:animate-pulse ${
            pathname === "/admin" && "text-yellow-400 scale-90"
          }`}
        />
      </div>
      <div title="Write Blog">
        <PencilLine
          size={30}
          onClick={() => router.push("/admin/writeBlog")}
          cursor={"pointer"}
          className={`hover:animate-pulse ${
            pathname === "/admin/writeBlog" && "text-yellow-400 scale-90"
          }`}
        />
      </div>
      <div title="Project Handler">
        <Grip
          size={30}
          onClick={() => router.push("/admin/projectHandler")}
          cursor={"pointer"}
          className={`hover:animate-pulse ${
            pathname === "/admin/projectHandler" && "text-yellow-400 scale-90"
          }`}
        />
      </div>
      <div title="Blog Handler">
        <Newspaper
          size={30}
          onClick={() => router.push("/admin/blogHandler")}
          cursor={"pointer"}
          className={`hover:animate-pulse ${
            pathname === "/admin/blogHandler" && "text-yellow-400 scale-90"
          }`}
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
