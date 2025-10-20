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
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 ${
        hoverable ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
