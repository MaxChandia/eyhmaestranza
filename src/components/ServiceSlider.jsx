import React, { useState, useEffect } from "react";

const ServiceSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []); 

    return (
        <div className="serviceCardImage">
            <button onClick={handlePrevClick}>&lt;</button>
            <img loading="lazy" src={images[currentIndex]} alt="Servicios" />
            <button onClick={handleNextClick}>&gt;</button>
        </div>
    );
};

export default ServiceSlider;