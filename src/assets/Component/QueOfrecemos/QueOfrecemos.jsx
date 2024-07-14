import React from "react";
import "./QueOfrecemos.css";
import "../CompanyInfo/CompanyInfo.css";
import ventana from "./VETANA.png";
import puerta from "./PUERTA.png";
import postigo from "./POSTIGOS.png";
import portones from "./PORTONES.png";
import balcones from "./BALCON.png";
import espejos from "./ESPEJOS.png";
import cerramiento from "./CERRAMIENTOS.png";
import mampara from "./MAMPARA.png";
import { CheckCircleOutlined } from '@ant-design/icons';
import 'animate.css';


const QueOfrecemos = () => {
  return (
    <div className="queOfrecemosContainer">
      <hr className="hrCompany" />
      <h4 className="h4Queofrecemos">Productos</h4>
      <h2 className="h2Queofrecemos">¿Qué ofrecemos?</h2>
      <h3 className="h3Queofrecemos">
        ABERTURAS DE ALUMINIO PARA TUS ESPACIOS
      </h3>

      <div className="contenedorProducto">
        <div className="cuadroProducto">
          <img src={ventana} alt="" />
          <h3 className="h3Producto">VENTANAS</h3>
          <p className="pCuadro">
            Oscilobatientes, desplazables, corredizas y paños fijos.
          </p>
        </div>
        <div className="cuadroProducto">
          <img src={puerta} alt="" />
          <h3 className="h3Producto">PUERTAS</h3>
          <p className="pCuadro">
            De vidrio, ciegas, con visor, puertas balcón y puertas dobles.
          </p>
        </div>
        <div className="cuadroProducto">
          <img src={postigo} alt="" />
          <h3 className="h3Producto">POSTIGOS</h3>
          <p className="pCuadro">De aluminio para puertas y ventanas.</p>
        </div>
        <div className="cuadroProducto">
          <img src={balcones} alt="" />
          <h3 className="h3Producto">BALCONES</h3>
          <p className="pCuadro">Aluminio y vidrio.</p>
        </div>
        <div className="cuadroProducto">
          <img src={cerramiento} alt="" />
          <h3 className="h3Producto">CERRAMIENTOS</h3>
          <p className="pCuadro">
            A medida de tus necesidades para cerrar espacios y obtener más mt2.
          </p>
        </div>
        <div className="cuadroProducto">
          <img src={mampara} alt="" />
          <h3 className="h3Producto">MAMPARAS</h3>
          <p className="pCuadro">
            Paños fijos, corredizos entre otros diseños.
          </p>
        </div>
        <div className="cuadroProducto">
          <img src={portones} alt="" />
          <h3 className="h3Producto">PORTONES</h3>
          <p className="pCuadro">Distintos diseños según tu necesidad.</p>
        </div>
        <div className="cuadroProducto">
          <img src={espejos} alt="" />
          <h3 className="h3Producto">ESPEJOS</h3>
          <p className="pCuadro">A medida de tus necesidades.</p>
        </div>
      </div> 
      <h3 className="h3Materia animate__animated animate__fadeInLeft">Materias primas con las que trabajamos</h3>
     <div className="contenedorMateria">
     <div className="cuadroMateria"><h4 className="h4Materia">ALUMINIO</h4>
     <h5><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>Linea Modena</h5>
     <h5><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>A30</h5>
     <h5><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>A40</h5>
     <h5><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>RPT</h5>
     <h5><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>Alteza</h5>
     </div>
     <div className="cuadroMateria2"><h4 className="h4Materia2 ">VIDRIO</h4>
     <h5 className="h5materia2" ><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>Laminados</h5>
     <h5 className="h5materia2" ><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>DVH</h5>
     <h5 className="h5materia2" ><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>Flot</h5>
     <h5 className="h5materia2" ><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>Templados</h5>
     <h5 className="h5materia2" ><CheckCircleOutlined style={{color :'#c87a12', marginRight: '45px'}}/>Espejos</h5>
     </div>

     </div>
    </div>
  );
};

export default QueOfrecemos;
