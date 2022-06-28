import React from "react";
import PageLogo from "./PageLogo";
import Links from "./Links";

function Header() {
  return (
    <header>
      <PageLogo />

      <Links
        welcomeLink="#welcome"
        projectsLink="#projects"
        skillsLink="#skills"
        contactMeLink="#footer"
      />
    </header>
  );
}

export default Header;
