import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import logo from "../assets/logo.svg";

const links = [
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Company",
    url: "/company",
  },
  {
    title: "Products",
    url: "/products",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-12 px-22">
      <img src={logo} alt="" />
      <nav>
        <ul className="flex items-center gap-x-12 text-custom-gray">
          {links.map((link) => (
            <li key={link.title}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
          <li className="bg-light-purple h-12 flex items-center gap-x-1 rounded-3xl px-6 text-black text-lg font-medium">
            <HiOutlineDevicePhoneMobile className="text-2xl" />
            <a href="">Download</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
