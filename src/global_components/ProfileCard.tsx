import React, { type ReactNode } from "react";
import { Card } from "./ui";

interface ProfileCardProps {
  image: string;
  imageAlt: string;
  name?: string;
  title?: string;
  className?: string;
  children: ReactNode; // Flexible content area
  showGradientBorder?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  image,
  imageAlt,
  name,
  title,
  className = "",
  children,
  showGradientBorder = true
}) => {
  return (
    <Card className={`md:p-12 ${className}`} aosAnimation="fade-up">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          {showGradientBorder && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30"></div>
          )}
          <img
            src={image}
            alt={imageAlt}
            className="relative w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800"
          />
        </div>

        {(name || title) && (
          <div className="text-center">
            {name && (
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            )}
            {title && (
              <p className="text-lg text-gray-600 mt-2">{title}</p>
            )}
          </div>
        )}

        <div className="space-y-6 text-gray-700 max-w-3xl">
          {children}
        </div>
      </div>
    </Card>
  );
};