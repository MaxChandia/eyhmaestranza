import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carrousel from "../components/carrousel";
import Gallery from "../components/gallery";
import AnimateOnScroll from "../components/AnimateOnScroll";
import LocationMap from "../components/LocationMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import '../styles/navbar.css';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Carrousel />

      <AnimateOnScroll className="inBetweenText" animation="animate-fade-in">
        <p>Más de 10 años contribuyendo al rubro de la metalmecánica</p>
      </AnimateOnScroll>

      <AnimateOnScroll className="workPlaceDescription" animation="animate-right">
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
      </AnimateOnScroll>

      <AnimateOnScroll className="imageRowContainer" animation="animate-left">
        <div className="imageRowTitle">
          <h2><FontAwesomeIcon icon={faGear} />  Nuestros servicios</h2>
        </div>
        <div className="imageRow">
        </div>
      </AnimateOnScroll>

      <Gallery />

      <LocationMap />

      <Footer />
    </div>
  );
};

export default Home;