import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import whatsappLaundry from "@/data/bombas/whatsappLaundry";

const SingleService = ({ service = {} }) => {
  const { title, description, icon } = service;

  return (
    <Col xl={3} lg={6} md={6} sm={12}>
      <div className="service-one__single">
      <a href={whatsappLaundry.href} >
      <Image src={require(`src/assets/images/${icon}`).default.src} />
        {/* <i className={`service-one__icon ${icon}`}></i> */}
        <h3 className="service-one__title">
          <a href="#">
            {title.split("\n").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span> <br />
              </Fragment>
            ))}
          </a>
        </h3>
        <p className="service-one__text">
          {description.split("\n").map((t, i) => (
            <Fragment key={i}>
              <span>{t}</span> <br />
            </Fragment>
          ))}
        </p>
        
          <i className="nonid-icon-left-arrow service-one__link" ></i>
        </a>
      </div>
    </Col>
  );
};

export default SingleService;
