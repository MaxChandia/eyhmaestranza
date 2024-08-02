import React from "react";
import Footer from "../components/footer";
import Navbar from '../components/navbar'
import m1 from '../m1.jpg'
import '../styles/aboutUs.css'



const AboutUs = () => {
    
 return (
    <div className="aboutUsContainer"  style={{marginTop:"150px"}}>
        <Navbar/>
        <div className="aboutUsDescription">
            <div className="aboutUsText" data-aos="fade-right" data-aos-duration="2000">
            <h1 style={{marginTop:"80px"}}>Sobre Nosotros</h1>
                <p className="cotentText"> Sociedad E&H Maestranza Limitada fue constituida en octubre de 2015, con el objetivo de dar continuidad a más de 20 años de experiencia en el rubro de la metalmecánica. A lo largo de estas dos décadas, hemos logrado consolidarnos como un referente en el servicio a la minería y a la industria en general. Nuestra amplia trayectoria nos ha permitido comprender las necesidades específicas de nuestros clientes y adaptarnos constantemente a las exigencias del mercado.</p>
                <p className="">Conscientes de la importancia de la calidad y la precisión en cada proyecto, en E&H Maestranza Limitada hemos enfocado nuestros esfuerzos en perfeccionar el servicio mediante la incorporación de mano de obra altamente calificada y el uso de tecnología innovadora. Este compromiso nos permite ofrecer soluciones eficientes y de vanguardia, garantizando la satisfacción de nuestros clientes y consolidando nuestra posición en el sector.</p>
            </div>
            <img alt="workrs" data-aos="fade-left" data-aos-duration="2000" src={m1}/>
        </div>
        <Footer/>
    </div>
 );
};

export default AboutUs;