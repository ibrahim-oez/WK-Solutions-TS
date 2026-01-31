import React from "react";

interface ServiceSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  aosDelay?: number;
  className?: string;
  imageShadow?: boolean;
  highlightWords?: string[];
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  image,
  imageAlt,
  title,
  description,
  imagePosition,
  aosDelay = 0,
  className = "",
  imageShadow = true,
  highlightWords = []
}) => {
  const isImageLeft = imagePosition === 'left';
  const flexDirection = isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse';
  const imageAos = isImageLeft ? 'fade-right' : 'fade-left';
  const textAos = isImageLeft ? 'fade-left' : 'fade-right';

  const renderHighlightedTitle = () => {
    if (highlightWords.length === 0) {
      return title;
    }

    let highlightedTitle = title;
    highlightWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlightedTitle = highlightedTitle.replace(
        regex,
        '<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">$1</span>'
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />;
  };

  return (
    <section
      className={`flex flex-col ${flexDirection} items-center gap-8 ${className}`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <img
        src={image}
        alt={imageAlt}
        className={`w-full md:w-1/2 rounded-xl ${imageShadow ? 'shadow-md' : ''}`}
        loading="eager"
        data-aos={imageAos}
        data-aos-delay={aosDelay + 100}
      />
      <div className="md:w-1/2">
        <h2
          className="text-2xl font-bold text-black mb-4"
          data-aos={textAos}
          data-aos-delay={aosDelay + 200}
        >
          {renderHighlightedTitle()}
        </h2>
        <p
          className="text-gray-700"
          data-aos={textAos}
          data-aos-delay={aosDelay + 300}
        >
          {description}
        </p>
      </div>
    </section>
  );
};