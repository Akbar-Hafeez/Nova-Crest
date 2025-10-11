"use client";

import React from "react";
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
  const handleClick = () => {
    toast.success("Message sent !")
  }

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

        <form onSubmit={handleClick} className="space-y-4 mt-4">
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
              <Select >
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="🇦🇪 +971" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44</SelectItem>
                  <SelectItem value="+971">🇦🇪 +971</SelectItem>
                  <SelectItem value="+61">🇦🇺 +61</SelectItem>
                  <SelectItem value="+92">🇵🇰 +92</SelectItem>
                  <SelectItem value="+91">🇮🇳 +91</SelectItem>
                  <SelectItem value="+65">🇸🇬 +65</SelectItem>
                  <SelectItem value="+60">🇲🇾 +60</SelectItem>
                  <SelectItem value="+81">🇯🇵 +81</SelectItem>
                  <SelectItem value="+49">🇩🇪 +49</SelectItem>
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

          {/* Message */}
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required placeholder="Your message..." rows={4} />
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-2">
            <Checkbox id="marketing" />
            <Label
              htmlFor="marketing"
              className="text-sm text-muted-foreground"
            >
              I agree to receive updates and marketing emails.
            </Label>
          </div>

          {/* Submit Button */}
          <Button type="submit"  variant="secondary" className="w-full">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
