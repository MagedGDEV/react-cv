import React from "react";
import Skill from "./Skill";
import images from "../../../images";
function Skills (){
    const Logos = Object.values(images);
    function createSkill(Logo){
        return (<Skill 
            key = {Logos.indexOf(Logo)} 
            logo = {Logo}
        />);
    }

return (<div id="skills">
    <h2 className="headers">
        Skills
    </h2>
    {
        Logos.map(createSkill)
    }
</div>);

}

export default Skills;