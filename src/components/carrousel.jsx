import React from "react";
import sec from '../sec.gif';
import '../styles/carrousel.css'
import { Link } from "react-router-dom";

const Carrousel = () => {
    return(
        <div className="slideContainer">
            <img alt="workEyh" src={sec} className="" />
            <div className="slideText">Más de 10 años aportando al rubro de la metalmecánica</div>
            <Link to="/contacto">
            <button className="slideButton" style={{textDecoration:"none"}}>
                Contactenos</button></Link>
        </div>
    );
};

export default Carrousel;