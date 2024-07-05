import {useState } from "react";
import Header from "@/components/Header";


export default function inputs(){
    const [nome,setNome]=useState("")
    const [sobrenome,setSobrenome]=useState("")
    const [nasc,setNasc]=useState("")
    const [cpf,setCpf]=useState("")
    const [tel,setTel]=useState("")
    const [email,setEmail]=useState("")

    return(
        <form>
            <Header/>
            
            <div className="campoForm">
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(evt)=>setNome(evt.target.value)} required />
            </div>
            <div className="campoForm">
                <label>Sobrenome:</label>
                <input type="text" value={sobrenome} onChange={(evt)=>setSobrenome(evt.target.value)} required />
            </div>
            <div className="campoForm">
                <label>Data de Nascimento:</label>
                <input type="date" value={nasc} onChange={(evt)=>setNasc(evt.target.value)} required />
            </div>
            <div className="campoForm">
                <label>CPF:</label>
                <input type="text" value={cpf}  onChange={(evt)=>setCpf(evt.target.value)} required
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="123.456.789-10" />
            </div>
            <div className="campoForm">
                <label>Telefone:</label>
                <input type="tel" value={tel} onChange={(evt)=>setTel(evt.target.value)} required
            pattern="\(\d{2}\) \d{2} \d{7}-\d{2}" placeholder="(55) DDD 123456789"/>
            </div>
            <div className="campoForm">
                <label>Email:</label>
                <input type="text" value={email} onChange={(evt)=>setEmail(evt.target.value)} required />
            </div>
            <button type="submit">Enviar</button>

    </form>
    )
}
