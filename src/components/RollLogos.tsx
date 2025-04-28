import Marquee from "react-fast-marquee";
import logo_1 from "../assets/Mask group.svg";
import logo_2 from "../assets/Mask group-1.svg";
import logo_3 from "../assets/Mask group-2.svg";
import logo_4 from "../assets/hbr-ar21.svg";
import logo_5 from "../assets/y-combinator-seeklogo.com 1.svg";
import logo_6 from "../assets/Fast_Company_logo 2.svg";

const logos = [
  {
    src: logo_1,
    width: 150,
  },
  {
    src: logo_2,
    width: 150,
  },
  {
    src: logo_3,
    width: 70,
  },
  {
    src: logo_4,
    width: 145,
  },
  {
    src: logo_5,
    width: 150,
  },
  {
    src: logo_6,
    width: 150,
  },
];
const RollLogos = () => {
  return (
    <div className="h-[155px] absolute -bottom-38 w-screen left-0 right-0 bg-light-purple-2 pl-22 flex items-center gap-18">
      <p className="text-lg font-medium text-custom-gray w-1/3">
        We're have been recognized by Leading Finance Publications and
        Organizations.
      </p>
      <Marquee>
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            style={{
              width: logo.width,
            }}
            alt={`Logo ${idx}`}
            className="h-16 mx-8"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default RollLogos;
