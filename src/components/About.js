import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Navbar() {
  return (
    <section className="about mx-auto">
      <div className="bg-white py-8 px-8 md:flex md:items-center md:justify-between ">
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src="/Assets/Images/About.png"
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
        <div className="ml-20 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-700 mb-4 leading-tight">
            we have <span className="text-red-400">5+ years</span> of experience
            give you better results!
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Welcome to go shifters. based at Mumbai, Thane. we are one of the
            most reputed and trusted packers and movers agencies. we offer
            packing and moving services that are executed by a team of
            qualified, trained and experienced professionals. we provide
            excellent services and ensure safe transportation of good at
            comparatively low prices. we assure you that from beginning to end,
            your relocation will be coordinated and executed by us.
          </p>
        </div>
      </div>
    </section>
  );
}
