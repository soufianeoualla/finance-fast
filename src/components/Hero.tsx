import { PhoneInput } from "./ui/PhoneInput";
import phone_1 from "../assets/iPhone 13 Pro.svg";
import phone_2 from "../assets/iPhone 13 Pro-1.svg";
import phone_3 from "../assets/iPhone 13 Pro-2.svg";
import phone_4 from "../assets/iPhone 13 Pro-3.svg";
import RollLogos from "./RollLogos";

const Hero = () => {
  return (
    <div className="relative ">
      <section className=" flex flex-col items-center justify-center mt-[154px]  max-w-[1440px] mx-auto ">
        <h1 className="grifter text-[48px] leading-[54px] text-center w-2/3">
          Simplify Your International Transactions with{" "}
          <span className="grifter bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent">
            One Platform
          </span>
        </h1>
        <p className="mt-3 text-lg text-custom-gray text-center w-1/2">
          Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast
          allows you effortlessly transfer money anywhere in the world with
          confidence and ease.
        </p>
        <div className="flex items-center gap-4 border border-[#949494]/50 rounded-4xl pr-2 pl-6 py-1.5 mt-10">
          <PhoneInput />
          <button className="px-6 h-12 rounded-3xl bg-dark-purple text-white font-medium">
            Download Now
          </button>
        </div>
        <div className="flex items-end gap-x-6 mt-[148px] max-w-[1264px] mx-auto">
          <img src={phone_2} alt="" />
          <img src={phone_1} alt="" />
          <img src={phone_3} alt="" />
          <img src={phone_4} alt="" />
        </div>
      </section>
      <RollLogos />
    </div>
  );
};

export default Hero;
