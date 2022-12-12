import React, {useState} from "react";
import Input from "../../components/Input/Input";

function Footer() {
    const [typeInput] = useState([
        {type: "text", placeholder: "Nome"},
        {type: "email", placeholder: "E-mail"},
        {type: "number", placeholder: "Telefone"},
    ])
    return (
        <footer className="container-3">
            <h1 className="ct3-title">
                Entre em contato
            </h1>
            <form action="" className="form">
                {
                    typeInput.map((inputs, idx) => <Input key={idx} type={inputs.type} namePlaceholder={inputs.placeholder}/>)
                }
                <textarea name="text-area" id="" className="text-area" cols="30" rows="10"></textarea>
            </form>
        </footer>
    )
}

export default Footer;