import React from "react";
import "./Footer.css";

const Footer = props => (
    <div className="footer">{props.children}
        <div className="col-12 footerText">
            <p style={{float:'left'}}>NYT Article Scraper!</p>
            {/* <img src="./favicon.ico" className="image" alt="React logo"></img> */}
        </div>
    </div>
);

export default Footer;