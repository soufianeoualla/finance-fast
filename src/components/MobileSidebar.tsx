import NavLinks from "./NavLinks";
import { LuX } from "react-icons/lu";

const MobileSidebar = ({ hideSidebar }: { hideSidebar: () => void }) => {
  return (
    <div className="fixed inset-0 w-screen h-full bg-white shadow-lg z-50 p-6 ">
      <LuX
        className="absolute top-4 right-4 text-2xl cursor-pointer"
        onClick={hideSidebar}
      />
      <NavLinks />
    </div>
  );
};

export default MobileSidebar;
