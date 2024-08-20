import React, { useEffect, useState } from "react";
import '../styles/navbar.css';
import { Link } from "react-router-dom";
import { faPhone, faEnvelope, faLocationDot, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        AOS.init({duration: 2000,
            once: true
        });
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <Link to="/">
                <img src='/photos/logo.png' data-aos="fade-right" data-aos-delay="0" alt="eyhmaestranza-logo" className="logo" />
                </Link>
                <ul className="headerContact">
                    <li>
                        <p data-aos="fade-left" data-aos-delay="0" data-aos-duration="10000"><FontAwesomeIcon icon={faPhone} style={{ fontSize: '15px' }} /> +55 2 895698 | +56 9 42663481</p>
                    </li>
                    <li>
                        <p data-aos="fade-left" data-aos-delay="0"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '15px' }} /> negocios@eyhmaestranza.cl</p>
                    </li>
                    <li>
                        <p data-aos="fade-left" data-aos-delay="0" className="direction"><FontAwesomeIcon icon={faLocationDot} /> Avenida Industrial 7720 Galpón 28</p>
                    </li>
                </ul>
            </div>
            <div className="NavPages" data-aos="fade-up" data-aos-duration="1000" >
                    <img src='\photos\logo.png' alt="eyhmaestranza-logo" className="logo" />
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="icons">
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '30px' }} />
                    </label>
                <div className="NavPageList">
                    <ul>
                        <li>
                            <Link to="/" className={hoveredItem === "Inicio" ? "hovered" : ""}
                                onMouseEnter={() => setHoveredItem("Inicio")}
                                onMouseLeave={() => setHoveredItem(null)}>
                                <p>INICIO</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quienes-somos" className={hoveredItem === "Quienes somos" ? "hovered" : ""}
                                onMouseEnter={() => setHoveredItem("Quienes somos")}
                                onMouseLeave={() => setHoveredItem(null)}>
                                <p>QUIÉNES SOMOS</p>
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
                            <Link to="/nuestro-taller" className={hoveredItem === "Nuestro Taller" ? "hovered" : ""}
                                onMouseEnter={() => setHoveredItem("Nuestro Taller")}
                                onMouseLeave={() => setHoveredItem(null)}>
                                <p>NUESTRO TALLER</p>
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
            </div>
        </nav>
    );
};

export default Navbar;
