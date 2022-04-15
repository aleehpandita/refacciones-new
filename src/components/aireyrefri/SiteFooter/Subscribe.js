import React from "react";
import { Container } from "react-bootstrap";
import whatsappLaundry from "@/data/whatsappLaundry";

const Subscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("email"));
    window.location.href = `${whatsappLaundry.href}`;
  };

  return (
    <div className="site-footer__subscribe">
      <Container>
        <div className="block-title text-center">
          <div className="block-title__text">
            <span>Obtén mas información para</span> <br />{" "}
            <span>conseguir tus refacciones originales</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="site-footer__subscribe-form">
          <input type="text" name="email" placeholder="CENTRO IXOYE DE SERVICIO Y REFACCIONES" disabled />
          <button type="submit"> <i className="fa fa-whatsapp"></i> WHATSAPP</button>
        </form>
      </Container>
    </div>
  );
};

export default Subscribe;
