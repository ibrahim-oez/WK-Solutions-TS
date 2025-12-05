import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <section className="py-16" role="main">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black mb-6">Seite nicht gefunden</h1>
        <p className="text-gray-700 mb-4">
          Die angeforderte Seite existiert nicht.
        </p>
        <Link to="/" className="text-blue-600 underline text-lg">
          Zur Startseite
        </Link>
      </div>
    </section>
  );
};
