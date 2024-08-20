import React from "react";
import '../styles/contactPage.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div className="contactPageContainer">
                <div className="imageContactContainer" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                    <img alt="contactImage" src='photos/contact-image.jpg'></img>
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
                                <form action="https://formsubmit.co/maximiliano.chandiaf@gmail.com" method="POST">
                                    <div className="grupo">
                                        <input placeholder="Nombre" type="text" id="nombre" name="nombre" />
                                        <input placeholder="Teléfono o celular" type="text" name="telefono" />
                                    </div>
                                    <div className="grupo">
                                        <input placeholder="Ciudad" type="text" name="ciudad"/>
                                        <input placeholder="Correo electrónico" type="email" name="email" />
                                    </div>
                                    <div className="grupo">
                                        <textarea className="comentarios" placeholder="Comentarios" name="Comentario"></textarea>
                                    </div>
                                    <div className="buttonContainer">
                                    <button>Enviar</button>
                                    </div>
                                </form>
                            </div>
                            <div className="contactPageChannels" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
                                <ul>
                                    <li>Telefono: +55 2 895698</li>
                                    <li>+56 9 42663481</li>
                                    <li>Email: negocios@eyhmaestranza.cl</li>
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
            <div className="map" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" st>
                <iframe title="mapsecond" alt="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.6366160212824!2d-70.38654535358513!3d-23.59972520931845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b00176ab64f%3A0xfc2f31e3d356c459!2sEyH%20Maestranza%20Ltda.!5e0!3m2!1ses!2scl!4v1715152061691!5m2!1ses!2scl"
                    width="auto" 
                    height="500px" 
                    style={{ border: '0' }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
