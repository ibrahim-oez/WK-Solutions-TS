import React, { useState } from "react";
import { KontaktFormular } from "./components/KontaktFormular";
import { CheckboxGroup } from "../../global_components/CheckboxGroup";
import { HeroSection } from "../../global_components/HeroSection";
import GoogleMeetIcon from "../../global_assets/img/google-meet.svg";

export const Contact: React.FC = () => {
  const [allCheckboxesAccepted, setAllCheckboxesAccepted] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <HeroSection
        titel="Kontakt"
        untertitel="Lassen Sie uns gemeinsam Ihre IT-Herausforderungen lösen"
      />
      
      <div className="max-w-3xl mx-auto px-4 py-16">
      
      {/* Kontaktformular */}
      <KontaktFormular />

      <div className="max-w-xl mx-auto px-4 py-16">
        <h2
          className="text-xl font-semibold mb-2"
        >
          Unverbindliches Erstgespräch buchen
        </h2>
        <p
          className="mb-4"
        >
          Sie möchten gerne ein unverbindliches Gespräch vereinbaren? Nutzen Sie
          die Möglichkeit, über <strong>Google Meet</strong> einen Termin mit
          mir zu buchen. Einfach, flexibel und ohne Verpflichtungen – ganz ohne
          Wartezeiten.
        </p>

        <div
          className="text-sm text-gray-600 mb-4"
        >
          <p>
            Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage
            verwendet. Weitere Informationen finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-blue-600 underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>

        <CheckboxGroup
          checkboxes={[
            {
              id: "datenschutz",
              label: (
                <>
                  Ich akzeptiere die{" "}
                  <a href="/datenschutz" className="text-blue-600 underline">
                    Datenschutzerklärung
                  </a>
                  .
                </>
              ),
              required: true
            },
            {
              id: "widerruf",
              label: (
                <>
                  Ich habe die{" "}
                  <a
                    href="/widerrufsrecht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Widerrufsbelehrung
                  </a>{" "}
                  gelesen und zur Kenntnis genommen. Ich bin einverstanden und
                  verlange ausdrücklich, dass Sie mit der Ausführung der gebuchten
                  Dienstleistung vor Ablauf der Widerrufsfrist beginnen. Mir ist
                  bekannt, dass mein Widerrufsrecht erlischt, sobald die
                  Dienstleistung vollständig erbracht wurde.
                </>
              ),
              required: true
            }
          ]}
          onAllChecked={setAllCheckboxesAccepted}
        />

        <a
          href={allCheckboxesAccepted ? "https://calendar.app.google/HeZENKhjYyeWGJ6P9" : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-6 py-3 rounded-lg transition font-medium ${
            allCheckboxesAccepted
              ? "bg-blue-700 text-white hover:bg-yellow-500 hover:text-black"
              : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
          }`}
        >
          <span>Jetzt Termin buchen</span>
          <img src={GoogleMeetIcon} alt="Google Meet" className="w-5 h-5 ml-3" />
        </a>
      </div>
    </div>
  </div>
  );
};