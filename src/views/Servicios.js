import React from "react";
import c3 from '../c3.jpg'
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const Services = () => {
    return (
        <div className="servicesContainer" style={{width:"100%", height:"100%", marginTop:"150px"}}>
             <Navbar/>
            <div className="servicesHead" style={{height: "600px", width:"100%", display:"flex"}}>
                <img alt="serviceImage" src={c3} style={{height:"550px", width:"100%"}}></img>
                <h1 style={{position:"absolute", color:"white", marginLeft:"850px", marginTop:"100px"}}>EN NUESTRO TALLER GARANTIZAMOS EXCELENTES RESULTADOS</h1>
            </div>
            <div style={{display:"flex", justifyContent: "center", height: "100px"}}>
                <h1>Contamos con profesionales especializados en cada área</h1>
            </div>
            <div className="serviceCardContainer" style={{width:"100%", height: "600px"}}>
                <div style={{width:"50%", height: "600px", backgroundColor: "red"}}>
                <h1>Ofrecemos</h1>
                </div>
                <div className="serviceCardImage" style={{width:"50%"}}>

                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Services;