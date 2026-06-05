import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Gallery from "../components/gallery";
import ServiceSlider from "../components/ServiceSlider";
import '../styles/services.css'
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
    return (
        <div className="servicesContainer">
            <Navbar/>
            
            <AnimateOnScroll className="serviceCardContainer" animation="animate-right">
                <div className="servicesCard">
                    <div className="servicesCardText">
                        <AnimateOnScroll className="servicesTitleCard" animation="animate-right"> 
                            <FontAwesomeIcon icon={faGear} /> Servicios
                        </AnimateOnScroll>
                        <ul>
                            <AnimateOnScroll as="li" animation="animate-right"> &gt; Fabricación de estructuras y piezas metálicas</AnimateOnScroll>
                            <AnimateOnScroll as="li" animation="animate-right"> &gt; Reparación de componentes industriales</AnimateOnScroll>
                            <AnimateOnScroll as="li" animation="animate-right"> &gt; Trabajo de tornería y fresado</AnimateOnScroll>
                            <AnimateOnScroll as="li" animation="animate-right"> &gt; Centro Mecanizado</AnimateOnScroll>
                            <AnimateOnScroll as="li" animation="animate-right"> &gt; Soldadura</AnimateOnScroll>
                        </ul>
                    </div>
                </div>
                
                <ServiceSlider />

            </AnimateOnScroll>

            <Gallery />
            
            <Footer/>
        </div>
    )
};

export default Services;