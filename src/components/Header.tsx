import { LuMenu } from "react-icons/lu";
import logo from "../assets/logo.svg";
import NavLinks from "./NavLinks";

const Header = ({ showSidebar }: { showSidebar: () => void }) => {
  return (
    <header className="flex justify-between items-center xl:pt-12 pt-8 xl:px-22 px-6">
      <img src={logo} alt="" />
      <LuMenu className="xl:hidden w-6 h-6" onClick={showSidebar} />
      <div className="hidden xl:flex">
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
