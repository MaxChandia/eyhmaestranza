import React from "react";
import '../styles/contactPage.css';
import cont1 from '../cont1.jpg';
import Navbar from "../components/navbar";

const ContactPage = () => {
    return (
        <div className="contactPageContainer">
            <div className="imageContactContainer">
                <img alt="contactImage" src={cont1}></img>
            </div>
            <div className="contactPageContact">
                <div className="contactPageData">
                    <ul>
                        <li><h2>Contacto</h2></li>
                        <li>Teléfono: 55 2 895698</li>
                        <li>Celular: +56 9 42663481</li>
                        <li>negocios@eyhmaestranza.cl</li>
                    </ul>
                    <div className="formulario">
                        <form>
                            <div className="grupo">
                                <input placeholder="Nombre" type="text" id="nombre" name="nombre" />
                                <input placeholder="Teléfono o celular" type="text" />
                            </div>
                            <div className="grupo">
                                <input placeholder="Ciudad" type="text" />
                                <input placeholder="Correo electrónico" type="email" />
                            </div>
                            <div className="grupo">
                                <textarea className="comentarios" placeholder="Comentarios..."></textarea>
                            </div>
                        </form>
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;