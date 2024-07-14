import React from "react";
import '../styles/carrousel.css';
import { Link } from "react-router-dom";

const Carrousel = () => {
    return(
        <div className="slideContainer" data-aos="fade-in">
               <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/7akUHjWCRNM?autoplay=1&loop=1&playlist=7akUHjWCRNM&controls=0&modestbranding=1&iv_load_policy=3&disablekb=1&mute=1" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen 
                title="Maestranza">
            </iframe>
            <div className="slideText">Aportando con excelencia a la industria minera</div>
            <Link to="/contacto">
                <button className="slideButton" style={{textDecoration:"none", animation: "fadeInFromRight 1s ease forwards"}}>
                    Contactenos
                </button>
            </Link>
        </div>
    );
};

export default Carrousel;
