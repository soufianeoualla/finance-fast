import { LuX } from "react-icons/lu";
import { cn } from "../../utils";
import { motion } from "motion/react";

const activeIndex = 4;
const getOpacity = (index: number) => {
  const diff = Math.abs(index - activeIndex);
  const opacity = 1 - diff * 0.2;
  return Math.max(opacity, 0);
};

const ItemsList = ({ featureItems }: { featureItems: string[] }) => {
  return (
    <motion.ul
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
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
