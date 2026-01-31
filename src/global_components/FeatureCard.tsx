import React, { type ReactNode } from "react";
import { Card } from "./ui";

interface FeatureCardProps {
  icon?: ReactNode;
  svgPath?: string; // For SVG path strings
  title: string;
  description: string;
  aosDelay?: number;
  variant?: 'default' | 'hover';
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  svgPath,
  title,
  description,
  aosDelay = 0,
  variant = 'hover',
  className = ""
}) => {
  const renderIcon = () => {
    const isColumnLayout = className.includes('flex-col');
    
    if (icon) {
      return isColumnLayout ? (
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      ) : (
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      );
    }
    
    if (svgPath) {
      return isColumnLayout ? (
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={svgPath}
            />
          </svg>
        </div>
      ) : (
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={svgPath}
            />
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <Card
      variant={variant}
      className={`${className.includes('flex-col') ? 'flex flex-col items-center text-center' : 'flex items-start'} p-6 ${className}`}
      aosAnimation="zoom-in"
      aosDelay={String(aosDelay)}
    >
      {renderIcon()}
      <div className={`flex-1 ${className.includes('flex-col') ? 'ml-0' : ''}`}>
        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </Card>
  );
};