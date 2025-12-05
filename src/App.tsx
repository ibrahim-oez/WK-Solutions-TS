import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "./global_components/Header.tsx";
import { Footer } from "./global_components/Footer.tsx";
import { CookieBanner } from "./global_components/CookieBanner.tsx";

import { Home } from "./pages/home/Home.tsx";
import { Services } from "./pages/services/Services.tsx";
import { About } from "./pages/about/About.tsx";
import { Contact } from "./pages/contact/Contact.js";
import { Datenschutz } from "./pages/data-privacy/Datenschutz.tsx";
import { Impressum } from "./pages/imprint/Impressum.tsx";
import { AGB } from "./pages/gtc/AGB.tsx";
import { Widerruf } from "./pages/withdrawal/Widerrufsrecht.tsx";
import { NotFound } from "./pages/not-found/NotFound.tsx";
import { KontaktDaten } from "./pages/contact/components/KontaktDaten.tsx";
import { Reviews } from "./pages/.folder-template copy/Reviews.tsx";

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
                <Route path="/leistungen" element={<Services />} />
                <Route path="/ueber-mich" element={<About />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/agb" element={<AGB />} />
                <Route path="/widerrufsrecht" element={<Widerruf />} />
                <Route path="/bewertungen" element={<Reviews />} />
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