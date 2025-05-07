import phone_1 from "../../assets/feature-phone-1.svg";
import FeatureHeader from "./FeatureHeader";
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
      <FeatureHeader
        feature="Cross-Border Transactions"
        title="Say Goodbye to International Payment Hassles"
        description="Start your journey to hassle free Cross-Border Payments by downloading the FastFinance app from your iOS of Android store."
      />
      <div className="xl:mt-22 mt-14 flex xl:flex-row flex-col justify-between items-start gap-x-11 gap-y-6 ">
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
