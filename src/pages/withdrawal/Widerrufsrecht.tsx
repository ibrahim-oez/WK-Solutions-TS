import React from 'react';

const standVonVorherigemMonat = (): string => {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);
  return now.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
};

export const Widerruf: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Widerrufsrecht</h1>

      <h2 className="text-xl font-semibold mt-8 mb-4">Widerrufsbelehrung</h2>
      <p className="mb-4">
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
      </p>
      <p className="mb-4">
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
      </p>
      <p className="mb-4">
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (WK Solutions, Ibrahim Özdogan, Quellenweg 17, 51702 Bergneustadt, E-Mail: oezdogan.ib@wk-solutions.de, Telefon: +49 151 50738600) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
      </p>
      <p className="mb-4">
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-4">Folgen des Widerrufs</h3>
      <p className="mb-4">
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
      </p>
      <p className="mb-4">
        Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-4">Besondere Hinweise zum vorzeitigen Erlöschen des Widerrufsrechts</h3>
      <p className="mb-4">
        Das Widerrufsrecht erlischt bei einem Vertrag über die Erbringung von Dienstleistungen, wenn der Unternehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung durch den Unternehmer verliert.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Muster-Widerrufsformular</h2>
      <p className="mb-4">
        (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-4 border border-gray-200">
        <p className="font-semibold mb-4">An:</p>
        <p className="mb-4">
          WK Solutions<br />
          Ibrahim Özdogan<br />
          Quellenweg 17<br />
          51702 Bergneustadt<br />
          E-Mail: oezdogan.ib@wk-solutions.de
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <p className="mb-4">
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*):
        </p>
        <p className="border-b border-gray-400 pb-2 mb-4">
          _______________________________________________________________________________
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="mb-1 font-semibold">Bestellt am (*)/erhalten am (*):</p>
            <p className="border-b border-gray-400 pb-2">
              __________________________
            </p>
          </div>
          <div>
            <p className="mb-1 font-semibold">Datum:</p>
            <p className="border-b border-gray-400 pb-2">
              __________________________
            </p>
          </div>
        </div>

        <div>
          <p className="mb-1 font-semibold">Name des/der Verbraucher(s):</p>
          <p className="border-b border-gray-400 pb-2">
            _______________________________________________________________________________
          </p>
        </div>

        <div>
          <p className="mb-1 font-semibold">Anschrift des/der Verbraucher(s):</p>
          <p className="border-b border-gray-400 pb-2">
            _______________________________________________________________________________
          </p>
        </div>

        <div>
          <p className="mb-1 font-semibold">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
          <p className="border-b border-gray-400 pb-2">
            _______________________________________________________________________________
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          (*) Unzutreffendes streichen.
        </p>
      </div>

      <a href="/Widerrufsformular.pdf" download={true} className="inline-block">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 font-medium">
          Widerrufsrecht als PDF herunterladen
        </button>
      </a>

      <p className="text-sm text-gray-500 mt-8">
        Stand: {standVonVorherigemMonat()}
      </p>
    </div>
  );
};

