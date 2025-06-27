"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { MapPin, CalendarIcon, Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Dialog } from "@/components/ui/dialog";
import { sendContactForm } from "@/lib/sendContactForm";

const ContactUs = () => {
  const [date, setDate] = useState();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    shifting: "",
    pickup: "",
    delivery: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactForm({
        ...form,
        deliveryDate: date ? date.toISOString().split("T")[0] : "",
      });
      setDialogOpen(true);
      setForm({ name: "", phone: "", email: "", shifting: "", pickup: "", delivery: "", message: "" });
      setDate(null);
    } catch {
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        Contact Us
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <Input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="mt-1" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <Input name="phone" value={form.phone} onChange={handleChange} placeholder="e.g., +91 (333) 000-0000" className="mt-1" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" className="mt-1" required type="email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Shifting
          </label>
          <Select value={form.shifting} onValueChange={v => setForm(f => ({ ...f, shifting: v }))}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select Shifting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home">Home Shifting</SelectItem>
              <SelectItem value="office">Office Shifting</SelectItem>
              <SelectItem value="vehicle">Vehicle Shifting</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Delivery Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal mt-1",
                  !date && "text-muted-foreground"
                )}
                type="button"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address of Pickup
          </label>
          <Input name="pickup" value={form.pickup} onChange={handleChange} placeholder="Enter pickup address" className="mt-1" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address of Delivery
          </label>
          <Input name="delivery" value={form.delivery} onChange={handleChange} placeholder="Enter delivery address" className="mt-1" required />
        </div>
        <div className="">
          <label className="block text-sm font-medium text-gray-700">
            Custom Message (Optional)
          </label>
          <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Enter any specific message you want to share" className="mt-1 md:w-full" />
        </div>
        <div className="md:col-span-2 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white w-full max-w-sm mx-auto py-2" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
  <div className="flex flex-col items-center justify-center p-8 ">
    <svg className="mb-4 text-red-500" width="48" height="48" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#fee2e2"/>
      <path d="M8 12l2.5 2.5L16 9" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Thank You!</h3>
    <p className="text-gray-700 text-lg mb-4">
      Your request has been submitted.<br/>We will contact you soon.
    </p>
    <Button onClick={() => setDialogOpen(false)} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full mt-2">
      Close
    </Button>
  </div>
</Dialog>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 mt-10">
        <div className="md:col-span-6">
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:col-span-4 flex flex-col space-y-4">
          <Card className="flex rounded-none border-none shadow-none">
            <div className="bg-red-200 h-fit rounded-full p-2 mt-3 mr-1">
              <Image
                src="/Assets/Images/icons/home.svg"
                alt="Icon"
                width={24}
                height={24}
                className="h-5 w-5"
              />
            </div>
            <div className="flex-col flex-1">
              <CardHeader className="p-2">
                <div className="flex items-center">
                  <CardTitle className="text-base font-semibold text-gray-800">
                    Email
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-gray-800 text-base -mt-4">
                  info@goshifters.in
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="flex rounded-none border-none shadow-none">
            <div className="bg-red-200 h-fit rounded-full p-2 mt-3 mr-1">
              <Image
                src="/Assets/Images/icons/home.svg"
                alt="Icon"
                width={24}
                height={24}
                className="h-5 w-5"
              />
            </div>
            <div className="flex-col flex-1">
              <CardHeader className="p-2">
                <div className="flex items-center">
                  <CardTitle className="text-base font-semibold text-gray-800">
                    Phone
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-gray-800 text-base -mt-4">
                  <a href="tel:+919136211721">+91 9136211721</a> /{" "}
                  <a href="tel:+918104494579">+91 8104494579</a>
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="flex rounded-none border-none shadow-none">
            <div className="bg-red-200 h-fit rounded-full p-2 mt-3 mr-1">
              <Image
                src="/Assets/Images/icons/home.svg"
                alt="Icon"
                width={24}
                height={24}
                className="h-5 w-5"
              />
            </div>
            <div className="flex-col flex-1">
              <CardHeader className="p-2">
                <div className="flex items-center">
                  <CardTitle className="text-base font-semibold text-gray-800">
                    Address
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-gray-800 text-base -mt-4">
                  Tambe Apt., Shivaji wadi, behind hanuman temple, savarkar
                  nagar thane west - 400606
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
