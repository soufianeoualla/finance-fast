import phone from "../../assets/iPhone 13 Pro-2.svg";
import dollar from "../../assets/dollar.svg";
import VersusCard from "./VersusCard";
import VersusSeparator from "./VersusSeparator";
import lira from "../../assets/lira.svg";
import rand from "../../assets/rand.svg";
import won from "../../assets/won.svg";
import yuan from "../../assets/yuan.svg";
import dollar_sign from "../../assets/dollar-sign.svg";
import { cn } from "../../utils";
import FeatureHeader from "./FeatureHeader";
import { motion } from "motion/react";

const currencyList = [
  {
    icon: lira,
    label: "Turkish Lira",
    details: "₦‎ 340 to ₺1 + ₦2,500 hidden conversion fee ",
  },
  {
    icon: rand,
    label: "South African Rand",
    details: "₦‎ 470 to R1 + ₦3,100 hidden conversion fee ",
  },
  {
    icon: dollar_sign,
    label: "United States",
    details: "₦‎ 770 to $1 + ₦‎ 3,000 hidden conversion fee ",
  },
  {
    icon: won,
    label: "South Korean Won",
    details: "₦‎ 470 to ₩1 + ₦‎ 5,000 hidden conversion fee ",
  },
  {
    icon: yuan,
    label: "Chinese Yuan",
    details: "₦‎ 470 to  ¥1 + ₦‎ 3,200 hidden conversion fee ",
  },
];

const VersusTwo = () => {
  return (
    <div className="flex flex-col items-center">
      <FeatureHeader
        feature="real-time exchange rate"
        title="Effortlessly Convert Currency"
        description="Convert your currency from Pounds to Naira or Naira to Dollars. Convert Currency Anytime, Anywhere with FinanceFast's Seamless and Efficient Service."
      />
      <div className="xl:mt-22 mt-14 flex xl:flex-row flex-col justify-between items-start gap-x-11 gap-y-6 ">
        <div className="relative">
          <img
            src={dollar}
            alt=""
            className="absolute top-1/7 right-1/6"
            width={114}
            height={86}
          />

          <VersusCard
            title="Zero Hidden Fees"
            description="Get the Best Exchange Rates with FinanceFast: Convert Currency Hassle-Free, Instantly and Without Fees."
            image={phone}
            className="bg-light-purple-4/70"
          />
        </div>
        <VersusSeparator />
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
          className="flex flex-col items-start gap-y-15  w-full xl:w-auto"
        >
          {currencyList.map((currency, index) => (
            <li key={index} className="flex items-center gap-x-6">
              <div
                className={cn(
                  "bg-light-purple-3 rounded-full w-10 h-10 flex justify-center items-center",
                  index === 2 && "bg-dark-purple"
                )}
              >
                <img
                  src={currency.icon}
                  alt={currency.label}
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl grifter capitalize">
                  {currency.label}
                </span>
                <span className="text-sm text-custom-gray">
                  {currency.details}
                </span>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default VersusTwo;
