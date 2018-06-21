import React from "react";
import "./Footer.css";

const Footer = props => (
    <div className="footer">{props.children}
        <div className="col-12 footerText">
            <p style={{float:'left'}}>NYT Article Scrubber!</p>
        </div>
    </div>
);

export default Footer;