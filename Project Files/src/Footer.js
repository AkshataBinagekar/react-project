import React from "react";
import "./styles.css"
const Footer = (props) => {
  return (
    <div className="Footer">
      <h5 style={{ color: "blue" }}>copyright {props.year}</h5>
    </div>
  );
};
export default Footer;
