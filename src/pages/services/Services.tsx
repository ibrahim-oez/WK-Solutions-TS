
import React from "react";
import geminiWebdesign from "../../global_assets/img/Gemini-Webdesign.jpg";
import geminiApps from "../../global_assets/img/gemini-apps.webp";
import WebsitePic5 from "../../global_assets/img/website-pic-5.jpg";
import WebsitePic6 from "../../global_assets/img/website-pic-6.jpg";
import { Accordion } from "../../global_components/Accordion";
import { Button, SectionHeading, GradientIcon } from "../../global_components/ui";
import { ServiceSection } from "../../global_components/ServiceSection";
import { FeatureCard } from "../../global_components/FeatureCard";
import { CTASection } from "../../global_components/CTASection";
import type { ReactNode } from "react";
import { HeroSection } from "../../global_components/HeroSection";


interface AccordionItem {
  title: string;
  content: ReactNode;
}

const faqItems: AccordionItem[] = [
  {
    title: "Wie läuft die IT-Beratung ab?",
    content:
      "Wir analysieren gemeinsam Ihre aktuelle Situation, definieren Ziele und entwickeln eine individuelle Lösung, die zu Ihrem Alltag passt.",
  },
  {
    title: "Welche Software unterstützen Sie?",
    content:
      "Ich helfe bei der Auswahl und Einrichtung von Office-Alternativen, Passwortmanagern, Cloudspeichern und weiteren digitalen Tools – stets auf Ihre Bedürfnisse abgestimmt.",
  },
  {
    title: "Kann ich meine Webseite später selbst bearbeiten?",
    content:
      "Ja, ich biete auf Wunsch Webseiten an, die Sie selbst einfach pflegen können, z.B. mit Content-Management-Systemen oder statischen Site-Generatoren.",
  },
  {
    title: "Bieten Sie auch Hosting an?",
    content:
      "Auf Wunsch hoste ich Ihre Webseite zuverlässig und kümmere mich um Updates und Sicherheit – damit Sie sich auf Ihr Business konzentrieren können.",
  },
  {
    title: "Wie läuft die Designberatung ab?",
    content:
      "Wir sprechen über Ihre Vorstellungen, Materialien und Formate. Ich übernehme das Design und organisiere bei Bedarf den Druck über Dienstleister.",
  },
];

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Header */}
      

      <HeroSection 
      titel="Ihre Herausforderungen. Unsere Lösungen." 
      untertitel="Für Unternehmen, Startups und Selbstständige biete ich umfassende IT- &
            Designlösungen. Privatpersonen unterstütze ich gezielt mit
            professioneller IT-Hilfe."/>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">

      {/* --- */}

      <div className="mt-20 space-y-20">
        {/* Abschnitt 1: Persönliche IT-Beratung */}
        <ServiceSection
          image={WebsitePic5}
          imageAlt="IT-Beratung"
          title="Persönliche IT-Beratung, die Sie versteht"
          description="Jeder Mensch und jedes Unternehmen ist anders. Ich helfe Ihnen,
            Programme, Geräte und Strategien zu finden, die wirklich zu Ihrem
            Alltag passen – egal ob Privatperson, Einzelunternehmer:in oder
            Team. Ohne Fachchinesisch, mit Klartext."
          imagePosition="left"
        />

        {/* Abschnitt 2: Hilfe bei Software, Apps & Geräten */}
        <ServiceSection
          image={geminiApps}
          imageAlt="Softwarehilfe"
          title="Hilfe bei Software, Apps & Geräten"
          description="Ich unterstütze Sie dabei, das richtige Setup für Ihre Arbeit zu
            finden. Ob alternative Office-Programme, E-Mail-Konfiguration,
            Passwortmanager oder Cloudspeicher – ich finde die Lösung, die zu
            Ihnen passt."
          imagePosition="right"
          aosDelay={100}
        />

        {/* Abschnitt 3: Webseiten für Ihren Geschäftserfolg */}
        <ServiceSection
          image={geminiWebdesign}
          imageAlt="Webentwicklung"
          title="Webseiten für Ihren Geschäftserfolg"
          description="Speziell für Selbstständige und kleine Teams entwickle ich
            Webseiten, die funktionieren – ob digitale Visitenkarte,
            Bewerbungsseite oder ein kleiner Webshop. Mobil optimiert, schnell
            geladen und auf Wunsch gehostet oder zur Selbstpflege vorbereitet"
          imagePosition="left"
          aosDelay={200}
        />

        {/* Abschnitt 4: Design & Printprodukte */}
        <ServiceSection
          image={WebsitePic6}
          imageAlt="Design und Druck"
          title="Design & Printprodukte für Ihren Auftritt"
          description="Ich gestalte Ihre Visitenkarten, Flyer oder Poster – auf Wunsch
            mit Materialberatung, Formatvorschlägen und Abwicklung über
            Dienste wie Vistaprint. Sie erhalten alles aus einer Hand und ohne
            Umwege."
          imagePosition="right"
          aosDelay={300}
        />
      </div>

      <hr className="my-16 border-blue-200" />

      {/* --- */}

      {/* Leistungs-Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Box 1: Strategische IT-Beratung */}
        <FeatureCard
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="Strategische IT-Beratung"
          description="Individuelle Analyse und Beratung zu Ihrer IT-Infrastruktur,
            Optimierung von Prozessen und smarten Investitionen."
          aosDelay={100}
        />

        {/* Box 2: Professionelle Webpräsenz */}
        <FeatureCard
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          }
          title="Professionelle Webpräsenz"
          description="Von der Konzeption bis zum Go-Live: Responsive Webseiten und
            zuverlässiges Hosting für Ihren starken Online-Auftritt."
          aosDelay={200}
        />

        {/* Box 3: Effiziente Software & Geräte */}
        <FeatureCard
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          title="Effiziente Software & Geräte"
          description="Wählen und richten Sie die perfekte Software und Hardware ein, die
            Ihren Arbeitsalltag digital vereinfacht."
          aosDelay={300}
        />

        {/* Box 4: Design & Printprodukte */}
        <FeatureCard
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          }
          title="Design & Printprodukte"
          description="Gestaltung von Visitenkarten, Flyern und mehr, inklusive
            Materialberatung und optionaler Druckabwicklung."
          aosDelay={400}
        />
      </div>

      {/* CTA Section */}
      <CTASection
        title="Bereit für Ihre digitale Transformation?"
        description="Vereinbaren Sie ein unverbindliches Beratungsgespräch und lassen Sie uns gemeinsam Ihre IT-Herausforderungen lösen."
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        className="mt-16"
      />

      {/* FAQ Section */}
      <section className="mt-20">
        <SectionHeading 
          title="Häufig gestellte Fragen"
        />
        <div data-aos="fade-up" data-aos-delay="200">
          <Accordion items={faqItems} />
        </div>
      </section>
    </div>
    </div>
  );
};
