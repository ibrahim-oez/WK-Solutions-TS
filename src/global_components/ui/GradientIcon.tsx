import React from "react";

interface GradientIconProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const GradientIcon: React.FC<GradientIconProps> = ({
  children,
  size = "md",
  className = "",
}) => {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div
      className={`${sizes[size]} bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${className}`}
    >
      {children}
    </div>
  );
};
