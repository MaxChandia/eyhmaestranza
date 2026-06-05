import React from "react";
import '../styles/contactPage.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import LocationMap from "../components/LocationMap";
import ContactInfo from "../components/ContactInfo"; // 👈 Tu nuevo componente

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div className="contactPageContainer">
                <AnimateOnScroll className="imageContactContainer" animation="animate-right">
                    <img loading="lazy" alt="contactImage" src='/photos/contact-image.webp' />
                </AnimateOnScroll>
    
                <ContactInfo />
            </div>
            
            <div className="mapText">
                <AnimateOnScroll animation="animate-up">
                    <p>También puedes encontrarnos en Avenida Industrial 7720, Galpón 28 del Parque Industrial AGPIA</p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="animate-up">
                    <p>Entre las avenidas Radomiro Tomic y Pedro Aguirre Cerda</p>
                </AnimateOnScroll>
            </div>
            
            <div className="map">
                <LocationMap />
            </div>
            
            <Footer />
        </div>
    );
};

export default ContactPage;