import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Vehicle Transportation",
    description:
      "When you are shifting to a new place, transporting your car is one of the stressful steps. If you decide to drive your car to your new location every step of the way,",
    icon: "/Assets/Images/icons/bus.svg", // Replace with the actual path to your image
  },
  {
    title: "Corporate/Office Shifting",
    description:
      "We are reliable packing and moving company. It provides you trustworthy relocation services, transportation services, warehousing, and storage services.",
    icon: "/Assets/Images/icons/building.svg", // Replace with the actual path to your image
  },
  {
    title: "Domestic/Local Shifting",
    description:
      "The loading and unloading of goods is a risky task so it is advisable not to do this work yourself. We have the experience to make your local move as seamless as possible.",
    icon: "/Assets/Images/icons/home.svg", // Replace with the actual path to your image
  }
];

const ServicesSection = () => {
  return (
    <div className="bg-white py-16 px-8">
  <h2 className="text-4xl font-bold text-center text-gray-800">
    Our Amazing <span className="text-red-400">Services</span>
  </h2>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <Card
        key={index}
        className="relative overflow-hidden flex flex-col items-center text-center border border-red-100"
      >
        <div className="bg-red-200 rounded-full p-4 mt-6 mb-4 w-fit">
          <Image
            src={service.icon}
            alt={`${service.title} Icon`}
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl font-semibold text-gray-800">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-700 text-base px-4 pb-6">
            {service.description}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
  );
};

export default ServicesSection;
