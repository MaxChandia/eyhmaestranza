import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Modal from 'react-modal';
import '../styles/services.css'
import { faGear} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] =useState(null);

    const images = [
        "/photos/carrousel-2.jpg",
        "/photos/carrousel-3.jpg",
        "/photos/carrousel-4.jpg",
        "/photos/carrousel-1.jpg"
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    
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
        <div className="servicesContainer" >
             <Navbar/>
            <div className="servicesHeader" data-aos="fade-in" data-aos-duration="1000">
                <img className="serviceImage" alt="serviceImage" src='/photos/services-header.jpg'></img>
                <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">EN NUESTRO TALLER GARANTIZAMOS EXCELENTES RESULTADOS</h1>
            </div>
            <section className="serviceCardContainer" data-aos="fade-right" data-aos-duration="1000">
                <div className="servicesCard">
                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500"> <FontAwesomeIcon icon={faGear}  /> Servicios</p>
                    <ul>
                        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500"> &gt; Fabricación de estructuras y piezas metálicas</li>
                        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600"> &gt; Reparación de componentes industriales</li>
                        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700"> &gt; Trabajo de tornería y fresado</li>
                        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800"> &gt; Soldadura</li>
                    </ul>
                </div>
                <div className="serviceCardImage">
                    <button onClick={handlePrevClick}>&lt;</button>
                    <img src={images[currentIndex]} alt="Servicios" />
                    <button onClick={handleNextClick}>&gt;</button>
                </div>
            </section >
        <section  className="productService">
            <div className="titleProducts">
                <p>Los calidad de nuestros trabajos demuestran nuestro compromiso</p>
                <div className="underline"></div>
            </div>
            <div className="imageProducts" >
                <img src="/photos/product-1.jpg" alt="Producto 1" onClick={() => openImage("/photos/product-1.jpg")}/>
                <img src="/photos/product-2.jpg" alt="Producto 2" onClick={() => openImage("/photos/product-2.jpg")}/>
                <img src="/photos/product-3.jpg" alt="Producto 3" onClick={() => openImage("/photos/product-3.jpg")}/>
                <img src="/photos/product-4.jpg" alt="Producto 4" onClick={() => openImage("/photos/product-4.jpg")}/>
            </div>
            <div className="imageProducts">
                <img src="/photos/product-5.jpeg" alt="Producto 5" onClick={() => openImage("/photos/product-5.jpeg")}/>
                <img src="/photos/product-6.jpg"alt="Producto 6" onClick={() => openImage("/photos/product-6.jpg")}/>
                <img src="/photos/product-7.jpg" alt="Producto 7" onClick={() => openImage("/photos/product-7.jpg")}/>
                <img src="/photos/product-8.jpg" alt="Producto 8" onClick={() => openImage("/photos/product-8.jpg")}/>
            </div>
        </section >
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
    )
};

export default Services;