import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = (): void => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

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
