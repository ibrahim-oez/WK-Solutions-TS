import React, { type ReactNode } from "react";

interface Badge {
  icon: ReactNode;
  text: string;
  link?: string;
  subText?: string;
}

interface TrustBadgesProps {
  badges: Badge[];
  className?: string;
  aosDelay?: number;
  title?: string;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({
  badges,
  className = "",
  aosDelay = 0,
  title
}) => {
  return (
    <div 
      className={`flex flex-wrap justify-center items-center gap-6 ${className}`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      data-aos-duration="1000"
    >
      {title && (
        <p className="w-full text-center text-white/90 mb-4">{title}</p>
      )}
      
      {badges.map((badge, index) => {
        const content = (
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all group">
            {badge.icon}
            <div className="text-left">
              {badge.subText && (
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">{badge.subText}</span>
                </div>
              )}
              <span className="text-sm text-white/90">{badge.text}</span>
            </div>
          </div>
        );

        if (badge.link) {
          return (
            <a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {content}
            </a>
          );
        }

        return (
          <div key={index}>
            {content}
          </div>
        );
      })}
    </div>
  );
};