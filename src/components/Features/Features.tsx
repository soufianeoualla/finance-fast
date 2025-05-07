import VersusOne from "./VersusOne";
import VersusThree from "./VersusThree";
import VersusTwo from "./VersusTwo";

const Features = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-80 gap-y-31">
      <VersusOne />
      <VersusTwo />
      <VersusThree />
    </section>
  );
};

export default Features;
