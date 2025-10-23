"use client";

import { classNames } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  className,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-wedding-dark text-white hover:bg-gray-800 focus:ring-wedding-dark",
    secondary:
      "bg-wedding-light text-wedding-dark hover:bg-wedding-border focus:ring-wedding-gold",
    outline:
      "border-2 border-wedding-gold text-wedding-gold hover:bg-yellow-50 focus:ring-wedding-gold",
  };

  const sizeStyles = {
    sm: "px-3 sm:px-4 py-2 text-xs sm:text-sm",
    md: "px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
