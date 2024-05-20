import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MobileSideBarProps {
  children: React.ReactNode;
}

const MobileSideBar = ({ children }: MobileSideBarProps) => {
  return (
    <div className="relative h-[40px]  min-[600px]:hidden">
      <Sheet>
        <SheetTrigger className="fixed w-full bg-black  z-50 h-[40px]">
          <Menu />
        </SheetTrigger>
        <SheetContent className="gap-6 w-[230px]">
          <SheetClose>{children}</SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
