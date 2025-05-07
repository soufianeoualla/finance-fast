import playStore from "../../assets/playstore.png";
import appStore from "../../assets/appstore.png";
import phone from "../../assets/feature-phone-1.svg";
import cloud from "../../assets/cloud.svg";
import lines from "../../assets/lines-banner.svg";

const FooterBanner = () => {
  return (
    <div className="flex justify-between items-center bg-dark-purple px-14 h-[406px] rounded-3xl mb-28 relative">
      <img src={lines} alt="" className="absolute top-0 left-0" />
      <div className="flex flex-col items-start gap-y-6">
        <h1 className="grifter text-[40px] leading-12 text-white ">
          One Solution for All Your Cross-Border Payments
        </h1>
        <div className="flex items-start gap-x-4">
          <img src={playStore} alt="" />

          <img src={appStore} alt="" />
        </div>
      </div>

      <div className=" w-full flex items-center justify-end translate-y-14.75 relative">
        <img src={cloud} alt="" width={140} height={136} />
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default FooterBanner;
