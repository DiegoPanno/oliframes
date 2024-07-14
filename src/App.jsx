import imgFondo from "./imgFondo.jpg";
import "./App.css";
import Menu from "./assets/Component/Navbar/Menu";
import Titulo from "./assets/Component/Titulo/Titulo";
import Footer from "./assets/Component/Footer/Footer";
import WhatsAppButton from "./assets/Component/WhatsAppButton/WhatsAppButton";
import CompanyInfo from "./assets/Component/CompanyInfo/CompanyInfo";
import QueOfrecemos from "./assets/Component/QueOfrecemos/QueOfrecemos";

function App() {
  return (
    <div>
      <Menu />
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
    </div>
  );
}

export default App;
