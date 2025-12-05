import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Home } from "./pages/Home";
import { Leistungen } from "./pages/Leistungen";
import { UeberMich } from "./pages/UeberMich";
import { Kontakt } from "./pages/Kontakt";
import { KontaktDaten } from "./pages/KontaktDaten";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Datenschutz } from "./pages/Datenschutz";
import { Impressum } from "./pages/Impressum";
import { AGB } from "./pages/AGB";
import { KeinAdmin } from "./pages/KeinAdmin";
import CookieBanner from "./components/CookieBanner";
import { Widerruf } from "./pages/Widerrufsrecht";
import Feedback from "./pages/Feedback";
import { FeedbackAdmin } from "./pages/admin/FeedbackAdmin";
import { Bewertungen } from "./pages/Bewertungen";

export default function App() {
  // AOS einmalig initialisieren, wenn die App geladen wird
  useEffect(() => {
    AOS.init({
      // Globale Standardeinstellungen für alle AOS-Animationen
      duration: 800,
      easing: "ease-out-quad",
      once: true,
      mirror: false,
      offset: 150,
      delay: 50,
      startEvent: 'DOMContentLoaded',
      throttleDelay: 99,
      debounceDelay: 50,
    });
  }, []); // Leeres Array bedeutet, dass der Effekt nur einmal nach dem ersten Rendern ausgeführt wird

  return (
    <Router>
      {/* Die Scroll-nach-oben-Komponente muss HIER direkt unter dem Router sein.
          Sie überwacht Routenänderungen und scrollt automatisch nach oben. */}
      <ScrollToTop /> 

      <Routes>
        {/* Kontaktdaten-Seite ohne Header/Footer für QR-Code-Nutzung */}
        <Route path="/links" element={<KontaktDaten />} />
        
        {/* Alle anderen Seiten mit Header/Footer */}
        <Route path="*" element={
          <div className="min-h-screen bg-white text-black flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/admin" element={<AdminPanel />} /> */}
                <Route path="/admin" element={<KeinAdmin />} />
                <Route path="/leistungen" element={<Leistungen />} />
                <Route path="/ueber-mich" element={<UeberMich />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/agb" element={<AGB />} />
                <Route path="/widerrufsrecht" element={<Widerruf />} />
                <Route path="/bewertungen" element={<Bewertungen />} />
                <Route path="/feedback/:token" element={<Feedback />} />
                <Route path="/feedback-admin" element={<FeedbackAdmin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        } />
      </Routes>
    </Router>
  );
}

// Die ScrollToTop-Komponente bleibt unverändert
function ScrollToTop() {
  const { pathname } = useLocation(); // Den aktuellen Pfad (URL) abrufen

  useEffect(() => {
    // Scrollt zum oberen Rand des Dokuments, wenn sich der Pfad ändert
    window.scrollTo(0, 0);
  }, [pathname]); // <-- Dieser Effekt wird bei jeder Änderung des Pfades ausgeführt

  return null; // Diese Komponente rendert nichts, sie führt nur eine Nebenwirkung aus
}