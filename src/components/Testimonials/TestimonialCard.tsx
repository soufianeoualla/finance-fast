import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useSwiper } from "swiper/react";

const TestimonialCard = ({
  user,
  testimonial,
  index,
  lastIndex,
}: {
  testimonial: string;
  user: {
    name: string;
    company: string;
    image: string;
  };
  index: number;
  lastIndex: number;
}) => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  const next = () => {
    if (activeIndex === lastIndex) return;
    swiper.slideNext();
  };

  const prev = () => {
    if (activeIndex === 0) return;
    swiper.slidePrev();
  };

  return (
    <div className="xl:w-[834px] w-full h-[449px] bg-[#E5DBFB]/70 border border-[#949494]/50 rounded-3xl flex flex-col justify-between items-center relative">
      <div className="flex justify-center items-center h-[321px] xl:px-[96px] px-10">
        <p className="text-center text-sm xl:text-2xl text-custom-gray font-medium xl:leading-9">
          {testimonial}
        </p>
      </div>
      <div className="xl:h-[128px] h-[103px] border-t border-t-[#949494]/50 flex items-center gap-x-3 justify-center bg-[#E5DBFB] w-full rounded-b-3xl">
        <img
          src={user.image}
          alt=""
          className="xl:w-16 w-14 xl:h-16 h-14 rounded-full object-cover"
        />

        <div className="flex flex-col items-start justify-center">
          <b className="grifter xl:text-xl text-lg">{user.name}</b>
          <span className="text-sm text-custom-gray">{user.company}</span>
        </div>
      </div>
      {activeIndex === index && (
        <>
          {index !== lastIndex && (
            <div
              onClick={next}
              className="flex justify-center items-center xl:w-12 w-8 h-8 xl:h-12 bg-white rounded-full absolute top-1/2 right-4 -translate-y-1/2"
            >
              <LuChevronRight className="xl:w-5 w-4 h-4 xl:h-5 text-black" />
            </div>
          )}
          {index !== 0 && (
            <div
              onClick={prev}
              className="flex justify-center items-center xl:w-12 w-8 h-8 xl:h-12 bg-white rounded-full absolute top-1/2 left-4 -translate-y-1/2"
            >
              <LuChevronLeft className="xl:w-5 w-4 h-4 xl:h-5 text-black" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TestimonialCard;
