import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import CustomListItem from "./ui/CustomListItem";
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
const NavLinks = () => {
  return (
    <nav>
      <ul className="flex items-center gap-x-12 text-custom-gray">
        {links.map((link) => (
          <CustomListItem key={link.title} label={link.title} />
        ))}
        <li className="bg-light-purple h-12 flex items-center gap-x-1 rounded-3xl px-6 text-black text-lg font-medium">
          <HiOutlineDevicePhoneMobile className="text-2xl" />
          <a href="">Download</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
