import React, { useState } from "react";
import c3 from '../c3.jpg'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/services.css'
import { faGear, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car1 from "../car1.jpg"
import car2 from "../car2.jpg"
import car3 from "../car3.jpg"
import car4 from "../car4.jpg"
import p1 from '../p1.jpg'
import p2 from '../p2.jpg'
import p3 from '../p3.jpg'
import p4 from '../p4.jpg'
import p5 from '../p5.jpeg'
import c6 from '../c6.jpg'
import c7 from '../c7.jpg'
import c8 from '../c8.jpg'


const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] =useState(null);

    const images = [car2, car3, car4, car1]

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
            <div className="servicesHeader" data-aos="fade-in" data-aos-duration="1000" style={{height: "600px", width:"100%", display:"flex"}}>
                <img alt="serviceImage" src={c3}></img>
                <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">EN NUESTRO TALLER GARANTIZAMOS EXCELENTES RESULTADOS</h1>
            </div>
            <div className="serviceCardContainer" data-aos="fade-right" data-aos-duration="1000">
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
                    <img src={images[currentIndex]} alt="Service" />
                    <button onClick={handleNextClick}>&gt;</button>
                </div>
            </div>
        <div className="productService" data-aos="fade-up">
            <div className="titleProducts">
                <p>Los calidad de nuestros trabajos demuestran nuestro compromiso</p>
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
            <Footer/>
        </div>
    )
};

export default Services;