import React, { Component } from "react";
import { Link } from "react-router-dom";

import Enamad from "src/assets/img/enamad.png";
import Samandehi from "src/assets/img/samandehi.png";

class Footer extends Component {
  render() {
    return (
      <footer className="body container-center">
         
        <div className="copy-write ">
            <span>کلیه حقوق این وب سایت متعلق به شرکت جاباینجا می باشد.</span>
            <nav className="social">
              <a target="_blank" href="https://www.instagram.com/jobinja/">
                <i className="k-instagram" />
              </a>
              <a target="_blank" href="https://www.facebook.com/jobinja">
                <i className="k-facebook" />
              </a>
              <a target="_blank" href="https://twitter.com/jobinja">
                <i className="k-twitter" />
              </a>
              <a target="_blank" href="http://www.linkedin.com/jobinja">
                <i className="k-linkedin" />
              </a>
            </nav>
        </div>
        
      </footer>
    );
  }
}
export default Footer;
