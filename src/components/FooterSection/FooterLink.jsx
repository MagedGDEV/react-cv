import React from "react";

function FooterLink(props) {
  var [color, setColor] = React.useState("white");

  function mouseOn() {
    setColor("#EC9706");
  }

  function mouseOff() {
    setColor("white");
  }
  
  return (
    <div className="footerLinks">
      <a href={props.link} className="footerLink" onMouseOver={mouseOn} onMouseOut= {mouseOff} style= {{color}}>{props.text} </a>
    </div>
  );
}

export default FooterLink;