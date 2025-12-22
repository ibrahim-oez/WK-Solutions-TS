import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  showLine?: boolean;
  className?: string;
  aosAnimation?: string;
  aosDelay?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = "center",
  showLine = true,
  className = "",
  aosAnimation = "fade-up",
  aosDelay,
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[alignment]} ${className}`}>
      <h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        data-aos={aosAnimation}
        {...(aosDelay && { "data-aos-delay": aosDelay })}
      >
        {title}
      </h2>
      {showLine && (
        <div
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
          data-aos="zoom-in"
          data-aos-delay={aosDelay ? String(Number(aosDelay) + 100) : "100"}
        />
      )}
      {subtitle && (
        <p
          className="text-lg text-gray-600 max-w-2xl"
          data-aos={aosAnimation}
          data-aos-delay={aosDelay ? String(Number(aosDelay) + 200) : "200"}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
