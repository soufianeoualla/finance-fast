import NavLinks from "./NavLinks";
import { LuX } from "react-icons/lu";
import { motion } from "motion/react";

const MobileSidebar = ({ hideSidebar }: { hideSidebar: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 8,
        mass: 1.5,
        duration: 0.5,
      }}
      className="fixed inset-0 w-full h-screen bg-white shadow-lg z-50 p-10 "
    >
      <LuX
        className="absolute top-4 right-4 text-2xl cursor-pointer"
        onClick={hideSidebar}
      />
      <NavLinks />
    </motion.div>
  );
};

export default MobileSidebar;
