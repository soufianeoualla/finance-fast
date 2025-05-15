import { LuX } from "react-icons/lu";
import { cn } from "../../utils";
import { motion } from "motion/react";
import useWindowWidth from "../../hooks/useWindowWidth";

const activeIndex = 4;
const getOpacity = (index: number) => {
  const diff = Math.abs(index - activeIndex);
  const opacity = 1 - diff * 0.2;
  return Math.max(opacity, 0);
};

const ItemsList = ({ featureItems }: { featureItems: string[] }) => {
  const { isMobile } = useWindowWidth();

  const animation = {
    initial: isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: 300 },
    whileInView: isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 },
  };

  return (
    <motion.ul
      initial={animation.initial}
      whileInView={animation.whileInView}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 8,
        mass: 1.5,
      }}
      viewport={{ once: true }}
      className="space-y-7 flex flex-col items-start  w-full xl:w-auto "
    >
      {featureItems.map((item, index) => (
        <li
          className={cn(
            "flex items-center gap-x-3 px-3 text-custom-gray",
            index === 4 &&
              "p-3 rounded-3xl border border-[#949494]/50 bg-[#F9F9F9]"
          )}
          style={{
            opacity: getOpacity(index),
          }}
        >
          <LuX
            className={cn("w-4 h-4", index === 4 && "text-red-500 w-5 h-5")}
          />
          {item}
        </li>
      ))}
    </motion.ul>
  );
};

export default ItemsList;
