import React from 'react';

// Funktion standVonVorherigemMonat direkt in diese Datei verschoben
export function standVonVorherigemMonat() {
  const now = new Date();
  now.setMonth(now.getMonth() - 1); // Einen Monat zurücksetzen
  return now.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
}

export function Widerruf() {
  return (
    <div className="prose prose-sm md:prose-base max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Widerrufsrecht</h1>

      <h2>Widerrufsbelehrung</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
      </p>
      <p>
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (WK Solutions, Ibrahim Özdogan, Quellenweg 17, 51702 Bergneustadt, E-Mail: oezdogan.ib@wk-solutions.de, Telefon: +49 151 50738600) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
      </p>
      <p>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
      </p>

      <h3>Folgen des Widerrufs</h3>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
      </p>
      <p>
        Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
      </p>

      <h3>Besondere Hinweise zum vorzeitigen Erlöschen des Widerrufsrechts</h3>
      <p>
        Das Widerrufsrecht erlischt bei einem Vertrag über die Erbringung von Dienstleistungen, wenn der Unternehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung durch den Unternehmer verliert.
      </p>

      <h2 className="mt-8">Muster-Widerrufsformular</h2>
      <p>
        (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
      </p>
      <p>
        <strong>An:</strong><br />
        WK Solutions<br />
        Ibrahim Özdogan<br />
        Quellenweg 17<br />
        51702 Bergneustadt<br />
        E-Mail: oezdogan.ib@wk-solutions.de
      </p>
      <p>
        Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*):
      </p>
      <p>
        _______________________________________________________
      </p>
      <p>
        Bestellt am (*)/erhalten am (*): __________________________
      </p>
      <p>
        Name des/der Verbraucher(s): __________________________________
      </p>
      <p>
        Anschrift des/der Verbraucher(s): __________________________________
      </p>
      <p>
        Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): __________________________________
      </p>
      <p>
        Datum: __________________________________
      </p>
      <p>
        (*) Unzutreffendes streichen.
      </p>

    {/*Button für Widerrufsrecht PDF download */}
    <a href="/Widerrufsformular.pdf" download={true}>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-gray-100 transition duration-300">
      Widerrufsrecht als PDF herunterladen
    </button>
    </a>
      <p className="text-sm text-gray-500 mt-8">
        Stand: {standVonVorherigemMonat()}
      </p>
    </div>
  );
}

