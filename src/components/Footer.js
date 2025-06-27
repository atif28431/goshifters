import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-red-500 text-white py-8 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-5 md:justify-items-center lg:justify-between">
        {/* Logo and Address */}
        <div className="md:col-span-3">
          <h2 className="text-lg font-bold">GO SHIFTERS</h2>
          <p className="mt-2 text-sm">
            Tambe Apt., Shivaji wadi, behind Hanuman Temple, Savarkar Nagar,
            Thane West - 400606
          </p>
          <form className="mt-4 flex gap-2">
            <Input
              type="email"
              placeholder="abcd@example.com"
              className="bg-white text-black placeholder:text-gray-500"
            />
            <Button type="submit" variant="default">
              Subscribe
            </Button>
          </form>
          <div className="flex mt-4 gap-4">
            <Link href="https://www.instagram.com/goshifters?igsh=OGM2ZWxkdXF6ZjF1" target="_blank">
            <Image
              alt=""
              src="/Assets/Images/insta.png"
              width={20}
              height={20}
            ></Image></Link>
            <Image
              alt=""
              src="/Assets/Images/fb.png"
              width={20}
              height={20}
            ></Image>
          </div>
        </div>

        {/* Need Help? */}
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-4">Need Help?</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Contact us</li>
            <li className="hover:underline cursor-pointer">About us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">
              Household Shifting
            </li>
            <li className="hover:underline cursor-pointer">
              Corporate Shifting
            </li>
            <li className="hover:underline cursor-pointer">Office Shifting</li>
            <li className="hover:underline cursor-pointer">
              Warehouse Shifting
            </li>
            <li className="hover:underline cursor-pointer">Local Shifting</li>
            <li className="hover:underline cursor-pointer">
              Domestic Shifting
            </li>
            <li className="hover:underline cursor-pointer">
              Vehicle Transportation
            </li>
          </ul>
        </div>

        {/* Timing and Copyright */}
      </div>
      <div>
        <hr className="border-gray-300 my-8" />
        <div className="flex items-center justify-between text-sm mt-5 flex-wrap">
          <p>Timing: 24x7 Support</p>

          <p className="text-xs">
            Copyright © 2025 Go Shifters Packers And Movers & Theme maintained
            by Corpnix
          </p>
        </div>
      </div>
    </footer>
  );
}
