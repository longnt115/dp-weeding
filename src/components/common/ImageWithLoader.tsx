"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithLoaderProps extends ImageProps {
  showLoader?: boolean;
}

export default function ImageWithLoader({
  showLoader = true,
  className = "",
  ...props
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {showLoader && isLoading && (
        <div className="absolute inset-0 image-loading-shimmer rounded-inherit">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-3 sm:border-4 border-gray-300 border-t-wedding-gold rounded-full animate-spin" />
          </div>
        </div>
      )}
      <Image
        {...props}
        alt={props.alt || ""}
        className={`${className} transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
