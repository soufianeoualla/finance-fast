import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";

import CustomListItem from "./ui/CustomListItem";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";

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
  const [isHovred, setIsHovred] = useState(false);
  return (
    <nav>
      <ul className="flex flex-col xl:flex-row xl:items-center items-start gap-y-6 gap-x-12 text-custom-gray">
        {links.map((link) => (
          <CustomListItem key={link.title} label={link.title} />
        ))}
        <li
          onMouseEnter={() => setIsHovred(true)}
          onMouseLeave={() => setIsHovred(false)}
          className="bg-light-purple h-12 flex items-center gap-x-1 rounded-3xl w-[150px]  justify-center  text-black text-lg font-medium "
        >
          <AnimatePresence>
            {!isHovred && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 8,
                  mass: 1.5,
                  duration: 0.35,
                }}
                className="flex items-center"
              >
                <HiOutlineDevicePhoneMobile className="text-2xl" />
              </motion.span>
            )}
            <a href="">Download</a>
            {isHovred && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 8,
                  mass: 1.5,
                  duration: 0.35,
                }}
                className="flex items-center"
              >
                <HiDownload />
              </motion.span>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
