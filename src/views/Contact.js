import React, { useState } from "react";
import emailjs from "emailjs-com";
import '../styles/contactPage.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactPage = () => {

    const [contactInfo, setContactInfo] = useState({
        nombre: '',
        telefono: '',
        ciudad: '',
        email: '',
        Comentario: ''
    });

    const saveContactInfo = (e) => {
        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    };

    const clearContactInfo = (e) => {
        e.preventDefault();

        if (!contactInfo.nombre || !contactInfo.telefono || !contactInfo.ciudad || !contactInfo.email || !contactInfo.Comentario) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        emailjs.send(
            'service_dx4jngs',
            'template_b2w35om',
            contactInfo,
            'i5bpqOQH5kvoK7dZ5'
        )
        .then((result) => {
            alert("Correo enviado correctamente");
            setContactInfo({
                nombre: '',
                telefono: '',
                ciudad: '',
                email: '',
                Comentario: ''
            });
        }, (error) => {
            alert("Hubo un problema al enviar los datos");
        });
    };

    return (
        <div>
            <Navbar />
            <div className="contactPageContainer">
                <div className="imageContactContainer" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                    <img alt="contactImage" src='photos/contact-image.webp'></img>
                </div>
                <div className="contactPageContact">
                    <div className="contactPageData">
                        <ul>
                            <li className="titleContact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"><h1>Contáctanos</h1></li>
                            <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Para cotizar o conocer sobre nuestros servicios no dude en contactarnos a través de los siguientes medios:</li>
                        </ul>
                    </div>
                    <div className="contactPageBottom">
                        <div className="formulario" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                            <form onSubmit={clearContactInfo}>
                                <div className="grupo">
                                    <input 
                                        placeholder="Nombre" 
                                        type="text" 
                                        id="nombre" 
                                        name="nombre" 
                                        value={contactInfo.nombre} 
                                        onChange={saveContactInfo} 
                                        required 
                                    />
                                    <input 
                                        placeholder="Teléfono o celular" 
                                        type="text" 
                                        name="telefono" 
                                        value={contactInfo.telefono} 
                                        onChange={saveContactInfo} 
                                        required 
                                    />
                                </div>
                                <div className="grupo">
                                    <input 
                                        placeholder="Ciudad" 
                                        type="text" 
                                        name="ciudad" 
                                        value={contactInfo.ciudad} 
                                        onChange={saveContactInfo} 
                                        required 
                                    />
                                    <input 
                                        placeholder="Correo electrónico" 
                                        type="email" 
                                        name="email" 
                                        value={contactInfo.email} 
                                        onChange={saveContactInfo} 
                                        required 
                                    />
                                </div>
                                <div className="grupo">
                                    <textarea 
                                        className="comentarios" 
                                        placeholder="Comentarios" 
                                        name="Comentario" 
                                        value={contactInfo.Comentario} 
                                        onChange={saveContactInfo} 
                                        required 
                                    ></textarea>
                                </div>
                                <div className="buttonContainer">
                                    <button type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                        <div className="contactPageChannels" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
                            <ul>
                                <li>Teléfono:</li>
                                <li>+55 2 895698</li>
                                <li>+56 9 42663481</li>
                                <li>Email: </li>
                                <li>negocios@eyhmaestranza.cl</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mapText" data-aos="fade-in" data-aos-duration="1000">
                <p data-aos="fade-up" data-aos-duration="1000">
                    También puedes encontrarnos en Avenida Industrial 7720, Galpón 28 del
                    Parque Industrial AGPIA 
                </p>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    Entre las avenidas Radomiro Tomic y Pedro Aguirre Cerda
                </p>
            </div>
            <div className="map" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                <iframe title="mapsecond" alt="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.6366160212824!2d-70.38654535358513!3d-23.59972520931845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b00176ab64f%3A0xfc2f31e3d356c459!2sEyH%20Maestranza%20Ltda.!5e0!3m2!1ses!2scl!4v1715152061691!5m2!1ses!2scl"
                    width="auto" 
                    height="500px" 
                    style={{ border: '0' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;