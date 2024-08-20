import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css';


const Footer = () =>{
    return (
        <div className="footerContainer">
            <div className="logoFooter">
                <img src='/photos/transparent-logo.png' alt="logo"></img>
            </div>
            <div className="siteContainer">
                <ul>
                    <Link to="/"><li>Inicio</li></Link>
                    <Link to="/quienes-somos"><li>Quiénes Somos</li></Link>
                    <Link to="/servicios"><li>Servicios</li></Link>
                    <Link to="/nuestro-taller"><li>Nuestro Taller</li></Link>
                    <Link to="/ubicacion"><li>Ubicación</li></Link>
                    <Link to="/contacto"><li>Contacto</li></Link>
                </ul>
            </div>
            <div className="visitContainer">
                 <ul>
                    <li><h3>Visítanos</h3></li>
                    <li>Avenida Industrial 7720, Galpón 28</li>
                    <li>Parque Industrial AGPIA, Antofagasta</li>
                    <li>Lunes a Viernes</li>
                </ul>
           </div>
           <div className="contactContain">
                <ul>
                    <li><h3>Contacto</h3></li>
                    <li>Teléfono: 55 2 895698</li>
                    <li>Celular: +56 9 42663481</li>
                    <li>negocios@eyhmaestranza.cl</li>
                </ul>
            </div>
    </div>
    );
};

export default Footer;