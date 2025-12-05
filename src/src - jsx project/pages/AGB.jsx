import { standVonVorherigemMonat } from "./Datenschutz";

// pages/AGB.jsx

export function AGB() {
  return (
    <div className="prose prose-sm md:prose-base max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese AGB gelten für alle Verträge und Leistungen zwischen WK Solutions,
        Inhaber Ibrahim Özdogan, und seinen Kunden.
      </p>

      <h2>2. Vertragsschluss</h2>
      <p>
        Angebote sind freibleibend. Ein Vertrag kommt erst durch schriftliche
        Bestätigung oder Auftragsannahme zustande.
      </p>

      <h2>3. Leistungen</h2>
      <p>
        WK Solutions erbringt IT-Dienstleistungen, Beratungen und Support nach
        Vereinbarung. Der genaue Umfang ergibt sich aus dem jeweiligen Angebot
        oder Vertrag.
      </p>

      <h2>4. Preise und Zahlung</h2>
      <p>
        Sofern nicht ausdrücklich anders vereinbart, verstehen sich unsere
        Preise:
      </p>
      <ul>
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
      <p>
        Sofern nicht anders vereinbart, sind Zahlungen innerhalb von 14 Tagen
        nach Rechnungsstellung ohne Abzug fällig.
      </p>

      <h2>5. Mitwirkungspflichten</h2>
      <p>
        Der Kunde stellt alle erforderlichen Informationen und Zugänge
        rechtzeitig zur Verfügung, um eine fristgerechte Leistungserbringung zu
        ermöglichen.
      </p>

      <h2>6. Haftung</h2>
      <p>
        WK Solutions haftet nur für Schäden, die auf vorsätzlichem oder grob
        fahrlässigem Verhalten beruhen. Für Datenverluste haftet WK Solutions
        nur, wenn nachweislich entsprechende Datensicherungen vorlagen.
      </p>

      <h2>7. Datenschutz</h2>
      <p>
        Personenbezogene Daten werden gemäß der Datenschutzerklärung
        verarbeitet.
      </p>

      <h2>8. Vertragsdauer und Kündigung</h2>
      <p>
        Verträge werden für die vereinbarte Dauer geschlossen. Eine vorzeitige
        Kündigung ist nur bei wichtigen Gründen möglich.
      </p>

      <h2>9. Gerichtsstand und anwendbares Recht</h2>
      <p>
        Es gilt deutsches Recht.
        <br />
        Für Verträge mit Unternehmern (B2B) ist Gerichtsstand Gummersbach. Für
        Verträge mit Verbrauchern (B2C) gelten die gesetzlichen Bestimmungen.
      </p>

      <p className="text-sm text-gray-500">
        Stand: {standVonVorherigemMonat()}
      </p>
    </div>
  );
}
