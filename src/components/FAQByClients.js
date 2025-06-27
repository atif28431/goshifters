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
  answer: "Currently, we do not provide insurance coverage for goods. We recommend customers take necessary precautions for valuable items.",
},
{
  id: "payment-options",
  question: "What are the payment options available?",
  answer:
    "We accept a variety of payment methods including credit card, debit card, online banking, UPI, and QR code payments for your convenience.",
},
{
  id: "services",
  question: "What services do Go Shifters offer?",
  answer: "Go Shifters provides comprehensive packing, moving, and secure storage solutions tailored to your needs.",
},
{
  id: "tracking",
  question: "Can I track my shipments?",
  answer: "Yes, you can easily track your shipments through our online platform for real-time updates.",
},
{
  id: "hidden-charges",
  question: "Are there any hidden charges?",
  answer: "No, our pricing is fully transparent. There are no hidden charges—what you see is what you pay.",
},
{
  id: "cancel-order",
  question: "Can I cancel my shifting or change the dates?",
  answer:
    "Yes, you can cancel or reschedule your booking within 12 hours at no extra cost. After 12 hours, a 10% cancellation fee will apply.",
},
{
  id: "prohibited-items",
  question: "What items are prohibited by Go Shifters?",
  answer: "Prohibited items include hazardous materials, illegal goods, and any items restricted"
}
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
