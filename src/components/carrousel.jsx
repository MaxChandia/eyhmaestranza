import React from "react";
import '../styles/carrousel.css';
import { Link } from "react-router-dom";

const Carrousel = () => {
    return(
        <div className="slideContainer animation-fade-in" >
               <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/7akUHjWCRNM?autoplay=1&loop=1&playlist=7akUHjWCRNM&controls=0&modestbranding=1&iv_load_policy=3&disablekb=1&mute=1" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen 
                title="Maestranza">
            </iframe>
            <div className="slideTextContainer">
            <div className="slideText animate-on-scroll animate-right" >Aportando con excelencia a la industria minera</div>
            <Link to="/contacto">
            <button className="slideButton">
                    Contáctenos
            </button>
            </Link>
            </div>
        </div>
    );
};

export default Carrousel;
