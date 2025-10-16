
"use client";

import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useDialogStore } from "@/store/useDialogStore";
import toast from "react-hot-toast";

export default function GetStartedDialog() {
  const { isOpen, close } = useDialogStore();

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length < 1) {
      toast.error("Please select at least one service.");
      return;
    }
    toast.success("Message sent!");
    close();
  };

  const countryOptions = [
    { iso: "AE", code: "+971" },
    { iso: "US", code: "+1" },
    { iso: "GB", code: "+44" },
    { iso: "AU", code: "+61" },
    { iso: "PK", code: "+92" },
    { iso: "IN", code: "+91" },
    { iso: "SG", code: "+65" },
    { iso: "MY", code: "+60" },
    { iso: "JP", code: "+81" },
    { iso: "DE", code: "+49" },
  ];

  const services = [
    "Crypto Trading",
    "Coin Transactions",
    "NFTs",
    "WEB3 Social Media",
    "Decentralized Finance ",
    "Consultancy in WEB3 ",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent
        className="
          sm:max-w-md 
          rounded-2xl 
          shadow-lg 
          p-6 
          max-h-[95vh] 
          overflow-y-auto 
          overflow-x-hidden 
          mx-auto
        "
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            Get Started
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Fill out the form below and our team will reach out to you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Full Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required placeholder="John Doe" />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="you@example.com" />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <div className="flex gap-2 w-full">
              {/* Country Code Dropdown */}
              <Select defaultValue="+971">
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode={c.iso}
                          svg
                          style={{
                            width: "1.25em",
                            height: "1.25em",
                            borderRadius: "2px",
                          }}
                        />
                        {c.code}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Phone Input */}
              <Input
                id="phone"
                type="tel"
                placeholder="123 456 789"
                className="flex-1"
                required
              />
            </div>
          </div>

          {/* Services */}
          <div className="grid gap-3">
            <Label className="text-sm font-medium">Select Services</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={selectedServices.includes(service)}
                    onCheckedChange={() => handleServiceChange(service)}
                  />
                  <Label htmlFor={service} className="text-sm text-muted-foreground">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required placeholder="Your message..." rows={4} />
          </div>

          {/* Marketing Checkbox */}
          <div className="flex items-start space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="text-sm text-muted-foreground">
              I agree to receive updates and marketing emails.
            </Label>
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="secondary" className="w-full">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
