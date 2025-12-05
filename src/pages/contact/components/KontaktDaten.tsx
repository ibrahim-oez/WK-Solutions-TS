import React from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import logoSvg from "../../../global_assets/img/path429.svg";

interface KontaktInfo {
  inhaber: string;
  telefon: string;
  email: string;
  adresse: {
    strasse: string;
    plz: string;
    ort: string;
  };
  oeffnungszeiten: string;
}

interface AdditionalService {
  icon: React.ComponentType<any>;
  name: string;
  link: string;
  description: string;
}

export const KontaktDaten: React.FC = () => {
  const kontaktInfo: KontaktInfo = {
    inhaber: "Ibrahim Özdogan",
    telefon: "+49 155 63930981",
    email: "ibrahim.oez@wk-solutions.de",
    adresse: {
      strasse: "Quellenweg 17",
      plz: "51702",
      ort: "Bergneustadt"
    },
    oeffnungszeiten: "Mo-Fr: 09:00-18:00 Uhr"
  };

  const zusatzServices: AdditionalService[] = [];

  const handlePhoneClick = (): void => {
    window.location.href = `tel:${kontaktInfo.telefon}`;
  };

  const handleEmailClick = (): void => {
    window.location.href = `mailto:${kontaktInfo.email}`;
  };

  const handleMapsClick = (): void => {
    const adresse = `${kontaktInfo.adresse.strasse}, ${kontaktInfo.adresse.plz} ${kontaktInfo.adresse.ort}`;
    window.open(`https://maps.google.com/maps?q=${encodeURIComponent(adresse)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-md mx-auto px-4 py-8">

        <div className="relative mb-8" id="logo-container">
          <img src={logoSvg} alt="WK Solutions Logo" className="mx-auto h-16 w-auto" />
        </div>
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-lg text-gray-700 ">
            {kontaktInfo.inhaber}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Hauptkontaktoptionen */}
        <div className="space-y-4 mb-8">
          
          {/* Telefon */}
          <button
            onClick={handlePhoneClick}
            className="w-full bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Anrufen</h3>
                <p className="text-gray-600 text-sm">{kontaktInfo.telefon}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </button>

          {/* E-Mail */}
          <button
            onClick={handleEmailClick}
            className="w-full bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900 mb-1">E-Mail schreiben</h3>
                <p className="text-gray-600 text-sm">{kontaktInfo.email}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </button>

          {/* Adresse */}
          <button
            onClick={handleMapsClick}
            className="w-full bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                <p className="text-gray-600 text-sm">
                  {kontaktInfo.adresse.strasse}<br />
                  {kontaktInfo.adresse.plz} {kontaktInfo.adresse.ort}
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </button>

        </div>

        {/* Zusätzliche Informationen */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Öffnungszeiten</h3>
          </div>
          <p className="text-gray-600 ml-11">{kontaktInfo.oeffnungszeiten}</p>
        </div>

        {/* Google Maps Einbettung */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 mb-8 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Standort</h3>
            </div>
          </div>
          <div className="w-full">
            <iframe 
              width="100%" 
              height={300}
              frameBorder={0}
              scrolling="no" 
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=51702%20Bergneustadt,%20+(My%20Business%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Standort Karte"
              className="w-full"
            />
          </div>
        </div>

        {/* Bereich für zukünftige Erweiterungen */}
        {zusatzServices.length > 0 && (
          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 text-center mb-4">
              Weitere Kontaktmöglichkeiten
            </h2>
            {zusatzServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <a
                  key={index}
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full group-hover:bg-gray-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>IT-Lösungen für Unternehmen & Privatpersonen</p>
        </div>

      </div>
    </div>
  );
}