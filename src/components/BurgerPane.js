import React from "react";
import BurgerStack from './BurgerStack.js'

const BurgerPane = ({burgerStack, clearBurger}) => {

    return (
    <div className="pane">
        <h3>your burger</h3>

        {burgerStack.map((ingredient, i) => (
            <BurgerStack key={i} name={ingredient.name} />
        ) )}


        <button onClick={clearBurger}>clear</button>
    </div>
    )
  };
  
  export default BurgerPane;