import React, {useState} from "react";
// import Ingredient from "./Ingredient";

const BurgerStack = ({key, name}) => {
    return (
        <div className="stack">
            {name}
        </div>
    )
}

export default BurgerStack;