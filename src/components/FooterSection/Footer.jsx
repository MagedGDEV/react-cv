import React from "react";
import FooterLinks from "./FooterLinks";
function Footer() {
  return (
    <footer id = "footer">
      <FooterLinks
        linkedin="https://www.linkedin.com/in/maged-alosali/"
        github="https://github.com/MagedGDEV/MagedGDEV"
        facebook="https://www.facebook.com/maged.m.eid.1"
        twitter="https://twitter.com/alosalimaged"
      />
      <p className="email">maged.work0@gmail.com</p>
      <p className="footerText">Copyrights © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
