import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
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
import c6 from '../c6.jpg'
import c7 from '../c7.jpg'
import c8 from '../c8.jpg'
import aaaaa from '../aaaaa.jpg'
import imgrow1 from '../imagerow1.jpg'
import imgrow2 from '../imagerow2.jpg'
import imgrow3 from '../imagerow3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () =>{
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] =useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
    setShowImage(true); 
  };

  const closeImage = () => {
    setSelectedImage(null);
    setShowImage(false);
  };
 
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeImage();
    }
  };

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
            <h1><b>En E&H Maestranza Ltda.</b></h1>
            <p>Contamos con implementos de última tecnología y personal especializado en cada área para satisfacer las necesidades de nuestros clientes. </p>
            <p style={{marginTop:"20px"}}><b><i><Link to="/nuestrotaller"> <FontAwesomeIcon icon={faArrowRight} /> Revisa nuestro taller</Link></i></b></p>

          </div>
        </div>
        <div className="imageRowTitle" data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000">
                <p>
                    <FontAwesomeIcon icon={faGear} /> Nuestros servicios
                </p>
            </div>
            <div className="imageRow" data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000">
                <div className="imageContainer">
                    <img src={imgrow1} alt="Service 1" />
                    <p className="imageText">Reparación y fabricación de  piezas y estructuras metálicas</p>
                </div>
                <div className="imageContainer">
                    <img src={imgrow2} alt="Service 2" />
                    <p className="imageText">Trabajo de tornería y fresado</p>
                </div>
                <div className="imageContainer">
                    <img src={imgrow3} alt="Service 3" />
                    <p className="imageText">Soldadura</p>
                </div>
            </div>
      <div className="products" data-aos="fade-up">
        <div className="titleProducts">
            <p>Conoce nuestros trabajos</p>
            <div className="underline"></div>
        </div>
        <div className="imageProducts" >
            <img src={p1} alt="Producto 1" onClick={() => openImage(p1)}/>
            <img src={p2}alt="Producto 2" onClick={() => openImage(p2)}/>
            <img src={p3} alt="Producto 3" onClick={() => openImage(p3)}/>
            <img src={p4} alt="Producto 3" onClick={() => openImage(p4)}/>
        </div>
        <div className="imageProducts">
            <img src={p5} alt="Producto 1" onClick={() => openImage(p1)}/>
            <img src={c6}alt="Producto 2" onClick={() => openImage(p1)}/>
            <img src={c7} alt="Producto 3" onClick={() => openImage(p1)}/>
            <img src={c8} alt="Producto 3" onClick={() => openImage(p1)}/>
        </div>
    </div>
          {/* <div className="partners">
            <h1>
              Realizamos trabajos para las siguientes empresas
            </h1>
          </div> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.6366160212824!2d-70.38654535358513!3d-23.59972520931845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b00176ab64f%3A0xfc2f31e3d356c459!2sEyH%20Maestranza%20Ltda.!5e0!3m2!1ses!2scl!4v1715152061691!5m2!1ses!2scl"  
            width="100%" 
            height="300"
            title="map"
            style={{ border: '0' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"/>
            <Footer/>
            <Modal
              isOpen={showImage}
              onRequestClose={closeImage}
              onClick={handleOverlayClick}
              contentLabel="Image Lightbox"
              className="lightbox"
              overlayClassName="lightbox-overlay"
            >
              {selectedImage && <img src={selectedImage} alt="Selected" />}
            </Modal>
    </div>
    );
  };

export default Home;