import React from "react";
import Contact from "../components/contact";
import Navbar from '../components/navbar'
import m1 from '../m1.jpg'
import '../styles/aboutUs.css'



const AboutUs = () => {
    
 return (
    <div className="aboutUsContainer" style={{marginTop:"150px"}}>
        <Navbar/>
        <div className="mission">
            <div className="missionText">
            <h1 style={{marginTop:"50px"}}>Sobre Nosotros</h1>
                <p className="cotentText" style={{marginLeft:"50px", marginRight:"50px"}}> Sociedad E&H Maestranza Limitada se constituye en octubre 2015, generando continuidad a los 20 años de servicio en el rubro de la metalmecánica. Dada la experiencia en el servicio a la minería y a la industria se ha orientado nuestra atención al perfeccionamiento del servicio en la mano de obra calificada y tecnología innovadora.</p>
            </div>
            <img alt="workrs" src={m1}/>
        </div>
        <Contact />
    </div>
 );
};

export default AboutUs;