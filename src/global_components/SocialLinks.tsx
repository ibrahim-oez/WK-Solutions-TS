import React from "react";

interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Path to SVG icon
}

interface SocialLinksProps {
  title?: string;
  links: SocialLink[];
  className?: string;
  aosDelay?: number;
  variant?: 'horizontal' | 'vertical';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  title,
  links,
  className = "",
  aosDelay = 0,
  variant = 'horizontal'
}) => {
  const containerClasses = variant === 'horizontal' 
    ? "flex justify-center space-x-6" 
    : "flex flex-col items-center space-y-4";

  return (
    <div className={`text-center ${className}`}>
      {title && (
        <p
          className="text-gray-600 mb-6 font-medium"
          data-aos="fade-up"
          data-aos-delay={aosDelay}
        >
          {title}
        </p>
      )}
      
      <div className={containerClasses}>
        {links.map((link, index) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-aos="fade-up"
            data-aos-delay={aosDelay + (index + 1) * 100}
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all border-2 border-gray-200 group-hover:border-blue-400">
              <img 
                src={link.icon} 
                alt={link.platform} 
                className="h-6 w-6" 
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};