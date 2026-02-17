import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Importación necesaria
import Obras from "./assets/Component/pages/Obras";

// tus importaciones existentes
import imgFondo from "./imgFondo.jpg";
import "./App.css";
import Menu from "./assets/Component/Navbar/Menu";
import Titulo from "./assets/Component/Titulo/Titulo";
import Footer from "./assets/Component/Footer/Footer";
import WhatsAppButton from "./assets/Component/WhatsAppButton/WhatsAppButton";
import CompanyInfo from "./assets/Component/CompanyInfo/CompanyInfo";
import QueOfrecemos from "./assets/Component/QueOfrecemos/QueOfrecemos";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

function App() {
  // Datos Estructurados (GEO) - Ayuda a las IAs a entender quién eres
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oliframes",
    "description": "Expertos en aberturas de PVC y Aluminio de alta prestación.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mar del Plata",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "telephone": "+5492235639547", // Dato tomado de tu archivo openWhatsAppChat.js
    "url": "https://www.oliframes.com.ar" 
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToSection />
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  {/* SEO Tradicional */}
                  <title>Oliframes | Aberturas de PVC y Aluminio en Mar del Plata</title>
                  <meta name="description" content="Especialistas en carpintería de PVC y aluminio. Calidad y diseño para tus aberturas en Oliframes." />
                  <meta name="keywords" content="aberturas, pvc, aluminio, mar del plata, construcción, ventanales" />
                  
                  {/* GEO / IA Optimization */}
                  <script type="application/ld+json">
                    {JSON.stringify(businessSchema)}
                  </script>
                </Helmet>

                <div className="App" id="home">
                  <div className="overlay"></div>
                  <img
                    className="imgFondo"
                    src={imgFondo}
                    alt="Vista interior de una casa con carpintería de alta prestación y paisajes a través de ventanales" // Alt descriptivo
                  />
                  <Titulo />
                  <WhatsAppButton />
                </div>
                <div id="nosotros">
                  <CompanyInfo />
                </div>
                <div id="que-ofrecemos">
                  <QueOfrecemos />
                </div>
                <Footer />
              </>
            }
          />
          <Route 
            path="/Obras" 
            element={
              <>
                <Helmet>
                  <title>Nuestras Obras | Proyectos de Carpintería Oliframes</title>
                  <meta name="description" content="Explora nuestro catálogo de obras terminadas. Soluciones reales en PVC y aluminio." />
                </Helmet>
                <Obras />
              </>
            } 
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;