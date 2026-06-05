import React from "react";
import '../styles/carrousel.css';
import { Link } from "react-router-dom";
import AnimateOnScroll from "./AnimateOnScroll";

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
            <AnimateOnScroll className="slideText" animation="animate-right" delay={1}>
                <div  >
                    Aportando con excelencia a la industria minera
                </div>
            </AnimateOnScroll>
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
