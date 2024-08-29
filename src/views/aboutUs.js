import React from "react";
import Footer from "../components/footer";
import Navbar from '../components/navbar';
import '../styles/aboutUs.css';




const AboutUs = () => {
    
 return (
    <div className="aboutUsContainer"  style={{marginTop:"150px"}}>
        <Navbar/>
        <div className="aboutUsDescription">
            <div className="aboutUsText" data-aos="fade-right" data-aos-duration="2000">
                <h1>Sobre Nosotros</h1>
                <p className="cotentText"> Sociedad E&H Maestranza Limitada fue constituida en octubre de 2015 en la ciudad de Antofagasta, con el objetivo de dar continuidad a más de 20 años de experiencia en el rubro de la metalmecánica. A lo largo de estas dos décadas, hemos logrado consolidarnos como un referente en el servicio a la minería y a la industria en la región. Nuestra amplia trayectoria nos ha permitido comprender las necesidades específicas de nuestros clientes y adaptarnos constantemente a las exigencias del mercado.</p>
                <p className="">Conscientes de la importancia de la calidad y la precisión en cada proyecto, en E&H Maestranza Limitada hemos enfocado nuestros esfuerzos en perfeccionar el servicio mediante la incorporación de mano de obra altamente calificada y el uso de tecnología innovadora. Este compromiso nos permite ofrecer soluciones eficientes y de vanguardia, garantizando la satisfacción de nuestros clientes y consolidando nuestra posición en el sector.</p>
            </div>
            <div className="aboutUsImage">
                <img alt="workers" data-aos-duration="2000" src='photos/abouts-us-workers.webp'/>
            </div>           
        </div>
        <Footer/>
    </div>
 );
};

export default AboutUs;