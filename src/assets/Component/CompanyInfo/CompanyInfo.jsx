import React from "react";
import "./CompanyInfo.css";
import ninoVentana from "./ninoVentana.jpg";
import atencion from "./atencion.png";
import empresas from "./empresas.png";
import { CheckCircleOutlined } from '@ant-design/icons';
import 'animate.css';

const CompanyInfo = () => {
  return (
    <div>
      <div id="nosotros" className="container">
        <div className="text-container">
          <h2 className="title animate__animated animate__fadeInRight">Transformamos tus ideas en realidad</h2>
          <hr className="hrCompany" />
          <p className="paragraph animate__animated animate__fadeInLeftBig">
            Somos una empresa de Mar del Plata, especializada en
            soluciones de aluminio. Nos distingue la excelencia de nuestros
            productos, desde la selección de la mejor materia prima, la
            mano de obra altamente calificada y un servicio postventa
            excepcional. Ofrecemos productos de alta calidad y diseño innovador
            para satisfacer todas tus necesidades.
          </p>
        </div>
        <img src={ninoVentana} alt="Niño en la ventana" className="image" />
      </div>
      <div className="info-boxes">
        <div className="info-box1">
          <img
            className="logoAtencion"
            src={atencion}
            alt="logo de atencion personalizada"
          />
          <h3 className="h3Atencion1">Atención personalizada</h3>
          <p className="pAtencion1">
            Te ofrecemos el mejor producto según tu necesidad.
          </p>
        </div>
        <div className="info-box">
          <img
            className="logoAtencion"
            src={empresas}
            alt="logo de atencion a empresas"
          />
          <h3 className="h3Atencion2">
            Asesoramiento a grandes obras y profesionales
          </h3>
          <p className="pAtencion2">
            Consultá por nuestras líneas, tipologías, colores, herrajes y
            mucho más.
          </p>
        </div>
        <div>
        <h3 className="h3Icon"><CheckCircleOutlined style={{color :'#c87a12'}}/>Fabricación</h3>
        <hr className="hrCompany" />
        <h3 className="h3Icon"><CheckCircleOutlined style={{color :'#c87a12'}}/>Instalación</h3>
        <hr className="hrCompany" />
        <h3 className="h3Icon"><CheckCircleOutlined style={{color :'#c87a12'}}/>Postventa</h3>
        
        </div>
      
      </div>
    </div>
  );
};

export default CompanyInfo;
