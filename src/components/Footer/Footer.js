import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4"
    style={{
      background: "#343a40",
      color: "#FFF"
    }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">XCommerce</h5>
          <p>Diseñado por Franco Oubel</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>
    <div className="footer-copyright text-center py-3">
      © 2021 - Todos los derechos reservados
    </div>
  </footer>
);

export default Footer;
