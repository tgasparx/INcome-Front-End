import { useContext, useState } from "react";
import { Context } from "../../../../../../../../context";
import { Button, Container, Input, Label } from "./styles";
import { useNavigate } from "react-router";


export default function Comp2(){
    const navigate = useNavigate()
const{handleCreateNewEmployee} = useContext(Context)
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [reEmail, setReEmail] = useState("")
const [password, setPassword] = useState("")
const [rePassword, setRePassword] = useState("")
const [cpf, setCpf] = useState("")

    async function handleSubmit(){
        const created = await handleCreateNewEmployee({name, email, password, cpf})
        if(created){
           navigate("/homeCompanies", {replace: true})
           console.log(created)
        }
    }
    return (
        <Container>
            <Label>Nome</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)}/>
        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Label>Repetir o email</Label>
        <Input value={reEmail} onChange={(e) => setReEmail(e.target.value)}/>
        <Label>Senha</Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Label>Repetir a senha</Label>
        <Input value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
        <Label>CPF</Label>
        <Input value={cpf} onChange={(e) => setCpf(e.target.value)}/>
        <Button onClick={handleSubmit}>Adicionar</Button>
        </Container>
    )
}