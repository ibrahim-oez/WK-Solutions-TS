import React from "react";
import {
  Zap,
  ShieldCheck,
  Timer,
  HandCoins,
  Handshake,
  BadgeCheck,
} from "lucide-react";
import { Button, SectionHeading } from "../../global_components/ui";
import { ServiceSection } from "../../global_components/ServiceSection";
import { FeatureCard } from "../../global_components/FeatureCard";
import { CTASection } from "../../global_components/CTASection";
import { TrustBadges } from "../../global_components/TrustBadges";
import { SocialLinks } from "../../global_components/SocialLinks";
import { ProfileCard } from "../../global_components/ProfileCard";
import geminiSupport from "../../global_assets/img/Gemini-Support.jpg";
import geminiWebdesign from "../../global_assets/img/Gemini-Webdesign.jpg";
import pexels2 from "../../global_assets/img/pexels-fauxels-3184418.jpg";
import pexels3 from "../../global_assets/img/pexels-fauxels-3184465.jpg";
import heroPic from "../../global_assets/img/compressed/hero-pic.webp";
import picMe from "../../global_assets/img/pic-me.png";
import XingIcon from "../../global_assets/img/xing.svg";
import InstagramIcon from "../../global_assets/img/insta.svg";
import LinkedinIcon from "../../global_assets/img/linkedin.svg";

