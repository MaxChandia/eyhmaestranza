import React, { useState} from "react";
import '../styles/navbar.css';
import { Link } from "react-router-dom";
import logo from '../logo1.png'
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <nav className="navbar" style={{width: "100%", margin:"0"}}> 
         <div className="image">
            <img src={logo} alt="logo"/>
            <ul className="headerContact">
                <li> 
                    <p><FontAwesomeIcon icon={faPhone} style={{fontSize:'15px'}}/>  552895698  +56 9 42663481</p> 
                </li>
                <li>
                    <p><FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px'}} />  negocios@eyhmaestranza.cl</p>
                </li>
                <li>
                    <p><FontAwesomeIcon icon={faLocationDot} />  Avenida Industrial 7720 Galpón 28</p>
                </li>
            </ul>
        </div> 
         <div className="NavPages" style={{height:"50px"}}> 
         <ul className="NavPages">
                <li>
                    <Link to="/" className={hoveredItem === "Inicio" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Inicio")} 
                        onMouseLeave={() => setHoveredItem(null)}>   
                        <p>INICIO</p>
                    </Link>
                </li>
                <li>
                    <Link to="/quienessomos" className={hoveredItem === "Quienes somos" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Quienes somos")} 
                        onMouseLeave={() => setHoveredItem(null)}>   
                        <p>QUIENES SOMOS</p>
                    </Link>
                </li>
                <li>
                    <Link to="/servicios" className={hoveredItem === "Servicios" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Servicios")} 
                        onMouseLeave={() => setHoveredItem(null)}>   
                        <p>SERVICIOS</p>
                    </Link>
                </li>
                <li>
                    <Link to="/nuestrotaller" className={hoveredItem === "Nuestro Taller" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Nuestro Taller")} 
                        onMouseLeave={() => setHoveredItem(null)}>   
                        <p>NUESTRO TALLER</p>
                    </Link>
                </li>
                <li>
                    <Link to="/ubicacion" className={hoveredItem === "Ubicacion" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Ubicacion")} 
                        onMouseLeave={() => setHoveredItem(null)}>   
                        <p>UBICACIÓN</p>
                    </Link>
                </li>
                <li>
                    <Link to="/contacto" className={hoveredItem === "Contacto" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Contacto")} 
                        onMouseLeave={() => setHoveredItem(null)}>   
                        <p>CONTACTO</p>
                    </Link>
                </li>
            </ul>
        </div>
     </nav>
    );
};

export default Navbar;