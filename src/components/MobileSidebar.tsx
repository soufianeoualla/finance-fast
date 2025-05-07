
import NavLinks from "./NavLinks";
import { LuX } from "react-icons/lu";

const MobileSidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 ">
      <LuX className="absolute top-4 right-4 text-2xl cursor-pointer" />
      <NavLinks />
    </div>
  );
};

export default MobileSidebar;
