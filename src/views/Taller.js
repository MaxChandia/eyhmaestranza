import React from "react";
import '../styles/taller.css'
import e1 from '../e1.jpg'
import e2 from '../e2.jpg'
import Contact from "../components/contact";

const Workplace = () => {
    return(
        <div className="cardContainer">
            <div className="card">
                <p>Torno CNC 720x2500</p>
                <img alt="torno" src={e2}/>
            </div>
            <div className="card">
                <img alt="centro de mecanizado" src={e1}/>
                <p>Centro de Mecanizado 1020 x 540 x 510</p>
            </div>
            <div className="card">
                <p></p>
                <img/>
            </div>
            <div className="card">
                <p></p>
                <img/>
            </div>
            <Contact/>
        </div>
    );
};

export default Workplace;
