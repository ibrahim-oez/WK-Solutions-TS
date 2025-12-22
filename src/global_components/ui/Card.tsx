import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "hover";
  className?: string;
  aosAnimation?: string;
  aosDelay?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  aosAnimation,
  aosDelay,
}) => {
  const baseStyles = "rounded-2xl shadow-lg";

  const variants = {
    default: "bg-white border-2 border-gray-200 p-8",
    gradient: "bg-gradient-to-br from-blue-50 to-purple-50 p-12",
    hover:
      "bg-white border-2 border-gray-200 p-8 hover:shadow-xl hover:border-blue-300 transition-all group",
  };

  const aosProps = {
    ...(aosAnimation && { "data-aos": aosAnimation }),
    ...(aosDelay && { "data-aos-delay": aosDelay }),
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...aosProps}>
      {children}
    </div>
  );
};
