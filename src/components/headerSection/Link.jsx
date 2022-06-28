import React from "react";

function Link(props) {
  var [color, setColor] = React.useState("blueviolet");

  function mouseOn() {
    setColor("blue");
  }

  function mouseOff() {
    setColor("blueviolet");
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
