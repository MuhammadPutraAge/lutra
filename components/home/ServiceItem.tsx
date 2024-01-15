"use client";

import useScreen from "@/hooks/useScreen";
import { Briefcase, Building, LineChart, Link, LucideIcon } from "lucide-react";
import { useMemo } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: "briefcase" | "lineChart" | "link" | "building";
}

export default function ServiceItem({
  title,
  description,
  icon,
}: ServiceItemProps) {
  const { isLarge } = useScreen();

  const getIconSize = () => isLarge ? 32 : 24;

  const Icon = () => {
    switch (icon) {
      case "briefcase":
        return (
          <Briefcase size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />
        );
      case "lineChart":
        return (
          <LineChart size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />
        );
      case "link":
        return <Link size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />;
      case "building":
        return <Building size={getIconSize()} color="hsl(221.2 83.2% 53.3%)" />;
    }
  };

  return (
    <div className="flex gap-4 max-w-[500px]">
      <div className="flex justify-center items-center bg-accent w-12 lg:w-16 h-12 lg:h-16 rounded-xl lg:rounded-2xl">
        <Icon />
      </div>
      <div className="flex-1">
        <h3 className="text-foregorund text-sm md:text-base lg:text-lg font-medium mb-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs lg:text-sm ">
          {description}
        </p>
      </div>
    </div>
  );
}
