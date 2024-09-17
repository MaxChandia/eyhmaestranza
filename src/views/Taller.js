import React from "react";
import '../styles/taller.css'
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Workplace = () => {
    return(
        <div>
       <Navbar/>
       <div className="headerWorkshop" >
            <img className= "animate-on-scroll animate-right" src='/photos/taller2.jpg' alt="headerWorkshop"></img>
            <p className="firstTitle animate-on-scroll animate-left">Contamos con equipamiento de vanguardia</p>
            <p className="secondTitle animate-on-scroll animate-left">Asegurando a nuestros clientes la mejor calidad del mercado</p>
       </div>
       <div className="workshopCards">
        <div className="card animate-on-scroll animate-up">
                <img src='/photos/taller-image-5.jpg' alt="workshop1"></img>
                <p className="title">Torno CNC</p>
                <p className="description">720 x 2500</p>
            </div>
            <div className="card animate-on-scroll animate-up">
                <img src='/photos/taller-image-7.jpg' alt="workshop6"></img>
                <p className="title">Torno CNC</p>
                <p className="description">1030x900x3200</p>
            </div>
            <div className="card animate-on-scroll animate-up">
                <img src='/photos/taller-image-2.jpg' alt="workshop2"></img>
                <p className="title">Fresadora Vertical</p>
                <p className="description">1700x5000</p>
            </div>
            <div className="card animate-on-scroll animate-up">
                <img src='/photos/taller-image-4.jpg' alt="workshop3"></img>
                <p className="title">Centro Mecanizado CNC</p>
                <p className="description">1020 x 540 x 510 1 Ton</p>
            </div >
            <div className="card animate-on-scroll animate-up"  >
                <img src='/photos/taller-image-1.jpg' alt="workshop4"></img>
                <p className="title">Torno Convencional</p>
                <p className="description">700x2000</p>
                <p className="description"></p>
            </div>
            <div className="card animate-on-scroll animate-up">
                <img src='/photos/taller-image-6.jpg' alt="workshop5"></img>
                <p className="title">Soldadoras</p>
            </div>
       </div>
       <Footer/>
       </div>
    );
};

export default Workplace;
