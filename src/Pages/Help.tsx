import { FaInfinity } from "react-icons/fa";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState, ReactNode } from "react";

// Types for Props
type IconProps = {
  id: number;
  open: number;
};

type Question = {
  id: number;
  question: string;
  answer: ReactNode;
};

// Icon Component
const Icon = ({ id, open }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`${
      id === open ? "rotate-180" : ""
    } h-5 w-5 transition-transform`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const Help = () => {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const faqs: Question[] = [
    {
      id: 1,
      question: "What types of PCs do you sell?",
      answer:
        "We sell a wide range of PCs, including gaming PCs, workstations, and budget-friendly desktops.",
    },
    {
      id: 2,
      question: "Do you offer custom-built PCs?",
      answer:
        "Yes, we provide custom PC building services tailored to your specific needs and preferences.",
    },
    {
      id: 3,
      question: "What warranties come with your products?",
      answer:
        "All our products come with manufacturer warranties, and we also offer extended warranty options.",
    },
    {
      id: 4,
      question: "Can I upgrade my existing PC at your shop?",
      answer:
        "Absolutely! We offer PC upgrade services, including RAM, storage, and GPU upgrades.",
    },
    {
      id: 5,
      question: "Do you provide after-sales support?",
      answer:
        "Yes, we offer dedicated after-sales support to ensure your PC continues to perform optimally.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-6 px-10 py-10">
      <div className="icon-container bg-black rounded-full p-4">
        <FaInfinity size={50} color="white" />
      </div>
      <div className="tag-line text-3xl font-semibold">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="qs w-full max-w-3xl">
        {faqs.map(({ id, question, answer }) => (
          <Accordion
            key={id}
            open={open === id}
            icon={<Icon id={id} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(id)}>
              {question}
            </AccordionHeader>
            <AccordionBody>{answer}</AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Help;
