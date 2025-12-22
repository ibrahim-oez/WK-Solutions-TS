import React from "react";
import { Link } from "react-router";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  aosAnimation?: string;
  aosDelay?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  aosAnimation,
  aosDelay,
}) => {
  // Base styles
  const baseStyles = "inline-block font-medium transition-all rounded-full";

  // Variant styles
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900",
  };

  // Size styles
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  // Disabled styles
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  const aosProps = {
    ...(aosAnimation && { "data-aos": aosAnimation }),
    ...(aosDelay && { "data-aos-delay": aosDelay }),
  };

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...aosProps}
      >
        {children}
      </a>
    );
  }

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...aosProps}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      {...aosProps}
    >
      {children}
    </button>
  );
};
