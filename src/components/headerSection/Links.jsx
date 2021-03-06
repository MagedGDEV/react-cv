import React from "react";
import Link from "./Link";
function Links(props) {
  return (
    <div className="Links">
      <Link link={props.welcomeLink} name={"Home"} />
      <Link link={props.projectsLink} name={"Projects"} />
      <Link link={props.skillsLink} name={"Skills"} />
      <Link link={props.contactMeLink} name={"Contact Me"} />
    </div>
  );
}

export default Links;
