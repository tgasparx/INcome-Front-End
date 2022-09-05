import { useContext, useState } from "react";
import { Context } from "../../../../../../../../context";
import { Button, Container, Content, Input, Label } from "./styles";
import { useNavigate } from "react-router";
import SelectStatus from "./components/SelectStatus";
import SelectDriver from "./components/SelectDriver";


export default function CreateOrderComp(){
    const navigate = useNavigate()
const{handleInsertOrder, companyEmployees} = useContext(Context)
const [description, setDescription] = useState("")
const [value,setValue] = useState("")
const [status,setStatus] = useState("")
const [driver, setDriver] = useState("")
const [client, setClient] = useState("")
const [km, setKm] = useState("")

    async function handleSubmit(){
        const created = await handleInsertOrder({description, value, status, driver, client, km})
        window.location.href = "/homeCompanies"
        //navigate("/homeCompanies", {replace: true})
        if(created){

        }
    }
    return (
        <Container>
        <Content>
        <Label>Description</Label>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} required={true} />
        <Label>Valor</Label>
        <Input value={value} onChange={(e) => setValue(e.target.value)} type="number" style={{width: "200px"}}/>
        <Label>Status</Label>
        <SelectStatus status={status} setStatus={setStatus}/>
        <Label>Motorista</Label>
        <SelectDriver driver={driver} setDriver={setDriver} companyEmployees={companyEmployees}/>
        <Label>Cliente</Label>
        <Input value={client} onChange={(e) => setClient(e.target.value)}/>
        <Label>KM</Label>
        <Input value={km} onChange={(e) => setKm(e.target.value)} type="number" style={{width: "200px"}}/>
        <Button onClick={handleSubmit}>Adicionar</Button>
</Content>
        </Container>
    )
}