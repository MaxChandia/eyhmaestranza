import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Modal from 'react-modal';
import '../styles/services.css'
import { faGear, faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slides } from "../components/slides";

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] =useState(null);
    const [carrouselImages, setCarrouselImages] = useState ([]);
    const [carrouselCurrentIndex, setCarrouselCurrentIndex] = useState (0);
    

    const images = [
        "/photos/carrousel-2.webp",
        "/photos/carrousel-3.webp",
        "/photos/carrousel-4.webp",
        "/photos/carrousel-1.webp"
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "ArrowRight") {
            document.querySelector(".arrowRight").click();
          } else if (event.key === "ArrowLeft") {
            document.querySelector(".arrowLeft").click();
          }
        };
      
        window.addEventListener("keydown", handleKeyDown);
      
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
    
    
      const openImage = (slide) => {
        setSelectedImage(slide.src);
        setShowImage(true); 
      };
    
      useEffect(() => {
        setCarrouselImages(Slides); 
      }, []);
    
      const closeImage = () => {
        setSelectedImage(null);
        setShowImage(false);
      };
     
      const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          closeImage();
        }
      };
    
    
      const previousImage = () => {
        setCarrouselCurrentIndex((prevIndex) => {
          const newIndex = prevIndex === 0 ? carrouselImages.length - 1 : prevIndex - 1;
          setSelectedImage(carrouselImages[newIndex].src); 
          return newIndex;
        });
      };
      
      const nextImg = () => {
        setCarrouselCurrentIndex((prevIndex) => {
          const newIndex = prevIndex === carrouselImages.length - 1 ? 0 : prevIndex + 1;
          setSelectedImage(carrouselImages[newIndex].src); 
          return newIndex;
        });
    };
    

    return (
        <div className="servicesContainer" >
             <Navbar/>
             
            <div className="servicesHeader">
                <img className="serviceImage animate-on-scroll animate-right" alt="serviceImage" src='/photos/services-header.webp'></img>
                <h1 className="animate-on-scroll">EN NUESTRO TALLER GARANTIZAMOS EXCELENTES RESULTADOS</h1>
            </div>
            <section className="serviceCardContainer animate-on-scroll animate-right" >
                <div className="servicesCard">
                    <p className="servicesTitleCard animate-on-scroll animate-right"> <FontAwesomeIcon icon={faGear}  /> Servicios</p>
                    <ul>
                        <li className="animate-on-scroll animate-right"> &gt; Fabricación de estructuras y piezas metálicas</li>
                        <li className="animate-on-scroll animate-right"> &gt; Reparación de componentes industriales</li>
                        <li className="animate-on-scroll animate-right"> &gt; Trabajo de tornería y fresado</li>
                        <li className="animate-on-scroll animate-right"> &gt; Soldadura</li>
                    </ul>
                </div>
                <div className="serviceCardImage ">
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
                {Slides.map((slide, index) => (
              <img key={slide.id} src={slide.src} alt={slide.alt}
                  onClick={() => openImage(slide, index)}></img>
              ))};
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
              <button className="arrowLeft" onClick={previousImage}><FontAwesomeIcon icon={faArrowLeft} /></button>
              <button className="arrowRight" onClick={nextImg}><FontAwesomeIcon icon={faArrowRight} /></button>
              {selectedImage && (
                  <img
                    src={Slides[carrouselCurrentIndex]?.src}
                    alt={Slides[carrouselCurrentIndex]?.alt || "Imagen"}
                  />
                )};
            </Modal>
        </div>
    )
};

export default Services;