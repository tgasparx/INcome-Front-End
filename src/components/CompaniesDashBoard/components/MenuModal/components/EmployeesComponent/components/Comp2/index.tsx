import { useContext, useState } from "react";
import { Context } from "../../../../../../../../context";
import { Button, Container, Content, Input, Label } from "./styles";
import { useNavigate } from "react-router";


export default function Comp2(){
    const navigate = useNavigate()
const{handleCreateUser, controlOutBox} = useContext(Context)
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [reEmail, setReEmail] = useState("")
const [password, setPassword] = useState("")
const [rePassword, setRePassword] = useState("")
const [cpf, setCpf] = useState("")
const [inputColor, setInputColor] = useState("gray")

    async function handleSubmit(){
       
        if(name && email && reEmail && password && rePassword && cpf){
            if(email === reEmail){
                if(password === rePassword){
                    const created = await handleCreateUser({name, email, password, cpf})
                }else{
                    controlOutBox("darkorange", "Senha e Repetir senha devem ser iguais")
                    setInputColor("orange")
                }
            }else{
                controlOutBox("darkorange", "Email e Repetir email devem ser iguais")
            setInputColor("orange")
            }
        }else{
            controlOutBox("darkorange", "Preencha as informações")
            setInputColor("orange")
        }
    }
    return (
        <Container>
<Content>
<Label>Nome</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} inputColor={inputColor}/>
        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)}inputColor={inputColor}/>
        <Label>Repetir o email</Label>
        <Input value={reEmail} onChange={(e) => setReEmail(e.target.value)} inputColor={inputColor}/>
        <Label>Senha</Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} inputColor={inputColor}/>
        <Label>Repetir a senha</Label>
        <Input value={rePassword} onChange={(e) => setRePassword(e.target.value)} inputColor={inputColor}/>
        <Label>CPF</Label>
        <Input value={cpf} onChange={(e) => setCpf(e.target.value)} inputColor={inputColor}/>
        <Button onClick={handleSubmit}>Adicionar</Button>
</Content>
        </Container>
    )
}