import React from "react";
import "./style.css";

function Input(props) {
    const {typeInput, placeholder} = props;
    return (
        
        <input className="input-types" type={typeInput} placeholder={placeholder}/>
    )
}

export default Input;