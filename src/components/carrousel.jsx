import React from "react";
import '../styles/carrousel.css';
import { Link } from "react-router-dom";

const Carrousel = () => {
    return(
    <div className="slideContainer animation-fade-in">
        <video 
            className="videoFondo"
            autoPlay 
            loop 
            muted 
            playsInline
        >
            <source src="/eyh_video.mp4" type="video/mp4" />
        </video>
        
        <div className="slideTextContainer">
            <div className="slideText animate-on-scroll animate-right" >
                Aportando con excelencia a la industria minera
            </div>
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
