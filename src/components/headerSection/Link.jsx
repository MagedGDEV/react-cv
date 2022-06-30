import React from "react";

function Link(props) {
  var [color, setColor] = React.useState("white");

  function mouseOn() {
    setColor("#EC9706");
  }

  function mouseOff() {
    setColor("white");
  }

  return (
    <a
      className="Link"
      href={props.link}
      style={{ color }}
      onMouseOver={mouseOn}
      onMouseOut={mouseOff}
    >
      {props.name}{" "}
    </a>
  );
}

export default Link;
