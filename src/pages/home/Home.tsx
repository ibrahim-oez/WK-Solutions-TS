import React from "react";
import {
  Zap,
  ShieldCheck,
  Timer,
  HandCoins,
  Handshake,
  BadgeCheck,
} from "lucide-react";
import geminiSupport from "../../global_assets/img/Gemini-Support.jpg";
import geminiWebdesign from "../../global_assets/img/Gemini-Webdesign.jpg";
import pexels2 from "../../global_assets/img/pexels-fauxels-3184418.jpg";
import pexels3 from "../../global_assets/img/pexels-fauxels-3184465.jpg";
import heroPic from "../../global_assets/img/compressed/hero-pic.webp";
import picMe from "../../global_assets/img/pic-me.png";

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
          <a
            href="/kontakt"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition"
            data-aos="zoom-in" // Button leicht zoomen
            data-aos-delay="600" // Stark verzögert, als letztes Element
            data-aos-duration="800"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* --- */}

      {/* Leistungen Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl font-semibold mb-12 text-center text-gray-900"
          data-aos="fade-up"
        >
          Unsere Schwerpunkte
        </h2>
        <div className="space-y-16">
          <div className="md:flex items-center gap-10">
            <img
              src={geminiSupport}
              alt="IT-Beratung"
              className="md:w-1/2 rounded-lg shadow-md"
              fetchPriority="high"
              loading="eager"
              data-aos="fade-right" // Bild von rechts einfliegen
            />
            <div className="md:w-1/2 mt-6 md:mt-0">
              <h3
                className="text-2xl font-bold text-gray-900 mb-3"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                IT-Beratung & Support
              </h3>
              <p
                className="text-gray-700 text-lg"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Wir analysieren Ihre IT-Herausforderungen genau und setzen
                individuelle Lösungen um – damit Ihr Unternehmen digital
                effizienter und sicherer wird.
              </p>
            </div>
          </div>

          <div className="md:flex items-center gap-10 flex-row-reverse">
            <img
              src={geminiWebdesign}
              alt="Webentwicklung"
              className="w-full md:w-1/2 rounded-lg shadow-md"
              fetchPriority="high"
              loading="eager"
              data-aos="fade-left" // Bild von links einfliegen
            />
            <div className="md:w-1/2 mt-6 md:mt-0">
              <h3
                className="text-2xl font-bold text-gray-900 mb-3"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Webentwicklung & Digitalisierung
              </h3>
              <p
                className="text-gray-700 text-lg"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Ihre digitale Visitenkarte – professionell, klar und auf den
                Punkt. Wir setzen Ihre Stärken online in Szene.
              </p>
            </div>
          </div>
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
      <section className="bg-white py-24 border-t">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-semibold text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Warum WK Solutions?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-bold text-lg text-gray-900 mb-2 display-flex items-center gap-2">
                Ehrliche Beratung
                <BadgeCheck className="inline-block w-5 h-5 text-blue-600 ml-2 align-middle" />
              </h3>
              <p className="text-gray-700">
                Individuelle IT-Lösungen statt Standardware – wir empfehlen nur,
                was wirklich zu Ihrem Unternehmen und Ihren Zielen passt.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Direkter Kontakt
                <Handshake className="inline-block w-5 h-5 text-blue-600 ml-2 align-middle" />
              </h3>
              <p className="text-gray-700">
                Sie sprechen direkt mit dem IT-Experten – ohne langes Suchen,
                persönlich und auf direktem Weg.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Faire Preise
                <HandCoins className="inline-block w-5 h-5 text-blue-600 ml-2 align-middle" />
              </h3>
              <p className="text-gray-700">
                Transparente Preise, die sich an Ihren Anforderungen orientieren
                – passend für Unternehmen jeder Größe und Privatpersonen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Vorteile */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-semibold text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Ihre Vorteile mit WK Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schnell</h3>
              <p className="text-gray-700 text-center">
                Durch Fernwartung und ein einfaches Buchungssystem sind wir oft
                schon in wenigen Minuten für Sie da.
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Zuverlässig
              </h3>
              <p className="text-gray-700 text-center">
                Individuelle IT-Lösungen, die funktionieren – sicher, stabil und
                langfristig durchdacht.
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
              <Timer className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Effizient
              </h3>
              <p className="text-gray-700 text-center">
                Klare Kommunikation, transparente Abrechnung – keine versteckten
                Kosten, keine Überraschungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Über uns */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img
            src={picMe}
            alt="Portrait"
            className="mx-auto rounded-full w-32 h-32 object-cover mb-6 shadow-lg"
            fetchPriority="high"
            loading="eager"
            data-aos="fade-in" // Bild sanft einblenden
            data-aos-duration="1000"
          />
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
          <a
            href="/ueber-mich"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Mehr über mich erfahren
          </a>
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
            <a
              href="/kontakt"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Anfragen
            </a>
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
            <a
              href="/kontakt"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Jetzt Termin vereinbaren
            </a>
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
      <section id="toBottom" className="bg-gradient-to-r from-blue-50 to-purple-50 py-24  text-center">
        <p
          className="text-xl font-semibold mb-3"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Sie haben ein akutes IT-Problem oder möchten sich beraten lassen?
        </p>
        <a
          href="/kontakt"
          className="inline-block  bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition hover:shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          Jetzt unverbindlich anfragen
        </a>
      </section>
    </div>
  );
}