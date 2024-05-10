import React from "react";
import '../styles/contactPage.css';
import c2 from '../c2.jpg'
import Navbar from "../components/navbar";

const ContactPage = () => {
    return (
        <div className="ContactPageContainer">
            <Navbar/>
            <div className="imageContactContainer">
                <img alt="contactImage" src={c2}></img>
            </div>
            <div className="titleContainer">
                <h1>Comuníquese con nosotros</h1>
            </div>
            <div className="contactPageContainer" >
                <ul>
                    <li><h2>Contacto</h2></li>
                    <li>Teléfono: 55 2 895698</li>
                    <li>Celular: +56 9 42663481</li>
                    <li>negocios@eyhmaestranza.cl</li>
                </ul>
                <div className="formulario">
                <form>
                    <div class="grupo">
                        <input placeholder="Nombre" type="text" id="nombre" name="nombre"/>
                        <input placeholder="Teléfono o celular"/>
                    </div>
                    <div class="grupo">
                        <input placeholder="Ciudad"/>
                        <input placeholder="Correo electrónico"/>
                    </div>
                    <div class="grupo">
                        <textarea className="comentarios" placeholder="Comentarios..."></textarea>
                    </div>
                </form>
                <button>Enviar</button>
            </div>
            </div>
        </div>
    );
};

export default ContactPage;