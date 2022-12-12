import React, {useState} from "react";
import Input from "../../components/Input/Input";
import Button from "./../../components/Button";
import "./style.css";

function Footer() {
    const [typeInput] = useState([
        {type: "text", placeholder: "Nome"},
        {type: "email", placeholder: "E-mail"},
        {type: "number", placeholder: "Telefone"},
    ])

    function dontSendForm(event) {
        console.log("Formulario")
        event.preventDefault();
    }

    return (
        <footer className="container-3" onSubmit={dontSendForm}>
            <h1 className="ct3-title">
                Entre em contato
            </h1>
            <form action="" className="form">
                <Input type="text" placeholder="Nome:" />
                <Input type="email" placeholder="E-mail:" />
                <Input type="tel" placeholder="Telefone:" />
                <textarea name="text-area" id="" className="text-area" cols="30" rows="10"></textarea>
                <Button type="submit" width="47.1rem" text="Enviar mensagem" fontWeight="700"/>
            </form>
        </footer>
    )
}

export default Footer;