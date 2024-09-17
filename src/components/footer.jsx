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
                    <li><Link to="/" aria-label="Ir a la página principal">Inicio</Link></li>
                    <li><Link to="/quienes-somos" aria-label="Ir a pestaña Quiénes Somos">Quiénes Somos</Link></li>
                    <li><Link to="/servicios" aria-label="Ir a pestaña servicios">Servicios</Link></li>
                    <li><Link to="/nuestro-taller" aria-label="Ir a pestaña Nuestro Taller">Nuestro Taller</Link></li>
                    <li><Link to="/contacto" aria-label="Ir a pestaña Contactos">Contacto</Link></li>
                </ul>
            </div>
            <div className="visitContainer">
                 <ul>
                    <li><p className="titleContainer">Visítanos</p></li>
                    <li>Avenida Industrial 7720, Galpón 28</li>
                    <li>Parque Industrial AGPIA, Antofagasta</li>
                    <li>Lunes a Viernes 08:00 a 17:00 </li>
                </ul>
           </div>
           <div className="contactContain">
                <ul>
                    <li><p className="titleContainer">Contacto</p></li>
                    <li>Teléfono: 55 2 895698</li>
                    <li>Celular: +56 9 42663481</li>
                    <li>negocios@eyhmaestranza.cl</li>
                </ul>
            </div>
    </div>
    );
};

export default Footer;