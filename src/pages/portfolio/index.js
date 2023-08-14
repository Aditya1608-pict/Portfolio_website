import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, internships, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Experience </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {dataportfolio.map((data, i) => (
            <div key={i} className="service_py-4">
              <h4 className="service__title">{data.title}</h4>
              <p className="service_desc">{data.description}</p>
            </div>
          ))}
        </div>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Internships </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {internships.map((data, i) => (
            <div key={i} className="service_py-4">
              <h4 className="service__title">{data.title}</h4>
              <p className="service_desc">{data.description}</p>
              <a href={data.link}>Link</a>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
//   <img src={data.img} alt={data.title} />
