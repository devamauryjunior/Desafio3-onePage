import React from "react";

function Button({width, text, fontWeight}) {
    const mySytleButton = {
        width,
        fontWeight,
        fontFamily: 'Lato',
        fontSize: '2rem',
        color: "#FFFFFF",
        paddingBlock: "1.3rem",
        border: 'none',
        background: "#6C63FF",
        borderRadius: ".5rem",
        boxShadow: "0px 5px 5px rgba(23, 23, 23, 0.1)",
        cursor: 'pointer',
    }
    return (
        <button style={mySytleButton}>{text}</button>
    )
}

export default Button;