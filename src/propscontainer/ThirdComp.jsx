
import React from "react";

const ThirdComp = (props) =>{
    const {model, year, owner, color}= props.myCar

    return(
        <div>
            <div>{model}</div>
            <div>{year}</div>
            <div>{owner}</div>
            <div>{color}</div>

        <div>{props.name}</div>
        </div>
    )
}
export default ThirdComp