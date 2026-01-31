import React from "react";
import { Button, Card } from "./ui";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'gradient' | 'default' | 'background-image';
  backgroundImage?: string;
  className?: string;
  aosDelay?: number;
  buttonVariant?: 'primary' | 'secondary';
  buttonSize?: 'sm' | 'md' | 'lg';
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'gradient',
  backgroundImage,
  className = "",
  aosDelay = 0,
  buttonVariant = 'primary',
  buttonSize = 'lg'
}) => {
  if (variant === 'background-image' && backgroundImage) {
    return (
      <section className={`py-24 ${className}`}>
        <div 
          className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12"
          data-aos="fade-up"
          data-aos-delay={aosDelay}
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-4"
              data-aos="fade-right"
              data-aos-delay={aosDelay + 100}
            >
              {title}
            </h2>
            <p
              className="text-lg text-gray-700 mb-6"
              data-aos="fade-right"
              data-aos-delay={aosDelay + 200}
            >
              {description}
            </p>
            <Button
              to={buttonLink}
              variant={buttonVariant}
              size={buttonSize}
              aosAnimation="zoom-in"
              aosDelay={String(aosDelay + 300)}
            >
              {buttonText}
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img
              src={backgroundImage}
              alt=""
              className="w-full rounded-lg shadow-md object-cover max-h-[400px]"
              data-aos="fade-left"
              data-aos-delay={aosDelay + 100}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <Card
      variant={variant === 'background-image' ? 'default' : variant}
      className={`text-center ${className}`}
      aosAnimation="fade-up"
      aosDelay={String(aosDelay)}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
      <Button
        to={buttonLink}
        variant={buttonVariant}
        size={buttonSize}
        aosAnimation="zoom-in"
        aosDelay={String(aosDelay + 200)}
      >
        {buttonText}
      </Button>
    </Card>
  );
};