import React, {useState, useEffect} from "react";
import Input from "../../components/Input/Input";
import Button from "./../../components/Button";
import "./style.css";

function Footer() {
    const dontSendForm = event => event.preventDefault();
    const [telValue, setTelValue] = useState('');
    // useEffect(() => {

    // }, [telValue])
    return (
        <footer className="container-3" onSubmit={dontSendForm}>
            <h1 className="ct3-title">
                Entre em contato
            </h1>
            <form action="" className="form">
                <Input type="text" placeholder="Nome:"/>
                <Input type="email" placeholder="E-mail:" />
                <Input type="tel" placeholder="Telefone:" onChange={(event) => setTelValue(event.target.value)}/>
                <textarea name="text-area" id="" className="text-area" cols="1" rows="5" placeholder="Mensagem..."></textarea>
                <Button type="submit" width="47.1rem" text="Enviar mensagem" fontWeight="700"/>
            </form>
        </footer>
    )
}

export default Footer;