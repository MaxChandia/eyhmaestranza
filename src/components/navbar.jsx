import React, { useEffect} from "react";
import '../styles/navbar.css';
import { Link } from "react-router-dom";
import { faPhone, faEnvelope, faLocationDot, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {

    const handleLinkClick = () => {
        document.getElementById('check').checked = false;
        
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate'); 
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });
    
        document.querySelectorAll('.animate-on-scroll').forEach((element) => {
          observer.observe(element);
        });
    
        return () => observer.disconnect(); 
      }, []);


    return (
        <nav className="navbar">
            <div className="navbar-top">
                <Link to="/">
                    <img src='/photos/logo.webp' alt="eyhmaestranza-logo" className="logo animate-on-scroll animate-right" />
                </Link>
                <ul className="headerContact">
                    <li>
                        <p className="animate-on-scroll animate-left">
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize: '15px' }} /> +55 2 895698 | +56 9 42663481
                        </p>
                    </li>
                    <li>
                        <p className="animate-on-scroll animate-left" >
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '15px' }} /> negocios@eyhmaestranza.cl
                        </p>
                    </li>
                    <li>
                        <p   className="direction animate-on-scroll animate-left">
                            <FontAwesomeIcon icon={faLocationDot} /> Avenida Industrial 7720 Galpón 28
                        </p>
                    </li>
                </ul>
            </div>
            <div className="NavPages animate-on-scroll animate-up">
                <img src='/photos/logo.webp' alt="eyhmaestranza-logo" className="logo" />
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="icons">
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '30px' }} />
                </label>
                <div className="NavPageList">
                    <ul>
                        <li>
                            <Link to="/"
                                onClick={handleLinkClick}
                                aria-label="Ir a la página principal">
                                <p>INICIO</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quienes-somos"
                                onClick={handleLinkClick} 
                                aria-label="Ir a pestaña Quiénes Somos"
                            >
                                <p>QUIÉNES SOMOS</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/servicios"                        
                                onClick={handleLinkClick}
                                aria-label="Ir a pestaña Servicios"
                            >
                                <p>SERVICIOS</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/nuestro-taller"                               
                                onClick={handleLinkClick}
                                aria-label="Ir a pestaña Nuestro Taller"
                            >
                                <p>NUESTRO TALLER</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto" onClick={handleLinkClick}
                                aria-label="Ir a pestaña Contacto"
                            >
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