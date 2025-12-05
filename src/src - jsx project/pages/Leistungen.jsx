
import geminiWebdesign from "../assets/img/compressed/Gemini-Webdesign.webp";
import geminiApps from "../assets/img/gemini-apps.webp";
import WebsitePic5 from "../assets/img/compressed/website-pic-5.webp";
import WebsitePic6 from "../assets/img/compressed/website-pic-6.webp";
import Accordion from "../components/Accordion"; // Annahme: Accordion-Komponente existiert

// Accordion items/texts (unverändert)
const faqItems = [
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

// pages/Leistungen.jsx
export function Leistungen() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      {/* Headings und Einleitungstext */}
      <h1
        className="text-3xl font-bold text-black mb-4 text-center"
        data-aos="fade-down" // Von oben herab gleiten
        data-aos-duration="1000"
      >
        Ihre Herausforderungen. Unsere Lösungen.
      </h1>

      <p
        className="text-gray-700 text-center max-w-2xl mx-auto"
        data-aos="fade-up" // Von unten hoch gleiten
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        Für Unternehmen, Startups und Selbstständige biete ich umfassende IT- &
        Designlösungen. Privatpersonen unterstütze ich gezielt mit
        professioneller IT-Hilfe. Verständlich, verlässlich und auf Augenhöhe.
      </p>

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

      <hr className="my-16" />

      {/* --- */}

      {/* Aktualisierte Boxen für eine kompakte Übersicht */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Box 1: Strategische IT-Beratung */}
        <div
          className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h2 className="text-xl font-semibold text-black mb-2">
            Strategische IT-Beratung
          </h2>
          <p className="text-gray-700">
            Individuelle Analyse und Beratung zu Ihrer IT-Infrastruktur,
            Optimierung von Prozessen und smarten Investitionen.
          </p>
        </div>

        {/* Box 2: Professionelle Webpräsenz */}
        <div
          className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h2 className="text-xl font-semibold text-black mb-2">
            Professionelle Webpräsenz
          </h2>
          <p className="text-gray-700">
            Von der Konzeption bis zum Go-Live: Responsive Webseiten und
            zuverlässiges Hosting für Ihren starken Online-Auftritt.
          </p>
        </div>

        {/* Box 3: Effiziente Software & Geräte */}
        <div
          className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-semibold text-black mb-2">
            Effiziente Software & Geräte
          </h2>
          <p className="text-gray-700">
            Wählen und richten Sie die perfekte Software und Hardware ein, die
            Ihren Arbeitsalltag digital vereinfacht.
          </p>
        </div>

        {/* Box 4: Design & Printprodukte */}
        <div
          className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h2 className="text-xl font-semibold text-black mb-2">
            Design & Printprodukte
          </h2>
          <p className="text-gray-700">
            Gestaltung von Visitenkarten, Flyern und mehr, inklusive
            Materialberatung und optionaler Druckabwicklung.
          </p>
        </div>
      </div>

      {/* --- */}

      <div className="w-full flex justify-center mt-8">
        <a
          href="/kontakt"
          className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition w-fit"
          data-aos="zoom-in" // Button animieren
          data-aos-delay="500"
        >
          Jetzt Termin vereinbaren
        </a>
      </div>
      <hr />
      <section>
        <h2
          className="text-3xl font-bold text-center mb-8 text-gray-600"
          data-aos="fade-up" // FAQ-Überschrift animieren
        >
          Ihre Fragen
        </h2>
        {/*
          Anmerkung: Die einzelnen Akkordion-Elemente sollten ihre Animationen
          innerhalb der Accordion-Komponente selbst erhalten, wenn gewünscht.
          Hier animieren wir nur den übergeordneten Container.
        */}
        <div data-aos="fade-up" data-aos-delay="200">
            <Accordion items={faqItems} />
        </div>
      </section>
    </div>
  );
}
