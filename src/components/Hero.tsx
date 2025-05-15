import { PhoneInput } from "./ui/PhoneInput";
import phone_1 from "../assets/iPhone 13 Pro.svg";
import phone_2 from "../assets/iPhone 13 Pro-1.svg";
import phone_3 from "../assets/iPhone 13 Pro-2.svg";
import phone_4 from "../assets/iPhone 13 Pro-3.svg";
import RollLogos from "./RollLogos";
import { AnimatePresence, motion } from "motion/react";

import { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";

const Hero = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative  ">
      <section className=" flex flex-col items-center justify-center xl:mt-[154px] mt-20 max-w-[1440px] mx-auto  ">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 8,
            mass: 1.5,
          }}
          className="px-6 xl:px-0 flex flex-col items-center justify-center "
        >
          <h1 className="grifter xl:text-[48px] text-[32px] xl:leading-[54px] leading-10 text-center xl:w-2/3 ">
            Simplify Your International Transactions with{" "}
            <span className="grifter bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent">
              One Platform
            </span>
          </h1>
          <p className="mt-3 xl:text-lg text-custom-gray text-center xl:w-1/2">
            Say Goodbye to the Hassles of Traditional Money Transfers.
            FinanceFast allows you effortlessly transfer money anywhere in the
            world with confidence and ease.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 8,
            mass: 1.5,
          }}
          className="flex overflow-hidden flex-col xl:flex-row xl:justify-between items-center gap-4 xl:border xl:border-[#949494]/50 rounded-4xl pr-2 pl-6 py-1.5 mt-10 w-full xl:w-[498px]"
        >
          <PhoneInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button
            className="px-6 h-12 rounded-3xl bg-dark-purple text-white font-medium w-full xl:w-[173px] flex items-center justify-center hover:bg-gradient-to-b  from-[#5a5df7] to-[#563acc]
hover:scale-102 transition-transform "
          >
            <AnimatePresence mode="wait">
              {isFocused ? (
                <motion.span
                  key="icon"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center"
                >
                  <LuDownload size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Download Now
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={hasScrolled ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 8,
            mass: 1.5,
          }}
        >
          <div className="overflow-hidden">
            <div className="flex items-end xl:gap-x-6 gap-2.5 xl:mt-[148px] mt-[90px] max-w-[1264px] mx-auto -translate-x-26 xl:-translate-x-0">
              <img
                src={phone_2}
                alt=""
                className="w-[148px] translate-y-10 xl:translate-y-0 xl:w-auto"
              />
              <img src={phone_1} alt="" className="w-[148px] xl:w-auto" />
              <img
                src={phone_3}
                alt=""
                className="w-[148px]  translate-y-10 xl:translate-y-0 xl:w-auto"
              />
              <img
                src={phone_4}
                alt=""
                className="w-[148px]  translate-y-10 xl:translate-y-0 xl:w-auto"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={hasScrolled ? { y: 0, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 8,
          mass: 1.5,
          duration: 0.5,
        }}
      >
        <RollLogos />
      </motion.div>
    </div>
  );
};

export default Hero;
