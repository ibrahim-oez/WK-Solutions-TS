import React from "react";
import { FeedbackDisplay } from "../../global_components/FeedbackDisplay";

export const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kundenbewertungen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erfahren Sie, was unsere Kunden über unsere IT-Services sagen
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Feedback Display */}
        <FeedbackDisplay />

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Haben Sie auch positive Erfahrungen gemacht?
            </h3>
            <p className="text-gray-600 mb-6">
              Wir würden uns sehr über Ihr ehrliches Feedback freuen!
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-3xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