export const Home: React.FC = () => {


  return (
    <div className="space-y-24">
      {/* Hero Section mit Text im Bild */}
      <section className="relative h-[80vh] bg-black">
        <img
          src={heroPic}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mx-auto"
          fetchPriority="high"
          loading="eager"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-md italic"
            data-aos="fade-up" // Sanft von unten einblenden
            data-aos-duration="1000"
          >
            IT-Lösungen, die mehr können
          </h1>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-6 drop-shadow-md"
            data-aos="fade-up" // Sanft von unten einblenden
            data-aos-delay="200" // Leicht verzögert
            data-aos-duration="1000"
          >
            Für Unternehmen, Selbstständige & Privatpersonen mit Anspruch
          </h2>
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl drop-shadow-md"
            data-aos="fade-up" // Sanft von unten einblenden
            data-aos-delay="400" // Etwas mehr verzögert
            data-aos-duration="1000"
          >
            Maßgeschneiderte IT-Lösungen, persönlicher Service und nachhaltige
            Unterstützung – für Ihren digitalen Komfort.
          </p>
          <Button
            to="/kontakt"
            variant="primary"
            size="md"
            aosAnimation="zoom-in"
            aosDelay="600"
          >
            Jetzt Kontakt aufnehmen
          </Button>

          {/* Trust Badges */}
          <TrustBadges
            className="mt-12 pt-8 border-t border-white/20"
            aosDelay={800}
            badges={[
              {
                icon: (
                  <svg className="w-6 h-6 " viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                ),
                text: "Google Bewertungen",
                subText: "★★★★★",
                link: "https://share.google/KHl7rdZDLZ7oBVBmK"
              },
              {
                icon: <BadgeCheck className="w-6 h-6 text-blue-300" />,
                text: "TH Köln Student"
              },
              {
                icon: <Handshake className="w-5 h-5 text-green-300" />,
                text: "Lokal in Bergneustadt"
              }
            ]}
          />
        </div>
      </section>

      {/* --- */}

      {/* Leistungen Section */}
      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Unsere Schwerpunkte"
          showLine={true}
          className="mb-12"
        />
        <div className="space-y-16">
          <ServiceSection
            image={geminiSupport}
            imageAlt="IT-Beratung"
            title="IT-Beratung & Support"
            description="Wir analysieren Ihre IT-Herausforderungen genau und setzen
              individuelle Lösungen um – damit Ihr Unternehmen digital
              effizienter und sicherer wird."
            imagePosition="left"
          />

          <ServiceSection
            image={geminiWebdesign}
            imageAlt="Webentwicklung"
            title="Webentwicklung & Digitalisierung"
            description="Ihre digitale Visitenkarte – professionell, klar und auf den
              Punkt. Wir setzen Ihre Stärken online in Szene."
            imagePosition="right"
            aosDelay={100}
          />
        </div>
        <div className="mt-10 text-right" data-aos="fade-up" data-aos-delay="400">
          <a
            href="/leistungen"
            className="text-blue-600 font-medium hover:underline"
          >
            Mehr erfahren →
          </a>
        </div>
      </section>

      {/* --- */}

      {/* Warum WK Solutions? */}
      <section className="bg-white py-24 border-t border-gray-400">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading 
            title="Warum WK Solutions?"
            showLine={true}
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<BadgeCheck className="w-5 h-5 text-white" />}
              title="Ehrliche Beratung"
              description="Individuelle IT-Lösungen statt Standardware – wir empfehlen nur,
                was wirklich zu Ihrem Unternehmen und Ihren Zielen passt."
              aosDelay={100}
              variant="default"
              className="flex-col items-center text-center"
            />
            <FeatureCard
              icon={<Handshake className="w-5 h-5 text-white" />}
              title="Direkter Kontakt"
              description="Sie sprechen direkt mit dem IT-Experten – ohne langes Suchen,
                persönlich und auf direktem Weg."
              aosDelay={200}
              variant="default"
              className="flex-col items-center text-center"
            />
            <FeatureCard
              icon={<HandCoins className="w-5 h-5 text-white" />}
              title="Faire Preise"
              description="Transparente Preise, die sich an Ihren Anforderungen orientieren
                – passend für Unternehmen jeder Größe und Privatpersonen."
              aosDelay={300}
              variant="default"
              className="flex-col items-center text-center"
            />
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Vorteile */}
      <section className="bg-gray-200 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading 
            title="Ihre Vorteile mit WK Solutions"
            showLine={true}
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Zap className="w-5 h-5 text-white" />}
              title="Schnell"
              description="Durch Fernwartung und ein einfaches Buchungssystem sind wir oft
                schon in wenigen Minuten für Sie da."
              aosDelay={100}
              variant="default"
              className="flex-col items-center text-center"
            />
            <FeatureCard
              icon={<ShieldCheck className="w-5 h-5 text-white" />}
              title="Zuverlässig"
              description="Individuelle IT-Lösungen, die funktionieren – sicher, stabil und
                langfristig durchdacht."
              aosDelay={200}
              variant="default"
              className="flex-col items-center text-center"
            />
            <FeatureCard
              icon={<Timer className="w-5 h-5 text-white" />}
              title="Effizient"
              description="Klare Kommunikation, transparente Abrechnung – keine versteckten
                Kosten, keine Überraschungen."
              aosDelay={300}
              variant="default"
              className="flex-col items-center text-center"
            />
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Über uns */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ProfileCard
            image={picMe}
            imageAlt="Portrait"
            showGradientBorder={false}
            className="text-center p-0"
          >
            <h2
              className="text-3xl font-semibold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Wer steht hinter WK Solutions?
            </h2>
            <p
              className="text-lg text-gray-700 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Von der ersten Idee bis zum laufenden System – ich unterstütze
              kleine Unternehmen, Startups und Privatpersonen mit unkomplizierter,
              ehrlicher IT-Hilfe.
            </p>
            <Button
              to="/ueber-mich"
              variant="primary"
              size="md"
              aosAnimation="fade-up"
              aosDelay="400"
            >
              Mehr über mich erfahren
            </Button>
          </ProfileCard>
        </div>
      </section>

      {/* --- */}

      {/* Partnerschaftsanfragen */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Bildbereich */}
          <div className="lg:w-1/2">
            <img
              src={pexels2}
              alt="Partnerschaft"
              className="w-full rounded-lg shadow-md object-cover max-h-[400px]"
              fetchPriority="high"
              loading="eager"
              data-aos="fade-right" // Bild von rechts einfliegen
            />
          </div>

          {/* Textbereich */}
          <div className=" lg:w-1/2 text-center lg:text-left">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-6"
              data-aos="fade-left"
            >
              Interesse an einer Zusammenarbeit?
            </h2>
            <p
              className="text-lg text-gray-700 mb-8"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Ob als Freelancer, Agentur oder Tech-Startup – wenn Sie an einer
              Zusammenarbeit interessiert sind, freue ich mich auf Ihre
              Nachricht. Gemeinsam können wir mehr bewegen und die Zukunft
              besser gestalten.
            </p>
            <Button
              to="/kontakt"
              variant="primary"
              size="md"
              aosAnimation="zoom-in"
              aosDelay="400"
            >
              Anfragen
            </Button>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Textbereich */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-4"
              data-aos="fade-right"
            >
              Bereit für Ihre digitale Zukunft?
            </h2>
            <p
              className="text-lg text-gray-700 mb-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Vereinbaren Sie ein unverbindliches Beratungsgespräch und lassen
              Sie uns gemeinsam starten.
            </p>
            <Button
              to="/kontakt"
              variant="primary"
              size="md"
              aosAnimation="zoom-in"
              aosDelay="400"
            >
              Jetzt Termin vereinbaren
            </Button>
          </div>

          {/* Bildbereich */}
          <div className="lg:w-1/2">
            <img
              className="w-full rounded-lg shadow-md object-cover max-h-[400px]"
              src={pexels3}
              alt="Geschäft"
              fetchPriority="high"
              loading="eager"
              data-aos="fade-left" // Bild von links einfliegen
            />
          </div>
        </div>
      </section>

      {/* Schnellkontakt */}
      <CTASection
        title="Sie haben ein akutes IT-Problem oder möchten sich beraten lassen?"
        description=""
        buttonText="Jetzt unverbindlich anfragen"
        buttonLink="/kontakt"
        variant="standard"
        className="bg-gradient-to-r from-blue-50 to-purple-50 py-24 text-center"
        buttonVariant="primary"
        buttonSize="md"
        aosDelay={200}
      />
    </div>
  );
}