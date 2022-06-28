import React from "react";
import WelcomeImage from "./WelcomeImage";
import WelcomeMessage from "./WelcomeMessage";
function Welcome() {
  return (
    <div id="welcome">
      <WelcomeMessage />
      <WelcomeImage />
    </div>
  );
}

export default Welcome;
