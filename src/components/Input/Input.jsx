import React from "react";

function Input({typeInput, placeholderInput}) {
    return (
        <input type={typeInput} className="input-types" placeholder={placeholderInput}/>
    )
}

export default Input;