import React, { useState } from "react";
import type { ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  content, 
  isOpen, 
  onClick 
}) => (
  <div className="border-b w-full">
    <button
      className="w-full flex justify-between items-center py-4 px-6 focus:outline-none"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="text-lg font-medium text-start">{title}</span>
      <svg
        className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
    >
      <div className="px-6 pb-4 text-gray-700">{content}</div>
    </div>
  </div>
);

interface AccordionProps {
  items: Array<{
    title: string;
    content: ReactNode;
  }>;
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          isOpen={openIndex === idx}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
};

// Beispiel für die Verwendung:
// <Accordion
//   items={[
//     { title: "Frage 1", content: "Antwort auf Frage 1." },
//     { title: "Frage 2", content: "Antwort auf Frage 2." },
//     { title: "Frage 3", content: "Antwort auf Frage 3." },
//   ]}
// />