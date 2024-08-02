import React from "react";
import '../styles/taller.css'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import t1 from '../t1.jpg'
import t2 from '../t2.jpg'
import t3 from '../t3.jpg'
import t4 from '../t4.jpg'
import t5 from '../t5.jpg'
import t6 from '../t6.jpg'

const Workplace = () => {
    return(
        <div>
       <Navbar/>
       <div className="headerWorkshop" data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="500">
        <img src={t3} alt="headerWorkshop"></img>
        <p className="firstTitle" data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="900">Contamos con equipamiento de vanguardia</p>
        <p className="secondTitle" data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000">Asegurando a nuestros clientes la mejor calidad del mercado</p>
       </div>
       <div className="workshopCards">
       <div className="card" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="500">
            <img src={t5} alt="workshop1"></img>
            <p className="title">Torno CNC</p>
            <p className="description">720 x 2500</p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="600">
            <img src={t2} alt="workshop2"></img>
            <p className="title">Fresadora de Torreta</p>
            <p className="description"></p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="700">
            <img src={t4} alt="workshop3"></img>
            <p className="title">Centro Mecanizado CNC</p>
            <p className="description">1020 x 540 x 510 1 Ton</p>
        </div >
        <div className="card" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="500">
            <img src={t1} alt="workshop4"></img>
            <p className="title">Torno</p>
            <p className="description"></p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="600">
            <img src={t6} alt="workshop5"></img>
            <p className="title">Soldadoras</p>
            <p className="description"></p>
        </div>
       </div>
       <Footer/>
       </div>
    );
};

export default Workplace;
