"use client";

import { useMemo } from "react";

interface ReasonItemProps {
  title: string;
  description: string;
  number: number;
}

export default function ReasonItem({
  title,
  description,
  number,
}: ReasonItemProps) {
  const numbering = useMemo(() => {
    if (number < 10) {
      return `0${number}`;
    }

    return String(number);
  }, [number]);

  return (
    <div className="flex gap-4 mb-6 last:mb-0">
      <p className="text-primary text-sm md:text-base lg:text-lg font-medium">{numbering}</p>
      <div className="flex-1">
        <h4 className="text-foreground text-sm md:text-base lg:text-lg font-medium">{title}</h4>
        <p className="text-muted-foreground text-xs md:text-sm">{description}</p>
      </div>
    </div>
  );
}
