
import React from "react";
import TestComp from "./TestComp";

const Mango=()=>{
    return(
        <h2>Mangoes are Sweet</h2>

    )
}
const Grapes=()=>{
    return(
        <h2>Grapes are good</h2>
    )
}

const Apple=()=>{
    return(
        <h2>Apple a day keep us a doctor away</h2>
    )

}
function Sample(){
    return(
        <div>Sample
            <Mango />
            <Grapes />
            <TestComp />
            <Apple />
            <h1>This is sample File</h1>
        </div>
    )
}

export default Sample
