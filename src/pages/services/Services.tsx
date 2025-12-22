
import React from "react";
import geminiWebdesign from "../../global_assets/img/Gemini-Webdesign.jpg";
import geminiApps from "../../global_assets/img/gemini-apps.webp";
import WebsitePic5 from "../../global_assets/img/website-pic-5.jpg";
import WebsitePic6 from "../../global_assets/img/website-pic-6.jpg";
import { Accordion } from "../../global_components/Accordion";
import { Button, Card, SectionHeading, GradientIcon } from "../../global_components/ui";
import type { ReactNode } from "react";

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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Ihre Herausforderungen. Unsere Lösungen.
          </h1>
          <p
            className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Für Unternehmen, Startups und Selbstständige biete ich umfassende IT- &
            Designlösungen. Privatpersonen unterstütze ich gezielt mit
            professioneller IT-Hilfe.
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8 rounded-full" data-aos="zoom-in" data-aos-delay="400" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">

      {/* --- */}

      <div className="mt-20 space-y-20">
        {/* Abschnitt 1: Persönliche IT-Beratung */}
        <section
          className="flex flex-col md:flex-row items-center gap-8"
          data-aos="fade-up"
        >
          <img
            src={WebsitePic5}
            alt="IT-Beratung"
            className="w-full md:w-1/2 rounded-xl shadow-md"
            loading="eager"
            data-aos="fade-right" // Bild von rechts
            data-aos-delay="100"
          />
          <div className="md:w-1/2">
            <h2
              className="text-2xl font-bold text-black mb-4"
              data-aos="fade-left" // Text von links
              data-aos-delay="200"
            >
              Persönliche IT-Beratung, die Sie versteht
            </h2>
            <p
              className="text-gray-700"
              data-aos="fade-left" // Text von links
              data-aos-delay="300"
            >
              Jeder Mensch und jedes Unternehmen ist anders. Ich helfe Ihnen,
              Programme, Geräte und Strategien zu finden, die wirklich zu Ihrem
              Alltag passen – egal ob Privatperson, Einzelunternehmer:in oder
              Team. Ohne Fachchinesisch, mit Klartext.
            </p>
          </div>
        </section>

        {/* Abschnitt 2: Hilfe bei Software, Apps & Geräten – Bild rechts */}
        <section
          className="flex flex-col md:flex-row-reverse items-center gap-8"
          data-aos="fade-up"
        >
          <img
            src={geminiApps}
            alt="Softwarehilfe"
            className="w-full md:w-1/2 rounded-xl shadow-md"
            loading="eager"
            data-aos="fade-left" // Bild von links
            data-aos-delay="100"
          />
          <div className="md:w-1/2">
            <h2
              className="text-2xl font-bold text-black mb-4"
              data-aos="fade-right" // Text von rechts
              data-aos-delay="200"
            >
              Hilfe bei Software, Apps & Geräten
            </h2>
            <p
              className="text-gray-700"
              data-aos="fade-right" // Text von rechts
              data-aos-delay="300"
            >
              Ich unterstütze Sie dabei, das richtige Setup für Ihre Arbeit zu
              finden. Ob alternative Office-Programme, E-Mail-Konfiguration,
              Passwortmanager oder Cloudspeicher – ich finde die Lösung, die zu
              Ihnen passt.
            </p>
          </div>
        </section>

        {/* Abschnitt 3: Webseiten für Ihren Geschäftserfolg */}
        <section
          className="flex flex-col md:flex-row items-center gap-8"
          data-aos="fade-up"
        >
          <img
            src={geminiWebdesign}
            alt="Webentwicklung"
            className="w-full md:w-1/2 rounded-xl shadow-md"
            loading="eager"
            data-aos="fade-right" // Bild von rechts
            data-aos-delay="100"
          />
          <div className="md:w-1/2">
            <h2
              className="text-2xl font-bold text-black mb-4"
              data-aos="fade-left" // Text von links
              data-aos-delay="200"
            >
              Webseiten für Ihren Geschäftserfolg
            </h2>
            <p
              className="text-gray-700"
              data-aos="fade-left" // Text von links
              data-aos-delay="300"
            >
              Speziell für Selbstständige und kleine Teams entwickle ich
              Webseiten, die funktionieren – ob digitale Visitenkarte,
              Bewerbungsseite oder ein kleiner Webshop. Mobil optimiert, schnell
              geladen und auf Wunsch gehostet oder zur Selbstpflege vorbereitet
            </p>
          </div>
        </section>

        {/* Abschnitt 4: Design & Printprodukte – Bild rechts */}
        <section
          className="flex flex-col md:flex-row-reverse items-center gap-8"
          data-aos="fade-up"
        >
          <img
            src={WebsitePic6}
            alt="Design und Druck"
            className="w-full md:w-1/2 rounded-xl shadow-md"
            loading="eager"
            data-aos="fade-left" // Bild von links
            data-aos-delay="100"
          />
          <div className="md:w-1/2">
            <h2
              className="text-2xl font-bold text-black mb-4"
              data-aos="fade-right" // Text von rechts
              data-aos-delay="200"
            >
              Design & Printprodukte für Ihren Auftritt
            </h2>
            <p
              className="text-gray-700"
              data-aos="fade-right" // Text von rechts
              data-aos-delay="300"
            >
              Ich gestalte Ihre Visitenkarten, Flyer oder Poster – auf Wunsch
              mit Materialberatung, Formatvorschlägen und Abwicklung über
              Dienste wie Vistaprint. Sie erhalten alles aus einer Hand und ohne
              Umwege.
            </p>
          </div>
        </section>
      </div>

      <hr className="my-16 border-blue-200" />

      {/* --- */}

      {/* Leistungs-Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Box 1: Strategische IT-Beratung */}
        <Card variant="hover" aosAnimation="zoom-in" aosDelay="100">
          <GradientIcon>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </GradientIcon>
          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-4">
            Strategische IT-Beratung
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Individuelle Analyse und Beratung zu Ihrer IT-Infrastruktur,
            Optimierung von Prozessen und smarten Investitionen.
          </p>
        </Card>

        {/* Box 2: Professionelle Webpräsenz */}
        <Card variant="hover" aosAnimation="zoom-in" aosDelay="200">
          <GradientIcon>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </GradientIcon>
          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-4">
            Professionelle Webpräsenz
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Von der Konzeption bis zum Go-Live: Responsive Webseiten und
            zuverlässiges Hosting für Ihren starken Online-Auftritt.
          </p>
        </Card>

        {/* Box 3: Effiziente Software & Geräte */}
        <Card variant="hover" aosAnimation="zoom-in" aosDelay="300">
          <GradientIcon>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </GradientIcon>
          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-4">
            Effiziente Software & Geräte
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Wählen und richten Sie die perfekte Software und Hardware ein, die
            Ihren Arbeitsalltag digital vereinfacht.
          </p>
        </Card>

        {/* Box 4: Design & Printprodukte */}
        <Card variant="hover" aosAnimation="zoom-in" aosDelay="400">
          <GradientIcon>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </GradientIcon>
          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-4">
            Design & Printprodukte
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Gestaltung von Visitenkarten, Flyern und mehr, inklusive
            Materialberatung und optionaler Druckabwicklung.
          </p>
        </Card>
      </div>

      {/* CTA Section */}
      <Card variant="gradient" className="text-center mt-16" aosAnimation="fade-up">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Bereit für Ihre digitale Transformation?
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Vereinbaren Sie ein unverbindliches Beratungsgespräch und lassen Sie uns gemeinsam Ihre IT-Herausforderungen lösen.
        </p>
        <Button
          to="/kontakt"
          variant="primary"
          size="lg"
          aosAnimation="zoom-in"
          aosDelay="200"
        >
          Jetzt Termin vereinbaren
        </Button>
      </Card>

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
