"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils"; // shadcn's utility for merging class names
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, AlignJustify } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Assets/Images/navlogo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="rotate-90 transform"
            />
            <div className="text-primary-500 font-bold uppercase">
              GoShifters
            </div>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden space-x-6 md:flex">
          {["Home", "About", "Services", "FAQs", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Menu size={32} strokeWidth={1.5} onClick={toggleSidebar} />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed z-50 inset-y-0 right-0 w-full text-left bg-primary-500 shadow-lg transform transition-transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 flex flex-col space-y-4 mt-6">
          <button
            className="self-end text-green-50 mr-4 font-black text-lg"
            onClick={toggleSidebar}
          >
            ✕
          </button>
          {["Home", "About", "Services", "FAQs", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className=" hover:bg-primary-600 rounded-lg transition-colors mt-6 px-6 py-4 text-white"
              onClick={toggleSidebar}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay (optional) */}
      {isOpen && <div className="fixed inset-0" onClick={toggleSidebar}></div>}
    </header>
  );
}
