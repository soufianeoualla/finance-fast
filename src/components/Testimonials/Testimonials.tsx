import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";

// Import Swiper styles
//@ts-expect-error importing css file
import "swiper/css";

const testimonials = [
  {
    quote:
      "I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.",
    name: "Carl Rowan",
    image:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "Aglets Inc",
  },
  {
    quote:
      "FinanceFast has been a game-changer for our business. We can now pay our overseas contractors quickly and without worrying about hidden fees.",
    name: "Mark Thompson",
    image:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1200",
    company: "Thompson Tech",
  },
  {
    quote:
      "What I love most about FinanceFast is the peace of mind. Knowing my transfers are secure and that I can track them anytime makes all the difference.",
    name: "Lucía Fernández",
    image:
      "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "Fernández Consulting",
  },
  {
    quote:
      "The user interface is super intuitive, and the support team is always helpful. I wouldn't use anything else to send money internationally.",
    name: "Kevin Zhou",
    image:
      "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "Zhou Imports",
  },
];

const Testimonials = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      stiffness: 40,
      damping: 8,
      mass: 1.5,
      duration: 0.5,
    }}
    className="flex flex-col justify-center items-center xl:mb-28 mb-18">
      <span className=" bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent uppercase text-sm font-bold">
        Testimonials
      </span>
      <h1 className="grifter text-xl leading-7 xl:text-[40px] xl:leading-12 mt-4 mb-3 xl:w-2/3 text-center">
        What Our Customers are Saying
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper w-full mt-18"
        breakpoints={{
          768: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              testimonial={testimonial.quote}
              user={{
                name: testimonial.name,
                company: testimonial.company,
                image: testimonial.image,
              }}
              index={index}
              lastIndex={testimonials.length - 1}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Testimonials;
