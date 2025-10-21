'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = false }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-[#2a2a2a] rounded-lg shadow-md border border-[#e0e0e0] dark:border-[#555555] p-6 ${
        hoverable ? 'hover:shadow-lg hover:border-[#d4af37] transition-all duration-300 cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
