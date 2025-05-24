import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Navbar() {
  return (
    <section className="hero mx-auto">
      <div className="bg-white py-16 px-8 md:flex md:items-center md:justify-between ">
        <div className="md:mr-20 md:w-1/2 sm:w-100 sm:mr-0">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Welcome To Go Shifters
          </h1>
          <h1 className="text-5xl font-bold text-gray-700 mt-4">
            We Expert In
          </h1>
          <h1 className="text-5xl font-bold text-red-400 mb-4 mt-2 leading-tight">
            Household Relocation Services
          </h1>
          <p className="text-gray-600 text-xl mb-4">
            Go Shifters Your One Step Solution To Make Your Shifting Easy Our
            Expertise In Relocations
          </p>
          <Button
            variant="default"
            className="text-white bg-red-500 hover:bg-red-600"
          >
            <span className="mr-2">Contact Us</span>
            <Image
              src="/Assets/Images/phone-outgoing.svg"
              height={18}
              width={18}
              alt="button icon"
            ></Image>
          </Button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src="/Assets/Images/Hero.png"
            alt="Hero Image"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              minWidth: "100%",
              minHeight: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          ></Image>
        </div>
      </div>
    </section>
  );
}
