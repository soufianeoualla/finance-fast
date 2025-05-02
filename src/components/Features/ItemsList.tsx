
import { LuX } from "react-icons/lu";
import { cn } from "../../utils";

const activeIndex = 4;
const getOpacity = (index: number) => {
  const diff = Math.abs(index - activeIndex);
  const opacity = 1 - diff * 0.2;
  return Math.max(opacity, 0);
};

const ItemsList = ({ featureItems }: { featureItems: string[] }) => {
  return (
    <ul className="space-y-7 flex flex-col items-start">
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
    </ul>
  );
};

export default ItemsList;
