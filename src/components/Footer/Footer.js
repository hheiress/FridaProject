import React, { useState } from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-data">
          <div className="footer-address">
            <ul className="footer-address-list">
              <img src="https://cdn.clorian.com/img/clients/FridaKahlo/images/logo_white.png" alt="logo" className="logo"></img>
              <li>SMART PIXEL EXHIBITIONS S.L.</li>
              <li>Avenida de Europa, 18</li>
              <li>28108 Alcobendas, Madrid</li>
              <li>CIF: B16986705</li>
            </ul>
          </div>
          <div className="footer-contacts">
            <p>SUPPORT:</p>
            <p>911 112 355</p>
            <p>info@accionaexhibitions.com</p>
            <button>Return Policy</button>
          </div>
        </div>
        <div className="footer-company-info">
            <p>© Copyright - Clorian 2022 / All rights reserved | </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
