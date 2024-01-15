import Link from "next/link";
import React from "react";

interface NavItemProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

export default function NavItem({ title, href, children }: NavItemProps) {
  return (
    <div className="p-2 rounded-lg hover:bg-muted">
      <Link href={href}>
        <h3 className="text-foreground font-medium">{title}</h3>
        <p className="text-muted-foreground text-sm">{children}</p>
      </Link>
    </div>
  );
}
