import React from "react";
import { Button, Card, SectionHeading } from "../../global_components/ui";
import XingIcon from "../../global_assets/img/xing.svg";
import InstagramIcon from "../../global_assets/img/insta.svg";
import LinkedinIcon from "../../global_assets/img/linkedin.svg";
import mePic from "../../global_assets/img/pic-me.png";

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Über mich
          </h1>
          <p className="text-xl opacity-95">IT-Lösungen mit Herz & Verstand</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8 rounded-full" data-aos="zoom-in" data-aos-delay="200" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

      {/* Profile Card */}
      <Card className="md:p-12" aosAnimation="fade-up">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30"></div>
            <img
              src={mePic}
              alt="Ibrahim Özdogan"
              className="relative w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
            />
          </div>

          <div className="space-y-6 text-gray-700 max-w-3xl">
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Ich heiße <strong className="text-gray-900">Ibrahim Özdogan</strong> und bin der Inhaber von{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WK Solutions</strong>, Ihrem IT-Serviceanbieter aus
              Bergneustadt.
            </p>
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              Seit vielen Jahren bin ich von der Welt der Technik fasziniert,
              einschließlich Computern und Netzwerken, Programmierung, Design und
              modernen Webtechnologien. Diese Passion motiviert mich, mein Wissen
              zu vergrößern und praktische Antworten auf digitale
              Herausforderungen zu entwickeln.
            </p>
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="500">
              Mit durchdachten IT-Konzepten, individueller Beratung und
              zuverlässigem Support helfe ich Einzelpersonen, kleinen Unternehmen,
              Freiberuflern und Vereinen.
            </p>
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="600">
              An der <strong className="text-gray-900">TH Köln</strong> studiere ich{" "}
              <strong className="text-gray-900">Medieninformatik</strong>. Ich erweitere dort mein Wissen
              in den Bereichen <strong className="text-gray-900">Webentwicklung, IT-Sicherheit, Design</strong>{" "}
              und <strong className="text-gray-900">Digitalisierung</strong> – Themen, die ich täglich bei
              WK Solutions einfließen lasse.
            </p>
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="700">
              Klare Kommunikation, ehrlicher Service und maßgeschneiderte,
              praxisnahe Lösungen stehen für mich im Mittelpunkt jeder
              Zusammenarbeit.
            </p>
          </div>
        </div>
      </Card>

      {/* Values Section */}
      <div>
        <SectionHeading 
          title="Was mir wichtig ist"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { text: "Klare Kommunikation & Ehrlichkeit", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
            { text: "Praktische, verständliche Lösungen", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { text: "Schnelle Reaktionszeiten", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { text: "Individuelle Betreuung statt 08/15", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
          ].map((item, i) => (
            <Card
              key={i}
              variant="hover"
              className="flex items-start p-6"
              aosAnimation="zoom-in"
              aosDelay={String(1000 + i * 100)}
            >
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
                    d={item.icon}
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">{item.text}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card variant="gradient" className="text-center" aosAnimation="fade-up" aosDelay="1400">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Lassen Sie uns zusammenarbeiten!
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Haben Sie ein Projekt im Kopf oder möchten Sie mehr über meine Services erfahren?
        </p>
        <Button
          to="/kontakt"
          variant="primary"
          size="lg"
          aosAnimation="zoom-in"
          aosDelay="1500"
        >
          Kontakt aufnehmen
        </Button>
      </Card>

      {/* Social Links */}
      <div className="text-center">
        <p className="text-gray-600 mb-6 font-medium" data-aos="fade-up" data-aos-delay="1600">
          Folgen Sie mir auf Social Media
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/wk_solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-aos="fade-up"
            data-aos-delay="1700"
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all border-2 border-gray-200 group-hover:border-blue-400">
              <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
            </div>
          </a>

          <a
            href="https://www.xing.com/profile/Ibrahim_Oezdogan2"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all border-2 border-gray-200 group-hover:border-blue-400">
              <img src={XingIcon} alt="Xing" className="h-6 w-6" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ibrahim-%C3%B6zdogan-77471a22b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-aos="fade-up"
            data-aos-delay="1900"
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all border-2 border-gray-200 group-hover:border-blue-400">
              <img src={LinkedinIcon} alt="LinkedIn" className="h-6 w-6" />
            </div>
          </a>
        </div>
      </div>
      

        <a
          href="https://www.linkedin.com/in/ibrahim-%C3%B6zdogan-77471a22b/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:underline mx-2"
          data-aos="fade-up"
          data-aos-delay="1600"
        ></a>
      </div>
    </div>
  );
}