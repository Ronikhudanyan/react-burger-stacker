import React from 'react'


const Ingredient = ({name, addToStack}) => {
    return (
        <div className="adds">
            {name} <button onClick={() => addToStack({name})}>+</button>
        </div>
    )
}

export default Ingredient;
