import React from "react";
import '../styles/taller.css'
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Workplace = () => {
    return(
        <div>
       <Navbar/>
       <div className="headerWorkshop" >
            <img className= "animate-on-scroll animate-right" src='/photos/taller-image-3.webp' alt="headerWorkshop"></img>
            <p className="firstTitle animate-on-scroll animate-left">Contamos con equipamiento de vanguardia</p>
            <p className="secondTitle animate-on-scroll animate-left">Asegurando a nuestros clientes la mejor calidad del mercado</p>
       </div>
       <div className="workshopCards">
        <div className="card">
                <img src='/photos/taller-image-5.webp' alt="workshop1"></img>
                <p className="title">Torno CNC</p>
                <p className="description">720 x 2500</p>
            </div>
            <div className="card">
                <img src='/photos/taller-image-2.webp' alt="workshop2"></img>
                <p className="title">Fresadora de Torreta</p>
                <p className="description"></p>
            </div>
            <div className="card">
                <img src='/photos/taller-image-4.webp' alt="workshop3"></img>
                <p className="title">Centro Mecanizado CNC</p>
                <p className="description">1020 x 540 x 510 1 Ton</p>
            </div >
            <div className="card"  >
                <img src='/photos/taller-image-1.webp' alt="workshop4"></img>
                <p className="title">Torno</p>
                <p className="description"></p>
            </div>
            <div className="card">
                <img src='/photos/taller-image-6.webp' alt="workshop5"></img>
                <p className="title">Soldadoras</p>
                <p className="description"></p>
            </div>
       </div>
       <Footer/>
       </div>
    );
};

export default Workplace;
