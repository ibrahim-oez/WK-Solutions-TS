import React from "react";

const standVonVorherigemMonat = (): string => {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);
  return now.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
};

export const AGB: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. Geltungsbereich</h2>
      <p className="mb-4">
        Diese AGB gelten für alle Verträge und Leistungen zwischen WK Solutions,
        Inhaber Ibrahim Özdogan, und seinen Kunden.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">2. Vertragsschluss</h2>
      <p className="mb-4">
        Angebote sind freibleibend. Ein Vertrag kommt erst durch schriftliche
        Bestätigung oder Auftragsannahme zustande.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. Leistungen</h2>
      <p className="mb-4">
        WK Solutions erbringt IT-Dienstleistungen, Beratungen und Support nach
        Vereinbarung. Der genaue Umfang ergibt sich aus dem jeweiligen Angebot
        oder Vertrag.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">4. Preise und Zahlung</h2>
      <p className="mb-4">
        Sofern nicht ausdrücklich anders vereinbart, verstehen sich unsere
        Preise:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          Für <strong>Verbraucher (B2C)</strong> als{" "}
          <strong>Bruttopreise</strong>, d.h. inklusive der jeweils gültigen
          gesetzlichen Umsatzsteuer.
        </li>
        <li>
          Für <strong>Unternehmer (B2B)</strong> als{" "}
          <strong>Nettopreise</strong>, d.h. zzgl. der jeweils gültigen
          gesetzlichen Umsatzsteuer.
        </li>
      </ul>
      <p className="mb-4">
        Sofern nicht anders vereinbart, sind Zahlungen innerhalb von 14 Tagen
        nach Rechnungsstellung ohne Abzug fällig.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Mitwirkungspflichten</h2>
      <p className="mb-4">
        Der Kunde stellt alle erforderlichen Informationen und Zugänge
        rechtzeitig zur Verfügung, um eine fristgerechte Leistungserbringung zu
        ermöglichen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">6. Haftung</h2>
      <p className="mb-4">
        WK Solutions haftet nur für Schäden, die auf vorsätzlichem oder grob
        fahrlässigem Verhalten beruhen. Für Datenverluste haftet WK Solutions
        nur, wenn nachweislich entsprechende Datensicherungen vorlagen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">7. Datenschutz</h2>
      <p className="mb-4">
        Personenbezogene Daten werden gemäß der Datenschutzerklärung
        verarbeitet.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">8. Vertragsdauer und Kündigung</h2>
      <p className="mb-4">
        Verträge werden für die vereinbarte Dauer geschlossen. Eine vorzeitige
        Kündigung ist nur bei wichtigen Gründen möglich.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">9. Gerichtsstand und anwendbares Recht</h2>
      <p className="mb-4">
        Es gilt deutsches Recht.
        <br />
        Für Verträge mit Unternehmern (B2B) ist Gerichtsstand Gummersbach. Für
        Verträge mit Verbrauchern (B2C) gelten die gesetzlichen Bestimmungen.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Stand: {standVonVorherigemMonat()}
      </p>
    </div>
  );
};
