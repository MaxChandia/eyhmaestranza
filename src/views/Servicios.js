import React from "react";
import c3 from '../c3.jpg'


const Services = () => {
    return (
        <div className="servicesContainer" style={{width:"100%", height:"100%", marginTop:"150px"}}>
            <div className="servicesHead" style={{height: "600px", width:"100%", display:"flex"}}>
                <img alt="serviceImage" src={c3} style={{height:"550px", width:"100%"}}></img>
                <h1 style={{position:"absolute", color:"white", marginLeft:"850px", marginTop:"100px"}}>EN NUESTRO TALLER GARANTIZAMOS EXCELENTES RESULTADOS</h1>
            </div>
            <div style={{display:"flex", justifyContent: "center", height: "200px"}}>
                <h1>Contamos con profesionales especializados para cada área</h1>
            </div>
            <div className="serviceCardContainer">
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
};

export default Services;