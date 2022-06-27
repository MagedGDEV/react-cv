import React from "react";

function Logo (props){
    return(
        <img src = {props.image} alt = {props.alt} className = {props.isLeft ? "Logo leftImage": "Logo rightImage"}/>
    )
}

export default Logo;