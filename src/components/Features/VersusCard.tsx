import { cn } from "../../utils";

const VersusCard = ({
  image,
  title,
  description,
  className,
}: {
  image: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-light-purple-3/70 rounded-2xl p-8 pt-12 space-y-10 max-w-[618px] ",
        className
      )}
    >
      <div className="flex justify-center">
        <img src={image} alt="phone" />
      </div>
      <div>
        <h2 className="grifter text-[32px]">{title}</h2>
        <p className="text-custom-gray">{description}</p>
      </div>
    </div>
  );
};

export default VersusCard;
