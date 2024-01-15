"use client";

import useScreen from "@/hooks/useScreen";
import {
  Dribbble,
  Facebook,
  Figma,
  Framer,
  Github,
  Gitlab,
} from "lucide-react";

interface PartnerItemProps {
  icon: "dribbble" | "facebook" | "figma" | "framer" | "github" | "gitlab";
}

export default function PartnerItem({ icon }: PartnerItemProps) {
  const { isLarge, isMedium } = useScreen();

  const getIconSize = () => {
    if (isLarge) return 64;
    if (isMedium) return 42;

    return 32;
  };

  const Icon = () => {
    switch (icon) {
      case "dribbble":
        return <Dribbble size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />;
      case "facebook":
        return <Facebook size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />;
      case "figma":
        return <Figma size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />;
      case "framer":
        return <Framer size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />;
      case "github":
        return <Github size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />;
      case "gitlab":
        return <Gitlab size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />;
    }
  };

  return (
    <div className="bg-accent w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 flex justify-center items-center rounded-2xl">
      <Icon />
    </div>
  );
}
