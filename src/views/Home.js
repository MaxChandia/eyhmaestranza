import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/navbar.css';
import '../styles/home.css';
import Carrousel from "../components/carrousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Slides } from "../components/slides";

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [carrouselImages, setCarrouselImages] = useState([]);
  const [carrouselCurrentIndex, setCarrouselCurrentIndex] = useState(0);

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

  const openImage = (slide, index) => {
    setSelectedImage(slide.src);
    setCarrouselCurrentIndex(index);
    setShowImage(true);
  };

  useEffect(() => {
    setCarrouselImages(Slides);
  }, []);

  const closeImage = () => {
    setSelectedImage(null);
    setShowImage(false);
    setCarrouselCurrentIndex(0);
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); 
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect(); 
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Carrousel />
      <div className="inBetweenText">
        <p className="animate-on-scroll animate-fade-in">Más de 10 años contribuyendo al rubro de la metalmecánica</p>
      </div>
      <div className="workPlaceDescription animate-on-scroll animate-right">
        <img src='/photos/work-1.jpg' alt="workDescription"></img>
        <div className="descriptionText">
          <h1><b>En E&H Maestranza Ltda.</b></h1>
          <p>Contamos con implementos de última tecnología y personal especializado en cada área para satisfacer las necesidades de nuestros clientes. </p>
          <p style={{ marginTop: "20px" }}><b><i><Link to="/nuestro-taller"> <FontAwesomeIcon icon={faArrowRight} /> Revisa nuestro taller</Link></i></b></p>
        </div>
      </div>
      <section className="imageRowContainer animate-on-scroll animate-left">
        <div className="imageRowTitle">
          <p>
            <FontAwesomeIcon icon={faGear} />&nbsp; Nuestros servicios
          </p>
        </div>
        <div className="imageRow ">
          <div className="imageContainer">
            <img src='/photos/image-row-1.jpg' alt="Service 1" />
            <p className="imageText">Reparación y fabricación de piezas y estructuras metálicas</p>
          </div>
          <div className="imageContainer">
            <img src='/photos/image-row-2.jpg' alt="Service 2" />
            <p className="imageText2">Trabajo de tornería y fresado</p>
          </div>
          <div className="imageContainer">
            <img src='/photos/image-row-3.jpg' alt="Service 3" />
            <p className="imageText2">Soldadura</p>
          </div>
          <div className="imageContainer">
            <img src='/photos/image-row-4.jpg' alt="Service 3" />
            <p className="imageText2">Centro Mecanizado</p>
          </div>
        </div>
      </section>
      <section className="products animate-on-scroll animate-">
        <div className="titleProducts">
          <p>Conoce nuestros trabajos</p>
        </div>
        <div className="imageProducts">
          {Slides.map((slide, index) => (
          <img key={slide.id} loading="lazy" fetchPriority="high" src={slide.src} alt={slide.alt}
                onClick={() => openImage(slide, index)}></img>
            ))}
        </div>
      </section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.6366160212824!2d-70.38654535358513!3d-23.59972520931845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b00176ab64f%3A0xfc2f31e3d356c459!2sEyH%20Maestranza%20Ltda.!5e0!3m2!1ses!2scl!4v1715152061691!5m2!1ses!2scl"
        width="100%"
        height="300"
        title="map"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
      <Footer />
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
            loading="lazy"
            src={Slides[carrouselCurrentIndex]?.src}
            alt={Slides[carrouselCurrentIndex]?.alt || "Imagen"}
          />
        )}
      </Modal>
    </div>
  );
};

export default Home;
