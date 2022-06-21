import React from "react";
const Footer = (props) => {
  return (
    <div className="footer">
      <h5 style={{ color: "blue" }}>copyright {props.year}</h5>
    </div>
  );
};
export default Footer;
