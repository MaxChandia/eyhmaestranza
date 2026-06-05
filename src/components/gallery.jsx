import React, { useState, useEffect, useRef, useCallback } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Slides } from "./slides"; 

const Gallery = () => {
  const [showImage, setShowImage] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const arrowRightRef = useRef(null);
  const arrowLeftRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!showImage) return; 

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
  }, [showImage]);

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
    <>
      <section className="products animate-on-scroll">
        <div className="titleProducts">
          <h2>Conoce nuestros trabajos</h2>
        </div>
        <div className="imageProducts">
          {Slides.map((slide, index) => (
            <img
              key={slide.id}
              fetchPriority="high"
              src={slide.src}
              alt={slide.alt || `Trabajo ${index + 1}`}
              onClick={() => openImage(index)}
            />
          ))}
        </div>
      </section>

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
    </>
  );
};

export default Gallery;