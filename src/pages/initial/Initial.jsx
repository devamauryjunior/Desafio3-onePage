import React from "react";
import img from './../../assets/img/img.svg';
import Button from './../../components/Button';
import './style.css';

function Initial() {    

    return (
        <header className="container-1">
            <div className="ct1-text-button">
                <h1 className="ct1-text-title">
                    Lorem ipsum dolor sit amet
                </h1>
                <p className="ct1-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.
                </p>
                <Button width="15.5rem" text="Botão" fontWeight="400"/>
            </div>
            <img src={img} alt="imagem" />
        </header>
    )
}

export default Initial;
