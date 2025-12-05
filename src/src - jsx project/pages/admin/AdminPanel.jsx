import  { useState } from "react";

const invoices = [
  {
    id: "RE-20250605-1",
    customer: "Muster GmbH",
    date: "2025-06-05",
    amount: "249.00 €",
    status: "Offen",
    fileUrl: "/rechnungen/RE-20250605-1.pdf",
  },
  {
    id: "RE-20250605-2",
    customer: "Beispiel AG",
    date: "2025-06-05",
    amount: "499.00 €",
    status: "Bezahlt",
    fileUrl: "/rechnungen/RE-20250605-2.pdf",
  },
];

export function AdminPanel() {
  const [search, setSearch] = useState("");

  const filtered = invoices.filter((inv) =>
    inv.id.toLowerCase().includes(search.toLowerCase()) ||
    inv.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Rechnungsübersicht</h1>

      <input
        type="text"
        placeholder="Suche nach Kunde oder Rechnungsnummer..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Rechnungsnummer</th>
            <th className="p-2">Kunde</th>
            <th className="p-2">Datum</th>
            <th className="p-2">Betrag</th>
            <th className="p-2">Status</th>
            <th className="p-2">PDF</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((inv) => (
            <tr key={inv.id} className="border-t border-gray-200">
              <td className="p-2 font-mono">{inv.id}</td>
              <td className="p-2">{inv.customer}</td>
              <td className="p-2">{inv.date}</td>
              <td className="p-2">{inv.amount}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-sm text-white ${
                    inv.status === "Bezahlt" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {inv.status}
                </span>
              </td>
              <td className="p-2">
                <a
                  href={inv.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Öffnen
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
