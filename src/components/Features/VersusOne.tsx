import phone_1 from "../../assets/feature-phone-1.svg";
import ItemsList from "./ItemsList";
import VersusCard from "./VersusCard";
import VersusSeparator from "./VersusSeparator";

const featureItems = [
  "Expensive high fees and unfavorable exchange rates",
  "Transfer delays and inconvenience",
  "Fraud and loss of funds",
  "Traditional in-person transactions",
  "Lack of transparency",
  "Limited payment methods",
  "Complex  verification processes",
  "Long payment wait times",
  "Hidden costs",
  "Currency exchange rates",
];

const VersusOne = () => {
  return (
    <div className="flex flex-col items-center">
      <span className=" bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent uppercase text-sm font-bold">
        Cross-Border Transactions
      </span>
      <h1 className="grifter text-[40px] leading-12 mt-4 mb-3 w-2/3 text-center">
        Say Goodbye to International Payment Hassles
      </h1>
      <p className="text-lg text-custom-gray text-center w-2/3">
        Start your journey to hassle free Cross-Border Payments by downloading
        the FastFinance app from your iOS of Android store.
      </p>
      <div className="mt-22 flex justify-between items-start gap-x-11 ">
        <ItemsList featureItems={featureItems} />
        <VersusSeparator />
        <VersusCard
          title="Global accounts in minutes"
          description="FinanceFast solves problems by proving low fees, fast transfers, secure transactions, and a user-friendly platform."
          image={phone_1}
        />
      </div>
    </div>
  );
};

export default VersusOne;
