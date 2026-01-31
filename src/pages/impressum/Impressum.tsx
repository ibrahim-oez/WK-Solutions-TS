import React from "react";

const standVonVorherigemMonat = (): string => {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);
  return now.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
};

export const Impressum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <h2 className="text-xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
      <p className="mb-4">
        WK Solutions
        <br />
        Inhaber: Ibrahim Özdogan
        <br />
        Quellenweg 17
        <br />
        51702 Bergneustadt
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Kontakt</h2>
      <p className="mb-4">
        Telefon:{" "}
        <a href="tel:+4915150738600" className="text-blue-600 underline">
          +49 151 50738600
        </a>
        <br />
        E-Mail:{" "}
        <a href="mailto:oezdogan.ib@wk-solutions.de" className="text-blue-600 underline">
          ibrahim.oez@wk-solutions.de
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Informationen zu Ihrem Widerrufsrecht</h2>
      <p className="mb-4">
        Als Verbraucher steht Ihnen ein gesetzliches Widerrufsrecht zu. Alle
        Details dazu sowie ein Muster-Widerrufsformular finden Sie auf unserer
        separaten Seite zum{" "}
        <a
          href="/widerrufsrecht"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Widerrufsrecht
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
      <p className="mb-4">
        Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird <strong>keine</strong>
        {" "}Umsatzsteuer berechnet und ausgewiesen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p className="mb-4">Ibrahim Özdogan</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Haftungsausschluss</h2>
      <p className="mb-4">
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
        keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7
        Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p className="mb-4">
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
        entfernen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Externe Links</h2>
      <p className="mb-4">
        Diese Website enthält Links zu externen Websites Dritter. Auf die
        Inhalte dieser Seiten habe ich keinen Einfluss und kann daher für diese
        fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p className="mb-4">
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
        konkrete Anhaltspunkte einer Rechtsverletzung jedoch nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend
        entfernen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Urheberrecht</h2>
      <p className="mb-4">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p className="mb-4">
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde
        ich derartige Inhalte umgehend entfernen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Streitschlichtung</h2>
      <p className="mb-4">
        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Online-Streitbeilegung</h2>
      <p className="mb-4">
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .
        <br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Stand: {standVonVorherigemMonat()}
      </p>
    </div>
  );
};
