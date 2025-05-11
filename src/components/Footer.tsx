import { useState } from "react";
import { LuMail } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import tiktok from "../assets/tiktok.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false);
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#F9F9F9] py-18">
      <div className="max-w-[1440px] mx-auto xl:px-22 px-6">
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-0 md:justify-between ">
          <div className="space-y-4">
            <h2 className="xl:text-xl text-lg grifter">Company</h2>
            <ul className="space-y-4 text-custom-gray text-sm xl:text-base">
              <li>About</li>
              <li>Contact</li> <li>Blog</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="xl:text-xl text-lg grifter">Product</h2>
            <ul className="space-y-4 text-custom-gray text-sm xl:text-base">
              <li>Money conversion</li>
              <li>International transactions</li>{" "}
              <li>International transactions</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="xl:text-xl text-lg grifter">Legal</h2>
            <ul className="space-y-4 text-custom-gray text-sm xl:text-base">
              <li>Terms & conditions</li>
              <li>privacy policy</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="xl:text-xl text-lg grifter ">
              Sign up for our newsletter
            </h2>

            <div className="xl:w-[498px] w-full h-[50px] flex gap-x-2 rounded-3xl bg-white p-[5px] border border-[#949494]/50">
              <input
                type="text"
                placeholder="Enter email"
                className="w-full h-full text-sm xl:text-base px-4 outline-none placeholder:text-custom-gray "
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <button className="bg-dark-purple text-white text-sm xl:text-base rounded-3xl h-full px-6 hover:bg-dark-purple-2 cursor-pointer hover:scale-[102%] transition-transform">
                <AnimatePresence mode="wait">
                  {isFocused ? (
                    <motion.span
                      key="icon"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center"
                    >
                      <LuMail size={20} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Subscribe
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center items-start gap-y-6  w-full mt-10 xl:mt-14">
          <div className="flex gap-x-4 items-center">
            <div className="w-10 h-10 flex justify-center items-center bg-white rounded-full">
              <img src={instagram} alt="" />
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-white rounded-full">
              <img src={twitter} alt="" />
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-white rounded-full">
              <img src={tiktok} alt="" />
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-white rounded-full">
              <img src={youtube} alt="" />
            </div>
          </div>
          <p>© {currentYear}, FinanaceFast All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
