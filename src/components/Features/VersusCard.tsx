import useWindowWidth from "../../hooks/useWindowWidth";
import { cn } from "../../utils";
import { motion } from "motion/react";

const VersusCard = ({
  image,
  title,
  description,
  className,
}: {
  image: string;
  title: string;
  description: string;
  className?: string;
}) => {
  const { isMobile } = useWindowWidth();

  const animation = {
    initial: isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: -300 },
    whileInView: isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.whileInView}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 8,
        mass: 1.5,
      }}
      viewport={{ once: true }}
      className={cn(
        "bg-light-purple-3/70 rounded-2xl p-8 pt-12 space-y-10 max-w-[618px] w-full ",
        className
      )}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="flex justify-center items-center"
      >
        <img src={image} alt="phone" />
      </motion.div>

      <div>
        <h2 className="grifter text-[32px]">{title}</h2>
        <p className="text-custom-gray">{description}</p>
      </div>
    </motion.div>
  );
};

export default VersusCard;
