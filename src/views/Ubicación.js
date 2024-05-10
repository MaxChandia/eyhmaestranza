import React from "react";
import '../styles/ubication.css'

const Ubication = () =>{
    return (
        <div className="ubication" style={{marginTop:"150px"}}>
            <div className="map" st>
                <iframe title="mapsecond" alt="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.6366160212824!2d-70.38654535358513!3d-23.59972520931845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b00176ab64f%3A0xfc2f31e3d356c459!2sEyH%20Maestranza%20Ltda.!5e0!3m2!1ses!2scl!4v1715152061691!5m2!1ses!2scl"
                    width="auto" 
                    height="500px" 
                    style={{ border: '0' }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="mapText"  >
                <p>
                    Nos ubicamos en Avenida Industrial 7720 Galpón 28
Parque Industrial AGPIA
Antofagasta
                </p>

            </div>
        </div>
    )
}

export default Ubication;