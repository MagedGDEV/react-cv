import React from "react";
import Logo from "../../images/Logo.png";
function PageLogo() {
  return (
    <a className="PageLogo" href="#welcome">
      <img id="PageLogo" src={Logo} alt = "pageLogo" />
    </a>
  );
}

export default PageLogo;
