import { useState, useEffect } from "react"; // <-- useEffect hier importieren, da wir ihn lokal nutzen
import { KontaktFormular } from "../components/KontaktFormular";
import GoogleMeetIcon from "../assets/img/google-meet.svg";

export function Kontakt() {
  const [akzeptiert1, setAkzeptiert1] = useState(false);
  const [akzeptiert2, setAkzeptiert2] = useState(false);

  const beidesAkzeptiert = akzeptiert1 && akzeptiert2;

  return (
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

        {/* Checkboxen erhalten weiterhin ihre Animationen */}
        <div
          className="flex items-start mb-2"
        >
          <label className="flex items-start text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={akzeptiert1}
              onChange={(e) => setAkzeptiert1(e.target.checked)}
              className="mt-1 mr-2"
            />
            <span>
              *Ich akzeptiere die{" "}
              <a href="/datenschutz" className="text-blue-600 underline">
                Datenschutzerklärung
              </a>
              .
            </span>
          </label>
        </div>

        <div
          className="flex items-start mb-4"
        >
          <label className="flex items-start text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={akzeptiert2}
              onChange={(e) => setAkzeptiert2(e.target.checked)}
              className="mt-1 mr-2"
            />
            <span>
              *Ich habe die{" "}
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
            </span>
          </label>
        </div>

        <a
          href={beidesAkzeptiert ? "https://calendar.app.google/HeZENKhjYyeWGJ6P9" : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-6 py-3 rounded-lg transition font-medium ${
            beidesAkzeptiert
              ? "bg-blue-700 text-white hover:bg-yellow-500 hover:text-black"
              : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
          }`}
        >
          <span>Jetzt Termin buchen</span>
          <img src={GoogleMeetIcon} alt="Google Meet" className="w-5 h-5 ml-3" />
        </a>
      </div>
    </div>
  );
}