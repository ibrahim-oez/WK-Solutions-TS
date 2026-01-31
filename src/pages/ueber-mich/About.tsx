import React from "react";
import { SectionHeading } from "../../global_components/ui";
import { ProfileCard } from "../../global_components/ProfileCard";
import { FeatureCard } from "../../global_components/FeatureCard";
import { CTASection } from "../../global_components/CTASection";
import { SocialLinks } from "../../global_components/SocialLinks";
import XingIcon from "../../global_assets/img/xing.svg";
import InstagramIcon from "../../global_assets/img/insta.svg";
import LinkedinIcon from "../../global_assets/img/linkedin.svg";
import mePic from "../../global_assets/img/pic-me.png";
import { HeroSection } from "../../global_components/HeroSection";

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <HeroSection
        titel="Über mich"
        untertitel="IT-Lösungen mit Herz & Verstand"
      />

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Profile Card */}
        <ProfileCard
          image={mePic}
          imageAlt="Ibrahim Özdogan"
        >
          <p
            className="text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Ich heiße{" "}
            <strong className="text-gray-900">Ibrahim Özdogan</strong> und
            bin der Inhaber von{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              WK Solutions
            </strong>
            , Ihrem IT-Serviceanbieter aus Bergneustadt.
          </p>
          <p
            className="text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Seit vielen Jahren bin ich von der Welt der Technik fasziniert,
            einschließlich Computern und Netzwerken, Programmierung, Design
            und modernen Webtechnologien. Diese Passion motiviert mich, mein
            Wissen zu vergrößern und praktische Antworten auf digitale
            Herausforderungen zu entwickeln.
          </p>
          <p
            className="text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Mit durchdachten IT-Konzepten, individueller Beratung und
            zuverlässigem Support helfe ich Einzelpersonen, kleinen
            Unternehmen, Freiberuflern und Vereinen.
          </p>
          <p
            className="text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            An der <strong className="text-gray-900">TH Köln</strong>{" "}
            studiere ich{" "}
            <strong className="text-gray-900">Medieninformatik</strong>. Ich
            erweitere dort mein Wissen in den Bereichen{" "}
            <strong className="text-gray-900">
              Webentwicklung, IT-Sicherheit, Design
            </strong>{" "}
            und <strong className="text-gray-900">Digitalisierung</strong> –
            Themen, die ich täglich bei WK Solutions einfließen lasse.
          </p>
          <p
            className="text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Klare Kommunikation, ehrlicher Service und maßgeschneiderte,
            praxisnahe Lösungen stehen für mich im Mittelpunkt jeder
            Zusammenarbeit.
          </p>
        </ProfileCard>

        {/* Values Section */}
        <div>
          <SectionHeading title="Was mir wichtig ist" />

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              svgPath="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              title="Klare Kommunikation & Ehrlichkeit"
              description="Transparente Kommunikation und ehrliche Beratung stehen bei mir an erster Stelle."
              aosDelay={1000}
            />
            <FeatureCard
              svgPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              title="Praktische, verständliche Lösungen"
              description="Ich entwickle IT-Lösungen, die wirklich funktionieren und leicht zu verstehen sind."
              aosDelay={1100}
            />
            <FeatureCard
              svgPath="M13 10V3L4 14h7v7l9-11h-7z"
              title="Schnelle Reaktionszeiten"
              description="Bei akuten IT-Problemen bin ich schnell zur Stelle und löse diese effizient."
              aosDelay={1200}
            />
            <FeatureCard
              svgPath="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              title="Individuelle Betreuung statt 08/15"
              description="Jeder Kunde ist einzigartig und bekommt eine maßgeschneiderte Lösung."
              aosDelay={1300}
            />
          </div>
        </div>

        {/* CTA Section */}
        <CTASection
          title="Lassen Sie uns zusammenarbeiten!"
          description="Haben Sie ein Projekt im Kopf oder möchten Sie mehr über meine Services erfahren?"
          buttonText="Kontakt aufnehmen"
          buttonLink="/kontakt"
          aosDelay={1400}
        />

        {/* Social Links */}
        <SocialLinks
          title="Folgen Sie mir auf Social Media"
          links={[
            {
              platform: "Instagram",
              url: "https://www.instagram.com/wk_solutions/",
              icon: InstagramIcon
            },
            {
              platform: "Xing", 
              url: "https://www.xing.com/profile/Ibrahim_Oezdogan2",
              icon: XingIcon
            },
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/ibrahim-%C3%B6zdogan-77471a22b/",
              icon: LinkedinIcon
            }
          ]}
          aosDelay={1600}
        />
      </div>
    </div>
  );
};
