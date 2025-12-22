import Logo from "../global_assets/img/wk-solutions-logo-svg/wk-logo-black.svg";

// components/Footer.jsx
export function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-600 border-t border-gray-400 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3 ">
          <img src={Logo} alt="WK Solutions Logo" className="h-10 " />
          <p className="ml-0">
            &copy; {new Date().getFullYear()} WK Solutions
          </p>
        </div>
        <div className="space-x-4 ">
          <a href="/impressum" className="hover:underline">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:underline">
            Datenschutz
          </a>
          <a href="/agb" className="hover:underline">
            AGB
          </a>
          <a href="/widerrufsrecht" className="hover:underline">
            Widerrufsrecht
          </a>
        </div>
      </div>
    </footer>
  );
}
