import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "./global_components/Header.tsx";
import { Footer } from "./global_components/Footer.tsx";
import { CookieBanner } from "./global_components/CookieBanner.tsx";

// Häufig besuchte Seiten - normal laden
import { Home } from "./pages/home/Home.tsx";
import { Services } from "./pages/services/Services.tsx";
import { About } from "./pages/ueber-mich/About.tsx";
import { Contact } from "./pages/contact/Contact.tsx";
import { KontaktDaten } from "./pages/contact/components/KontaktDaten.tsx";
import { Reviews } from "./pages/reviews/Reviews.tsx";

// Selten besuchte Seiten - lazy laden für bessere Performance
const Datenschutz = lazy(() => import("./pages/data-privacy/Datenschutz.tsx").then(m => ({ default: m.Datenschutz })));
const Impressum = lazy(() => import("./pages/impressum/Impressum.tsx").then(m => ({ default: m.Impressum })));
const AGB = lazy(() => import("./pages/agb/AGB.tsx").then(m => ({ default: m.AGB })));
const Widerruf = lazy(() => import("./pages/withdrawal/Widerrufsrecht.tsx").then(m => ({ default: m.Widerruf })));
const NotFound = lazy(() => import("./pages/404/NotFound.tsx").then(m => ({ default: m.NotFound })));

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
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-gray-600">Lädt...</p>
                  </div>
                </div>
              }>
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
              </Suspense>
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