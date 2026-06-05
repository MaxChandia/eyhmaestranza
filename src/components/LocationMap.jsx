import React from 'react';

const LocationMap = () => {
  return (
    <section className="mapContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.6366160212824!2d-70.38654535358513!3d-23.59972520931845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b00176ab64f%3A0xfc2f31e3d356c459!2sEyH%20Maestranza%20Ltda.!5e0!3m2!1ses!2scl!4v1715152061691!5m2!1ses!2scl"
        width="100%"
        height="300"
        title="Ubicación en E&H Maestranza"
        style={{ border: 0, display: "block" }} /* display: block quita pequeños márgenes extraños abajo del iframe */
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default LocationMap;