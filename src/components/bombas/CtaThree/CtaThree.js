import ctaThree from "@/data/bombas/ctaThree";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import whatsappLaundry from "@/data/bombas/whatsappLaundry";

const { bannerIcons, mocImage, lists, description } = ctaThree;

const CtaThree = () => {
  return (
    <section className="cta-three">
      {bannerIcons.map((banner, index) => (
        <Image
          key={index}
          src={require(`src/assets/images/${banner}`).default.src}
          alt="Awesome Image"
          className={`bubble-${index + 1}`}
        />
      ))}
      <Container>
        <Image
          src={mocImage.src}
          className="cta-three__moc"
          alt="Awesome Image"
        />
        <Row className="no-gutters justify-content-end">
          <Col lg={6} md={12} sm={12} className="d-flex">
            <div className="cta-three__content my-auto">
              <div className="block-title">
                <div className="block-title__text">
                  <span>Amplio surtido en refacciones</span> <br />{" "}
                  <span> para su refrigerador, congelador y A/C </span>
                </div>
              </div>
              <p className="cta-three__text">{description}</p>
              <ul className="cta-three__list">
                {lists.map((item, index) => (
                  <li className="cta-three__list-item" key={index}>
                    <i className="fa fa-check"></i>
                    {item}
                  </li>
                ))}
              </ul>
             <a href={whatsappLaundry.href} className="cta-three__btn">
                Mas información
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaThree;
