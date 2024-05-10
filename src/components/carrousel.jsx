import React from "react";
import sec2 from '../sec2.gif';
import '../styles/carrousel.css'
import { Link } from "react-router-dom";

const Carrousel = () => {
    return(
        <div className="slideContainer">
            <img src={sec2} className="" />
            <div className="slideText">Más de 10 años aportando al rubro de la metalmecánica</div>
            <Link to="/contacto">
            <button className="slideButton" style={{textDecoration:"none"}}>
                Contactenos</button></Link>
        </div>
    );
};

export default Carrousel;