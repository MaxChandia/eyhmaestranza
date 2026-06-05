import React, { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const ContactInfo = () => {
    const [contactInfo, setContactInfo] = useState({
        nombre: '',
        telefono: '',
        ciudad: '',
        email: '',
        Comentario: ''
    });

    function saveContactInfo(e) {
        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    }  

    const clearContactInfo = async (e) => {
        e.preventDefault();
    
        if (!contactInfo.nombre || !contactInfo.telefono || !contactInfo.ciudad || !contactInfo.email || !contactInfo.Comentario) {
            alert("Todos los campos son obligatorios.");
            return;
        }
    
        try {
            const response = await fetch('https://eyhmaestranza.cl/api/procesar_contacto.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactInfo),
            });

            const result = await response.json();

            if (result.success) {
                alert('Formulario enviado exitosamente.');
                setContactInfo({
                    nombre: '',
                    telefono: '',
                    ciudad: '',
                    email: '',
                    Comentario: ''
                });
            } else {
                alert(`Error al enviar el formulario: ${result.message}`);
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error de conexión con el servidor. Por favor, intenta de nuevo más tarde.');
        }
    };

    return (
        <div className="contactPageContact">
            <div className="contactPageData">
                <ul>
                    <AnimateOnScroll className="titleContact" animation="animate-up">
                        <h1>Contáctanos</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-up">
                        <li>Para cotizar o conocer sobre nuestros servicios no dude en contactarnos a través de los siguientes medios:</li>
                    </AnimateOnScroll>
                </ul>
            </div>
            
            <div className="contactPageBottom">
                <AnimateOnScroll className="formulario" animation="animate-up">
                    <form onSubmit={clearContactInfo}>
                        <div className="grupo">
                            <input placeholder="Nombre" type="text" name="nombre" value={contactInfo.nombre} onChange={saveContactInfo} required />
                            <input placeholder="Teléfono o celular" type="text" name="telefono" value={contactInfo.telefono} onChange={saveContactInfo} required />
                        </div>
                        <div className="grupo">
                            <input placeholder="Ciudad" type="text" name="ciudad" value={contactInfo.ciudad} onChange={saveContactInfo} required />
                            <input placeholder="Correo electrónico" type="email" name="email" value={contactInfo.email} onChange={saveContactInfo} required />
                        </div>
                        <div className="grupo">
                            <textarea className="comentarios" placeholder="Comentarios" name="Comentario" value={contactInfo.Comentario} onChange={saveContactInfo} required></textarea>
                        </div>
                        <div className="buttonContainer">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </AnimateOnScroll>
                
                <AnimateOnScroll className="contactPageChannels" animation="animate-up">
                    <ul>
                        <li>Teléfono:</li>
                        <li>+55 2 895698</li>
                        <li>+56 9 42663481</li>
                        <li>Email: </li>
                        <li>negocios@eyhmaestranza.cl</li>
                    </ul>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default ContactInfo;