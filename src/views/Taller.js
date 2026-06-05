import React from "react";
import '../styles/taller.css'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AnimateOnScroll from "../components/AnimateOnScroll";

const Workplace = () => {
    return(
        <div>
            <Navbar/>
            <div className="headerWorkshop">
                <AnimateOnScroll animation="animate-right">
                    <img loading="lazy" src='/photos/taller2.webp' alt="headerWorkshop"/>
                </AnimateOnScroll>
                <AnimateOnScroll animation="animate-left">
                    <p className="firstTitle" >Contamos con equipamiento de vanguardia</p>
                </AnimateOnScroll>
                <AnimateOnScroll  animation="animate-left" delay={0.5}>
                    <p className="secondTitle">Asegurando a nuestros clientes la mejor calidad del mercado</p>
                </AnimateOnScroll>
            </div>

            <div className="workshopCards">
                <AnimateOnScroll className="card" animation="animate-up">
                    <img loading="lazy" src='/photos/taller-imagen-4.webp' alt="workshop1"/>
                    <p className="title">Torno CNC</p>
                    <p className="description">720 x 2500</p>
                </AnimateOnScroll>
                
                <AnimateOnScroll className="card" animation="animate-up">
                    <img loading="lazy" src='/photos/taller-imagen-6.webp' alt="workshop6"/>
                    <p className="title">Torno CNC</p>
                    <p className="description">1030x900x3200</p>
                </AnimateOnScroll>
                
                <AnimateOnScroll className="card" animation="animate-up">
                    <img loading="lazy" src='/photos/taller-imagen-2.webp' alt="workshop2"/>
                    <p className="title">Fresadora Vertical</p>
                    <p className="description">1700x5000</p>
                </AnimateOnScroll>
                
                <AnimateOnScroll className="card" animation="animate-up">
                    <img loading="lazy" src='/photos/taller-imagen-3.webp' alt="workshop3"/>
                    <p className="title">Centro Mecanizado CNC</p>
                    <p className="description">1020 x 540 x 510 1 Ton</p>
                </AnimateOnScroll>
                
                <AnimateOnScroll className="card" animation="animate-up">
                    <img loading="lazy" src='/photos/taller-image-1.webp' alt="workshop4"/>
                    <p className="title">Torno Convencional</p>
                    <p className="description">700x2000</p>
                </AnimateOnScroll>
                
                <AnimateOnScroll className="card" animation="animate-up">
                    <img loading="lazy" src='/photos/taller-imagen-5.webp' alt="workshop5"/>
                    <p className="title">Soldadoras</p>
                </AnimateOnScroll>
            </div>
            <Footer/>
        </div>
    );
};

export default Workplace;