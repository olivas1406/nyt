import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">{props.children}
        <div className="jumbotron">
            <h1 className="jumboText">New York Times Article Scrubber</h1> 
            <p className="jumboSmall">Search for and annotate articles of interest</p> 
        </div>
    </div>
);

export default Header;