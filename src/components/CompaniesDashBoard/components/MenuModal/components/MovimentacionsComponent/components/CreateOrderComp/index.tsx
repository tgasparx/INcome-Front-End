import { useContext, useState } from "react";
import { Context } from "../../../../../../../../context";
import { Button, Container, Content, Input, Label } from "./styles";
import { useNavigate } from "react-router";
import SelectStatus from "./components/SelectStatus";
import SelectDriver from "./components/SelectDriver";


export default function CreateOrderComp(){
    const navigate = useNavigate()
const{handleInsertOrder, companyEmployees, controlOutBox} = useContext(Context)
const [description, setDescription] = useState("")
const [value,setValue] = useState("")
const [status,setStatus] = useState("")
const [driver, setDriver] = useState("")
const [client, setClient] = useState("")
const [km, setKm] = useState("")
const [inputColor, setInputColor] = useState("gray")

    async function handleSubmit(){
        if(description && value && status && driver && client && km){
            const created = await handleInsertOrder({description, value, status, driver, client, km})
            controlOutBox("green", "Pedido incluído com sucesso")
        }else{
        
            controlOutBox("orange", "Preencha as informações corretamente")
            setInputColor("orange")
        }


     

    }
    return (
        <Container>
        <Content>
        <Label>Description</Label>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} required={true} inputColor={inputColor}/>
        <Label>Valor</Label>
        <Input value={value} onChange={(e) => setValue(e.target.value)} type="number" style={{width: "200px"}} inputColor={inputColor}/>
        <Label>Status</Label>
        <SelectStatus status={status} setStatus={setStatus} inputColor={inputColor}/>
        <Label>Motorista</Label>
        <SelectDriver driver={driver} setDriver={setDriver} companyEmployees={companyEmployees} inputColor={inputColor}/>
        <Label>Cliente</Label>
        <Input value={client} onChange={(e) => setClient(e.target.value)} inputColor={inputColor}/>
        <Label>KM</Label>
        <Input value={km} onChange={(e) => setKm(e.target.value)} type="number" style={{width: "200px"}} inputColor={inputColor}/>
        <Button onClick={handleSubmit}>Adicionar</Button>
</Content>
        </Container>
    )
}