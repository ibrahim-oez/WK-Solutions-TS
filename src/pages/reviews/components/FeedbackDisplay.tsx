import React from "react";
import { Star, ThumbsUp, ExternalLink, MessageCircle } from "lucide-react";

// Füge hier deine Google Business Profile URL ein
const GOOGLE_BUSINESS_URL = "https://share.google/KHl7rdZDLZ7oBVBmK"; // TODO: Ersetze mit deiner echten URL

export const FeedbackDisplay: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center" data-aos="fade-up">
        
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ihre Meinung ist uns wichtig
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Lesen Sie, was unsere Kunden über unsere IT-Services sagen – 
          oder teilen Sie Ihre eigenen Erfahrungen auf Google
        </p>
      </div>

      {/* Google Reviews CTA Card */}
      <div 
        className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl"
        data-aos="zoom-in"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Google Logo & Stars */}
          <div className="flex justify-center items-center gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <svg className="w-12 h-12" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Main CTA Text */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Sehen Sie unsere Google Bewertungen
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Erfahren Sie, was echte Kunden über unsere IT-Dienstleistungen denken. 
              Alle Bewertungen sind verifiziert und transparent.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Bewertungen auf Google ansehen
            </a>
            
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border-2 border-gray-200"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Jetzt bewerten
            </a>
          </div>
        </div>
      </div>

      {/* Why Reviews Matter */}
      <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ThumbsUp className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-2">Verifiziert & Echt</h4>
          <p className="text-gray-600 text-sm">
            Alle Google-Bewertungen sind von echten Kunden und können nicht manipuliert werden
          </p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-purple-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-2">Transparent</h4>
          <p className="text-gray-600 text-sm">
            Sehen Sie sowohl positive als auch konstruktive Rückmeldungen unserer Kunden
          </p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-2">Ihre Stimme zählt</h4>
          <p className="text-gray-600 text-sm">
            Helfen Sie anderen Kunden und uns, unsere Services kontinuierlich zu verbessern
          </p>
        </div>
      </div>

      {/* Dual CTA Grid */}
      <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
        {/* Google Bewertung CTA - Links */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all">
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-7 h-7 text-blue-600 fill-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
            Bereits Kunde?
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Ihre ehrliche Meinung hilft uns und anderen Kunden weiter
          </p>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Jetzt auf Google bewerten
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Kontakt CTA - Rechts */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-all">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
            Haben wir Sie überzeugt?
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Dann nehmen Sie jetzt Kontakt auf und lassen Sie uns gemeinsam starten!
          </p>
          <a
            href="/kontakt"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  );
};
