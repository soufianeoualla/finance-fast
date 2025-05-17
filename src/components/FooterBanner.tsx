import playStore from "../assets/playstore.png";
import appStore from "../assets/appstore.png";
import phone from "../assets/feature-phone-1.svg";
import cloud from "../assets/cloud.svg";
import lines from "../assets/lines-banner.svg";
import { motion } from "motion/react";

const FooterBanner = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 8,
        mass: 1.5,
        duration: 0.5,
      }}
      className="flex flex-col xl:flex-row xl:justify-between items-center bg-dark-purple xl:px-14 px-4 xl:h-[406px] h-[436px] rounded-3xl mb-28 relative"
    >
      <img src={lines} alt="" className="absolute top-0 left-0" />
      <div className="flex flex-col items-start gap-y-6 pt-14 xl:pt-0">
        <h1 className="grifter xl:text-[40px] text-xl leading-7 xl:leading-12 text-white ">
          One Solution for All Your Cross-Border Payments
        </h1>
        <div className="flex items-start gap-x-4">
          <img src={playStore} alt="" />

          <img src={appStore} alt="" />
        </div>
      </div>

      <div className=" w-full flex items-center xl:justify-end justify-center xl:translate-y-14.75 translate-y-8.25 relative">
        <img
          src={cloud}
          alt=""
          width={140}
          height={136}
          className="absolute xl:static left-8 -top-4 xl:w-[140px] xl:h-[136px] w-18 h-18"
        />
        <img src={phone} alt="" className="w-[238px] xl:w-auto" />
      </div>
    </motion.div>
  );
};

export default FooterBanner;
