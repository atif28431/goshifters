"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
const FAQByClients = () => {
  const [faqData] = useState([
    {
      id: "insurance",
      question: "Is there any insurance available for the goods?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: "payment-options",
      question: "What are the payment options available?",
      answer:
        "Payment options include credit card, debit card, and online banking.",
    },
    {
      id: "services",
      question: "What services do Go Shifters offer?",
      answer: "We offer packing, moving, and storage solutions.",
    },
    {
      id: "tracking",
      question: "Can I track my shipments?",
      answer: "Yes, tracking is available through our online platform.",
    },
    {
      id: "hidden-charges",
      question: "Are there any hidden charges?",
      answer: "No, we maintain transparency in our pricing.",
    },
    {
      id: "cancel-order",
      question: "Can I cancel my shifting or order change dates?",
      answer:
        "Yes, cancellations or date changes are allowed with prior notice.",
    },
    {
      id: "prohibited-items",
      question: "What are the items that are prohibited by Go Shifters?",
      answer: "Prohibited items include hazardous materials and illegal goods.",
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">
        FAQ By <span className="text-red-400">Clients</span>
      </h2>
      <Accordion type="single" collapsible>
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-base text-gray-800 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 pr-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQByClients;
