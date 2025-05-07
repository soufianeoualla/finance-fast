import { LuMenu } from "react-icons/lu";
import logo from "../assets/logo.svg";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="flex justify-between items-center xl:pt-12 pt-8 xl:px-22 px-6">
      <img src={logo} alt="" />
      <LuMenu className="xl:hidden w-6 h-6" />
      <div className="hidden xl:flex">
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
