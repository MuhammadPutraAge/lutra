"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import useScreen from "@/hooks/useScreen";

export default function Footer() {
  const { isLarge, isMedium } = useScreen();

  return (
    <footer className="mt-16">
      {isMedium && (
        <>
          <Separator />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 px-8 md:px-32 py-16">
            <h3 className="text-foreground text-3xl font-medium">
              Feel free to get in touch with us
            </h3>

            <div className="flex gap-4">
              <MapPin size={32} color="hsl(221.2 83.2% 53.3%)" />
              <div>
                <h4 className="text-xl mb-1">Our Location</h4>
                <p className="text-muted-foreground">
                  401 Broadway, 24th Floor, Orchard Cloud View, London
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail size={32} color="hsl(221.2 83.2% 53.3%)" />
              <div>
                <h4 className="text-xl mb-1">How Can We Help?</h4>
                <p className="text-muted-foreground">info@yourdomain.com</p>
                <p className="text-muted-foreground">contact@yourdomain.com</p>
              </div>
            </div>
          </div>
        </>
      )}
      <Separator />
      <div className="flex justify-center lg:justify-between items-center px-8 md:px-32 py-8">
        {isLarge && <h2 className="text-4xl text-primary font-bold">lutra</h2>}
        <p className="text-muted-foreground text-xs lg:text-base">
          &copy; 2023 Lutra | All Rights Reserved
        </p>
        {isLarge && (
          <div className="flex gap-4">
            <Link href="/">
              <Facebook size={24} color="hsl(215.4 16.3% 46.9%)" />
            </Link>
            <Link href="/">
              <Twitter size={24} color="hsl(215.4 16.3% 46.9%)" />
            </Link>
            <Link href="/">
              <Instagram size={24} color="hsl(215.4 16.3% 46.9%)" />
            </Link>
            <Link href="/">
              <Linkedin size={24} color="hsl(215.4 16.3% 46.9%)" />
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}
