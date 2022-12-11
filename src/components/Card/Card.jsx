import React from "react";
import './style.css';

function Card(props) {
    const {} = props;
    return (
        <div className="card">
            <div className="card-color">.</div>
            <h2 className="card-title">Título do card</h2>
            <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
            </p>
        </div>
    )
}


export default Card;