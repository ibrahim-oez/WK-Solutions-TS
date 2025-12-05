import React, { useEffect } from "react"; // Füge useEffect hinzu, wenn nicht bereits global initialisiert.
// HINWEIS: Da AOS jetzt global in App.jsx initialisiert wird,
// brauchst du 'AOS' und 'aos/dist/aos.css' hier nicht mehr.
// Ich lasse die Imports der Übersichtlichkeit halber noch drin,
// falls du diese Datei separat testen möchtest, aber sie könnten entfernt werden.

import XingIcon from "../assets/img/xing.svg";
import InstagramIcon from "../assets/img/insta.svg";
import LinkedinIcon from "../assets/img/linkedin.svg";
import mePic from "../assets/img/pic-me.png";

export function UeberMich() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <h1
        className="text-3xl font-bold text-black text-center"
        data-aos="fade-down" // Titel von oben einblenden
        data-aos-duration="1000"
      >
        Über mich
      </h1>

      <div className="flex flex-col items-center space-y-6">
        <img
          src={mePic}
          alt="Ibrahim Özdogan"
          className="w-28 h-28 rounded-full object-cover shadow"
          data-aos="zoom-in" // Profilbild leicht zoomen
          data-aos-delay="200"
          data-aos-duration="800"
        />

        <div className="space-y-4 text-gray-700 text-center">
          <p data-aos="fade-up" data-aos-delay="300">
            Ich heiße <strong>Ibrahim Özdogan</strong> und bin der Inhaber von{" "}
            <strong>WK Solutions</strong>, Ihrem IT-Serviceanbieter aus
            Bergneustadt.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Seit vielen Jahren bin ich von der Welt der Technik fasziniert,
            einschließlich Computern und Netzwerken, Programmierung, Design und
            modernen Webtechnologien. Diese Passion motiviert mich, mein Wissen
            zu vergrößern und praktische Antworten auf digitale
            Herausforderungen zu entwickeln.
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            Mit durchdachten IT-Konzepten, individueller Beratung und
            zuverlässigem Support helfe ich Einzelpersonen, kleinen Unternehmen,
            Freiberuflern und Vereinen.
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            An der <strong>TH Köln</strong> studiere ich{" "}
            <strong>Medieninformatik</strong>. Ich erweitere dort mein Wissen
            in den Bereichen <strong>Webentwicklung, IT-Sicherheit, Design</strong>{" "}
            und <strong>Digitalisierung</strong> – Themen, die ich täglich bei
            WK Solutions einfließen lasse.
          </p>
          <p data-aos="fade-up" data-aos-delay="700">
            Klare Kommunikation, ehrlicher Service und maßgeschneiderte,
            praxisnahe Lösungen stehen für mich im Mittelpunkt jeder
            Zusammenarbeit.
          </p>
        </div>
      </div>

      <div className="pt-8">
        <h2
          className="text-xl font-semibold text-black text-center mb-6"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Was mir wichtig ist
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {[
            "Klare Kommunikation & Ehrlichkeit",
            "Praktische, verständliche Lösungen",
            "Schnelle Reaktionszeiten",
            "Individuelle Betreuung statt 08/15",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
              data-aos="zoom-in" // Einzelne Punkte zoomen
              data-aos-delay={900 + i * 100} // Gestaffelte Verzögerung
            >
              <svg
                className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-6">
        <a
          href="/kontakt"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          data-aos="zoom-in" // Button zoomen
          data-aos-delay="1300" // Stark verzögert, als letztes vor Socials
        >
          Kontakt aufnehmen
        </a>
      </div>

      {/* Social links */}
      <div className="flex justify-center space-x-4 pt-8">
        <a
          href="https://www.instagram.com/wk_solutions/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:underline mx-2"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
        </a>

        <a
          href="https://www.xing.com/profile/Ibrahim_Oezdogan2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:underline mx-2"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          <img src={XingIcon} alt="Xing" className="h-6 w-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/ibrahim-%C3%B6zdogan-77471a22b/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:underline mx-2"
          data-aos="fade-up"
          data-aos-delay="1600"
        >
          <img src={LinkedinIcon} alt="LinkedIn" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}