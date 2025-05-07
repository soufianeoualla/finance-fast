import phone from "../../assets/iPhone 13 Pro-3.svg";
import FeatureHeader from "./FeatureHeader";
import ItemsList from "./ItemsList";
import VersusCard from "./VersusCard";
import VersusSeparator from "./VersusSeparator";

const featureItems = [
  "Expensive high fees and unfavorable exchange rates",
  "Transfer delays and inconvenience",
  "Fraud and loss of funds",
  "Traditional in-person transactions",
  "Limited payment methods",
  "Lack of transparency",
  "Complex  verification processes",
  "Long payment wait times",
  "Hidden costs",
  "Currency exchange rates",
];

const VersusThree = () => {
  return (
    <div className="flex flex-col items-center">
      <FeatureHeader
        feature="Easily Receive & Request"
        title="Experience Seamless Money Transfers"
        description="Simplify Your Money Management with Receive & Request Payments"
      />

<div className="xl:mt-22 mt-14 flex xl:flex-row flex-col justify-between items-start gap-x-11 gap-y-6 ">

        <ItemsList featureItems={featureItems} />
        <VersusSeparator />
        <VersusCard
          title="Effortless Payments"
          description="Simplify Your Money Management with Receive & Request Payments on FinanceFast."
          image={phone}
          className="bg-light-purple-4/70"
        />
      </div>
    </div>
  );
};

export default VersusThree;
