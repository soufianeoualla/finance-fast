const FeatureHeader = ({
  feature,
  title,
  description,
}: {
  feature: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <span className="bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent uppercase xl:text-sm text-[10px] font-bold">
        {feature}
      </span>
      <h1 className="grifter text-2xl xl:text-[40px] leading-7 xl:leading-12 xl:mt-4 mt-3 mb-3 xl:w-2/3 w-full text-center">
        {title}
      </h1>
      <p className="text-lg text-custom-gray text-center xl:w-2/3 w-full">
        {description}
      </p>
    </>
  );
};

export default FeatureHeader;
