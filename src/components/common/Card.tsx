"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-wedding-border p-4 sm:p-6 ${
        hoverable
          ? "hover:shadow-lg hover:border-wedding-gold transition-all duration-300 cursor-pointer"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
