import React from "react";

export const KontaktFormular: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <form
        action="https://form.taxi/s/q1grrsrc"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label
            htmlFor="nachricht"
            className="block text-sm font-medium text-gray-700"
          >
            Nachricht *
          </label>
          <textarea
            id="nachricht"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="text-sm text-gray-600 mb-4">
          <p className="text-sm text-gray-500 mb-2">* Pflichtfelder</p>
          <p>
            Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage
            verwendet und nicht an Dritte weitergegeben. Weitere Informationen
            finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-blue-600 underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="flex items-start">
          <label
            htmlFor="akzeptiert"
            className="flex items-start text-sm text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              id="akzeptiert"
              name="akzeptiert"
              required
              className="mt-1 mr-2"
            />
            <span>
              Ich akzeptiere die{" "}
              <a href="/datenschutz" className="text-blue-600 underline">
                Datenschutzerklärung
              </a>
              .
            </span>
          </label>
        </div>
        <div className="flex items-start">
          <label
            htmlFor="akzeptiert2"
            className="flex items-start text-sm text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              id="akzeptiert2"
              name="akzeptiert"
              required
              className="mt-1 mr-2"
            />
            <span>
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
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Nachricht senden
        </button>
      </form>
    </div>
  );
};
