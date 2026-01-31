interface HeroSectionProps {
  titel: string;
  untertitel: string;
}

export function HeroSection({ titel, untertitel }: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {titel}
        </h1>
        <p className="text-xl opacity-95">{untertitel}</p>
        <div
          className="w-24 h-1 bg-white mx-auto mt-8 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </div>
    </div>
  );
}
