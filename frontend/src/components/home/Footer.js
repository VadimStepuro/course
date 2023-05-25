import React from "react";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p>Copyright © {new Date().getFullYear()} PC Accessories. Все права защищены.</p>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled d-flex justify-content-end">
              <li className="mx-3">
                <a href="/">Главная</a>
              </li>
              <li className="mx-3">
                <a href="/about">О нас</a>
              </li>
              <li className="mx-3">
                <a href="/contact">Контакты</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
