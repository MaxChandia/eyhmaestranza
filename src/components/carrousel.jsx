import React from "react";
import sec1 from '../sec1.gif';
import '../styles/carrousel.css'
import { Link } from "react-router-dom";

const Carrousel = () => {
    return(
        <div className="slideContainer">
            <img alt="workEyh" src={sec1} className="" />
            <div className="slideText">Aportando con excelencia a la industria minera</div>
            <Link to="/contacto">
            <button className="slideButton" style={{textDecoration:"none"}}>
                Contactenos</button></Link>
        </div>
    );
};

export default Carrousel;