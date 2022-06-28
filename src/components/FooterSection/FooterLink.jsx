import React from "react";

function FooterLink(props) {
  var [color, setColor] = React.useState("blueviolet");

  function mouseOn() {
    setColor("blue");
  }

  function mouseOff() {
    setColor("blueviolet");
  }
  
  return (
    <div className="footerLinks">
      <a href={props.link} className="footerLink" onMouseOver={mouseOn} onMouseOut= {mouseOff} style= {{color}}>{props.text} </a>
    </div>
  );
}

export default FooterLink;