import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/contact.css';
import Carrousel from "../components/carrousel";
import p1 from '../p1.jpg'
import p2 from '../p2.jpg'
import p3 from '../p3.jpg'
import p4 from '../p4.jpg'
import p5 from '../p5.jpeg'
import aaaaa from '../aaaaa.jpg'

const Home = () =>{
  const [showImage, setShowImage] = useState(false);
 

  return (
    <div className="App">
      <Navbar/>
      <Carrousel/>
      <div className="inBetweenText" >
        <p data-aos="fade-in" data-aos-duration="1000">Más de 10 años contribuyendo al rubro de la metalmecánica</p>
      </div>
      <div className="workPlaceDescription" data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="1000">
        <img src={aaaaa}></img>
        <div className="descriptionText">
          <h1><b>En EyH Maestranza Ltda.</b></h1>
          <p>Contamos con implementos de última tecnología y personal especializado en cada área para satisfacer las necesidades de nuestros clientes. </p>
          <p style={{marginTop:"20px"}}><b><i><Link to="/nuestrotaller">Revisa nuestro taller</Link></i></b></p>

        </div>
      </div>
     <div className="products" data-aos="fade-up">
    <div className="titleProducts">
        <h1>Conoce nuestros trabajos</h1>
        <div className="underline"></div>
    </div>
    <div className="imageProducts" >
        <img src={p1} alt="Producto 1" onClick={() => setShowImage(!showImage)}/>
        <img src={p2}alt="Producto 2" />
        <img src={p3} alt="Producto 3" />
        <img src={p4} alt="Producto 3" />
    </div>
    <div className="imageProducts">
        <img src={p5} alt="Producto 1" />
        <img src={p2}alt="Producto 2" />
        <img src={p3} alt="Producto 3" />
        <img src={p3} alt="Producto 3" />
    </div>
    <div className="imageProducts">
        <img src={p1} alt="Producto 1" />
        <img src={p2}alt="Producto 2" />
        <img src={p3} alt="Producto 3" />
        <img src={p3} alt="Producto 3" />
    </div>
  </div>
    {showImage && (
          <div className="expandedImage">
          <img src alt="Servicios" onClick={() => setShowImage(false)} />
          </div>
        )}
        <div className="partners">
          <h1>
            Realizamos trabajos para las siguientes empresas
          </h1>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.6366160212824!2d-70.38654535358513!3d-23.59972520931845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b00176ab64f%3A0xfc2f31e3d356c459!2sEyH%20Maestranza%20Ltda.!5e0!3m2!1ses!2scl!4v1715152061691!5m2!1ses!2scl"  
          width="100%" 
          height="300"
          title="map"
          style={{ border: '0' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"/>
          <Footer/>
    </div>
    );
  };

export default Home;