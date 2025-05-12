import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState(null);
  const arrowRightRef = useRef(null);
  const arrowLeftRef = useRef(null);

  // Control teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        arrowRightRef.current?.click();
      } else if (event.key === "ArrowLeft") {
        arrowLeftRef.current?.click();
      } else if (event.key === "Escape") {
        closeImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Observador para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openImage = (index) => {
    setSelectedIndex(index);
    setShowImage(true);
  };

  const closeImage = () => {
    setShowImage(false);
    setSelectedIndex(null);
  };

  const previousImage = useCallback(() => {
    setSelectedIndex(prev => (prev === 0 ? Slides.length - 1 : prev - 1));
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex(prev => (prev === Slides.length - 1 ? 0 : prev + 1));
  }, []);

  const selectedSlide = Slides[selectedIndex] || {};

  return (
    <div className="App">
      <Navbar />
      <Carrousel />

      <div className="inBetweenText">
        <p className="animate-on-scroll animate-fade-in">
          Más de 10 años contribuyendo al rubro de la metalmecánica
        </p>
      </div>

      <div className="workPlaceDescription animate-on-scroll animate-right">
        <img loading="lazy" src="/photos/work-1.webp" alt="Taller de trabajo" />
        <div className="descriptionText">
          <h2><b>En E&H Maestranza Ltda.</b></h2>
          <p>Contamos con implementos de última tecnología y personal especializado en cada área para satisfacer las necesidades de nuestros clientes.</p>
          <p style={{ marginTop: "20px" }}>
            <b><i><Link to="/nuestro-taller">
              <FontAwesomeIcon icon={faArrowRight} /> Revisa nuestro taller
            </Link></i></b>
          </p>
        </div>
      </div>

      <section className="imageRowContainer animate-on-scroll animate-left">
        <div className="imageRowTitle">
          <h2><FontAwesomeIcon icon={faGear} />&nbsp; Nuestros servicios</h2>
        </div>
        <div className="imageRow">
          {[
            { src: '/photos/image-row-1.webp', text: 'Reparación y fabricación de componentes metálicos' },
            { src: '/photos/image-row-2.webp', text: 'Trabajo de tornería y fresado' },
            { src: '/photos/image-row-3.webp', text: 'Soldadura' },
            { src: '/photos/image-row-4.webp', text: 'Centro Mecanizado' }
          ].map((item, i) => (
            <div className="imageContainer" key={i}>
              <img loading="lazy" src={item.src} alt={`Servicio ${i + 1}`} />
              <p className={`imageText${i > 0 ? "2" : ""}`}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products animate-on-scroll">
        <div className="titleProducts">
          <h2>Conoce nuestros trabajos</h2>
        </div>
        <div className="imageProducts">
          {Slides.map((slide, index) => (
            <img
              key={slide.id}
              loading="lazy"
              fetchPriority="high"
              src={slide.src}
              alt={slide.alt || `Trabajo ${index + 1}`}
              onClick={() => openImage(index)}
            />
          ))}
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.6366160212824!2d-70.38654535358513!3d-23.59972520931845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b00176ab64f%3A0xfc2f31e3d356c459!2sEyH%20Maestranza%20Ltda.!5e0!3m2!1ses!2scl!4v1715152061691!5m2!1ses!2scl"
        width="100%"
        height="300"
        title="Ubicación en Google Maps"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <Footer />

      <Modal
        isOpen={showImage}
        onRequestClose={closeImage}
        contentLabel="Vista ampliada del trabajo"
        className="lightbox"
        overlayClassName="lightbox-overlay"
        shouldCloseOnOverlayClick={true}
      >
        <button ref={arrowLeftRef} className="arrowLeft" onClick={previousImage}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button ref={arrowRightRef} className="arrowRight" onClick={nextImage}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        {selectedSlide?.src && (
          <img
            loading="lazy"
            src={selectedSlide.src}
            alt={selectedSlide.alt || "Imagen ampliada"}
          />
        )}
      </Modal>
    </div>
  );
};

export default Home;
