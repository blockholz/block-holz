import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface HeroImageProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const HeroImage = ({ imgSrc, className, ...props }: HeroImageProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-50 overflow-hidden",
        className,
      )}
      {...props}
    >
      <img
        src="/imgs/website/phone-template-white-edges.webp"
        className="pointer-events-none z-50 select-none dark:hidden"
        alt="phone image white"
      />

      <img
        src="/imgs/website/phone-template-dark-edges.webp"
        className="pointer-events-none z-50 hidden select-none dark:flex"
        alt="phone image dark"
      />

      <div className="absolute inset-0 -z-10">
        <img
          className="min-h-full min-w-full object-cover"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default HeroImage;
