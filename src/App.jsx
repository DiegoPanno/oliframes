import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
      // Usamos setTimeout para esperar al render
      setTimeout(() => {
        const section = document.getElementById(scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Espera 100ms para que se monte el DOM
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection /> {/* Aquí dentro del Router */}
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="App" id="home">
                <div className="overlay"></div>
                <img
                  className="imgFondo"
                  src={imgFondo}
                  alt="vista interior de una casa con lindo paisaje a través de ventanales"
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
        <Route path="/Obras" element={<Obras />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
