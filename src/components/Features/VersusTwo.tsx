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
      <span className=" bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent uppercase text-sm font-bold">
        real-time exchange rate
      </span>
      <h1 className="grifter text-[40px] leading-12 mt-4 mb-3 w-2/3 text-center">
        Effortlessly Convert Currency
      </h1>
      <p className="text-lg text-custom-gray text-center w-2/3">
        Convert your currency from Pounds to Naira or Naira to Dollars. Convert
        Currency Anytime, Anywhere with FinanceFast's Seamless and Efficient
        Service.
      </p>
      <div className="mt-22 flex justify-between items-start w-full ">
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
        <ul className="flex flex-col items-start gap-y-15 w-[388px]">
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
        </ul>
      </div>
    </div>
  );
};

export default VersusTwo;
