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
  },
  {
    title: "Warehouse Shifting",
    description:
      "Meeting customer's expectations step by step is a Sai Suvidha Packers And Movers first goal. So before moving to another location be ensured that you are moving to safe packers.",
    icon: "/Assets/Images/icons/baggage-claim.svg", // Replace with the actual path to your image
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Our Amazing <span className="text-red-400">Services</span>
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-xl hover:bg-red-50 transition-shadow relative overflow-hidden block lg:flex"
          >
            <div className="bg-red-200 h-fit rounded-full p-3 mt-5 ml-5 w-fit">
              <Image
                src={service.icon}
                alt={`${service.title} Icon`}
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>

            <div className="flex-col flex-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 text-base -mt-4">
                  {service.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
