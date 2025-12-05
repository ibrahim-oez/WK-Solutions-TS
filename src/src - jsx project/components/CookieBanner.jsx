import React, { useState, useEffect } from 'react';

// Die CookieBanner Komponente
const CookieBanner = () => {
  // Zustand, um die Sichtbarkeit des Banners zu steuern
  const [isVisible, setIsVisible] = useState(false);

  // useEffect Hook, der beim Laden der Komponente ausgeführt wird
  useEffect(() => {
    // Überprüfen, ob der Nutzer bereits eine Entscheidung getroffen hat
    const consent = localStorage.getItem('cookieConsent');
    // Wenn keine Entscheidung getroffen wurde, Banner anzeigen
    if (!consent) {
      setIsVisible(true);
    }
  }, []); // Leeres Array als Abhängigkeit bedeutet, dass dieser Effekt nur einmal beim Mounten ausgeführt wird

  // Funktion zum Akzeptieren von Cookies
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted'); // Entscheidung speichern
    setIsVisible(false); // Banner ausblenden
    // Hier könnten weitere Aktionen für die Cookie-Zustimmung folgen,
    // z.B. Laden von Google Analytics, falls du es später einbindest.
    // Für diesen Banner sind derzeit keine Cookies auf deiner Seite direkt aktiv.
  };

  // Funktion zum Ablehnen von Cookies
  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected'); // Entscheidung speichern
    setIsVisible(false); // Banner ausblenden
    // Hier könnten Aktionen für die Ablehnung folgen,
    // z.B. Sicherstellen, dass keine Tracking-Skripte geladen werden.
    // Da deine Website laut Datenschutzerklärung keine direkten Tracking-Cookies setzt,
    // dient dies hauptsächlich dazu, die Auswahl zu speichern und das Banner auszublenden.
  };

  // Wenn der Banner nicht sichtbar sein soll, null zurückgeben (nichts rendern)
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
      <div className="text-sm text-center md:text-left">
        <p className="mb-2 md:mb-0">
          Diese Webseite verlinkt auf externe Dienste wie Google Meet, LinkedIn und Xing, die eventuell Cookies setzen können.
          Weitere Informationen finden Sie in unserer {" "}
          <a href="/datenschutz" className="text-blue-400 hover:underline">
            Datenschutzerklärung.
          </a>
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Akzeptieren
        </button>
        <button
          onClick={handleReject}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
