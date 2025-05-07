import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "../utils";

const FAQItem = ({
  question,
  answer,
  handleExpand,
  isExpanded,
  index,
}: {
  question: string;
  answer: string;
  handleExpand: () => void;
  isExpanded: boolean;
  index: number;
}) => {
  return (
    <div
      onClick={handleExpand}
      className={cn(
        "py-8 flex flex-col items-start cursor-pointer w-full",
        index !== 3 && "border-b border-b-[#949494]/50"
      )}
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl grifter">{question}</h2>
        <LuChevronDown
          className={cn(
            "text-custom-gray transition-transform duration-300 w-6 h-6",
            isExpanded ? "rotate-180" : ""
          )}
        />
      </div>
      {isExpanded && <p className="text-custom-gray mt-4">{answer}</p>}
    </div>
  );
};

const faqs = [
  {
    question: "How does FinanceFast work?",
    answer:
      "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.",
  },
  {
    question: "Is it safe to use FinanceFast?",
    answer:
      "Yes, FinanceFast uses advanced encryption and security protocols to ensure your personal and financial information is protected at all times. Your safety and privacy are our top priorities.",
  },
  {
    question: "Can I track my transfer?",
    answer:
      "Absolutely. Once you make a transfer, you can track its progress in real-time through your FinanceFast dashboard, so you always know where your money is.",
  },
  {
    question: "Are there any hidden fees with FinanceFast?",
    answer:
      "No, FinanceFast believes in complete transparency. You’ll see a full breakdown of any fees before you confirm a transfer—no surprises, ever.",
  },
];

const FAQ = () => {
  const [isExpanded, setIsExpanded] = useState<number | null>();
  return (
    <section className=" w-[719px] flex flex-col justify-center items-center mb-28 mx-auto">
      <span className=" bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent uppercase text-sm font-bold">
        FAQ’S
      </span>
      <h1 className="grifter text-[40px] leading-12 mt-4 mb-3 w-2/3 text-center">
        Got questions?
      </h1>
      <p className="text-custom-gray">
        Get the answers to your questions about FastFinance.
      </p>
      <div className="flex flex-col items-start w-full mt-22">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            handleExpand={() =>
              setIsExpanded(isExpanded === index ? null : index)
            }
            isExpanded={isExpanded === index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
