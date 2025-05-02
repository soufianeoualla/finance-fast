import phone from "../../assets/iPhone 13 Pro-3.svg";
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
      <span className=" bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent uppercase text-sm font-bold">
        Easily Receive & Request{" "}
      </span>
      <h1 className="grifter text-[40px] leading-12 mt-4 mb-3 w-2/3 text-center">
        Experience Seamless Money Transfers{" "}
      </h1>
      <p className="text-lg text-custom-gray text-center w-2/3">
        Simplify Your Money Management with Receive & Request Payments
      </p>
      <div className="mt-22 flex justify-between items-start gap-x-11 ">
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
