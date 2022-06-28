import React from "react";
import FooterLink from "./FooterLink";

function FooterLinks(props) {
  return (
    <div>
      <FooterLink link={props.linkedin} text="LinkedIn" />
      <FooterLink link={props.github} text="GitHub" />
      <FooterLink link={props.facebook} text="Facebook" />
      <FooterLink link={props.twitter} text="Twitter" />
      
      </div>);
}

export default FooterLinks;