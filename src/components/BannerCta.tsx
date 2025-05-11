import { HiOutlineCheck } from "react-icons/hi";
import { cn } from "../utils";
import flash_icon from "../assets/flash_icon.svg";
import lines from "../assets/lines.svg";
import transaction_1 from "../assets/transaction-1.svg";
import transaction_2 from "../assets/transaction-2.svg";
import transaction_3 from "../assets/transaction-3.svg";

const CardItem = ({
  title,
  details,
  image,
  amount,
  debit,
  className,
}: {
  title: string;
  details: string;
  image: string;
  amount?: string;
  debit?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center px-3 rounded-lg bg-white w-[327px] h-[70px]",
        className
      )}
    >
      <div className="flex items-center gap-x-3">
        <img src={image} alt="Card" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-y-1">
          <span className="text-black font-semibold">{title}</span>
          <span className="text-sm text-[#707070]">{details}</span>
        </div>
      </div>
      <span
        className={cn(
          "font-semibold",
          debit ? "text-red-500" : "text-green-500"
        )}
      >
        {amount && amount}
      </span>
    </div>
  );
};

const BannerCta = () => {
  return (
    <div className="bg-dark-purple-2 rounded-3xl flex xl:flex-row flex-col xl:items-center xl:pl-13.5 px-4 mt-33 xl:h-[432px] h-[583px] mb-14  xl:mb-31 overflow-hidden">
      <div className="flex flex-col items-start gap-y-6 xl:w-[60%] pt-14 xl:pt-0">
        <h1 className="grifter text-2xl xl:text-[40px] xl:leading-12 leading-7 text-white text-center xl:text-left ">
          Make International Payments a Breeze with FinanceFast
        </h1>
        <ul className="flex flex-col xl:flex-row xl:items-center xl:gap-x-13.5 gap-y-4">
          <li className="flex items-center gap-x-3 text-[#EDEDED] text-sm xl:text-xl font-medium">
            {" "}
            <HiOutlineCheck />
            No hidden fees
          </li>
          <li className="flex items-center gap-x-3 text-[#EDEDED] text-sm xl:text-xl font-medium">
            {" "}
            <HiOutlineCheck />
            Secure transactions
          </li>
          <li className="flex items-center gap-x-3 text-[#EDEDED] text-sm xl:text-xl font-medium">
            {" "}
            <HiOutlineCheck />
            Fast transfers
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-y-6 relative xl:w-[40%] ">
        <img
          src={lines}
          alt="Lines"
          className="absolute xl:-translate-x-1/2 -translate-x-[45%] xl:-translate-y-1/2 -translate-y-3/5 top-1/2 left-1/2 w-[1294.81px] h-[500px]"
        />
        <img
          src={flash_icon}
          alt="Flash Icon"
          className="absolute -top-10 -right-8 z-20 xl:-translate-y-0 xl:-right-10 w-[110px] h-[92.54px] rotate-12 "
        />

        <CardItem
          title={"$500 received"}
          details="Tax returns"
          image={transaction_1}
          amount="$500.00"
          className="translate-y-4 "
        />
        <CardItem
          title={"$500 sent to Laura"}
          details="Subscription fee"
          image={transaction_2}
          amount="$500.00"
          debit={true}
          className="xl:translate-x-22 translate-x-7 translate-y-4 -rotate-2 w-[300px]"
        />
        <CardItem
          title={"$30 converted"}
          details="30 US Dollars - 50CAD"
          image={transaction_3}
          className="xl:translate-x-14 translate-y-4"
        />
      </div>
    </div>
  );
};

export default BannerCta;
