// pages/Datenschutz.jsx
export function standVonVorherigemMonat() {
  const now = new Date();
  now.setMonth(now.getMonth() - 1); // Einen Monat zurücksetzen
  return now.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
}

export function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <p className="mb-4">
        Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich
        verarbeite Ihre Daten daher ausschließlich auf Grundlage der
        gesetzlichen Bestimmungen (DSGVO, BDSG).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Verantwortlicher</h2>
      <p className="mb-4">
        Ibrahim Özdogan
        <br />
        WK Solutions
        <br />
        Quellenweg 17
        <br />
        51702 Bergneustadt
        <br />
        E-Mail:{" "}
        <a
          href="mailto:info@wk-solutions.de"
          className="text-blue-600 underline"
        >
          oezdogan.ib@wk-solutions.de
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Kontaktaufnahme</h2>
      <p className="mb-4">
        Wenn Sie über das Kontaktformular oder per E-Mail mit mir in Verbindung
        treten, werden Ihre Angaben zwecks Bearbeitung der Anfrage sowie für
        mögliche Anschlussfragen verarbeitet. Diese Daten werden ohne Ihre
        Einwilligung nicht weitergegeben und nach spätestens sechs Monaten
        gelöscht.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Zugriffsdaten & Hosting
      </h2>
      <p className="mb-4">
        Beim Besuch dieser Website werden direkt durch uns <strong>**keine
        personenbezogenen Zugriffsdaten**</strong> gespeichert, die einer Einwilligung
        bedürfen. Es werden <strong>**keine Cookies, Tracking-Tools oder externen Fonts
        via CDN**</strong> durch uns gesetzt, die ein Opt-in erfordern würden. Das
        Hosting erfolgt datenschutzkonform innerhalb der EU. <strong>**Hinweis zu
        externen Links und Diensten:**</strong> Bitte beachten Sie, dass bei Klick auf
        Links zu externen Diensten (wie z.B. Google Meet zur Terminbuchung)
        Datenverarbeitungen durch diese Drittanbieter stattfinden können, auf
        die wir keinen direkten Einfluss haben. Diese externen Dienste können
        eigene Cookies setzen und Tracking-Technologien verwenden. Informationen
        hierzu finden Sie in deren jeweiligen Datenschutzerklärungen. Wir bitten
        Sie, sich vor der Nutzung dieser externen Dienste über deren
        Datenschutzpraktiken zu informieren.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Google Meet</h2>
      <p className="mb-4">
        Zur Durchführung von Online-Besprechungen nutze ich{" "}
        <strong>Google Meet</strong>, ein Dienst der Google Ireland Limited,
        Gordon House, Barrow Street, Dublin 4, Irland.
        <br />
        Dabei können folgende Daten verarbeitet werden: E-Mail-Adresse,
        IP-Adresse, Geräteinformationen sowie ggf. Video- und Audiodaten, wenn
        Sie Kamera oder Mikrofon nutzen.
        <br />
        Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder
        vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an effizienter Kommunikation).
        <br />
        Weitere Informationen:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://policies.google.com/privacy
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Nutzung von Form.taxi
      </h2>
      <p className="mb-4">
        Für das Kontaktformular verwende ich den Dienst{" "}
        <strong>Form.taxi</strong> (Anbieter: Johannes Kettmann, Grabenstraße
        14, 73033 Göppingen).
        <br />
        Ihre eingegebenen Daten (z. B. Name, E-Mail, Nachricht) werden
        verschlüsselt an Form.taxi übermittelt, dort kurzzeitig verarbeitet und
        ausschließlich zur technischen Zustellung an mich weitergeleitet. Es
        erfolgt keine dauerhafte Speicherung oder Weitergabe.
        <br />
        Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (Vertrag) und Art. 6 Abs. 1
        lit. f DSGVO (sicherer Nachrichtentransport).
        <br />
        Weitere Informationen:{" "}
        <a
          href="https://form.taxi/legal/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://form.taxi/de/privacy
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Ihre Rechte</h2>
      <p className="mb-4">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
        Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
        Daten. Wenden Sie sich dazu bitte direkt an mich.
        <br />
        Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen
        Datenschutzrecht verstößt, können Sie sich bei der zuständigen
        Aufsichtsbehörde beschweren.
      </p>

      <p className="text-sm text-gray-500">
        Stand: {standVonVorherigemMonat()}
      </p>
    </div>
  );
}
