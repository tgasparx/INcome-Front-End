import { useContext, useState } from "react";
import { Context } from "../../../../../../../../context";
import { Button, Container, Content, Input, Label } from "./styles";
import { useNavigate } from "react-router";
import SelectStatus from "./components/SelectStatus";


export default function CreateExpenseComp(){
    const navigate = useNavigate()
const{handleInsertExpense, companyEmployees} = useContext(Context)
const [description, setDescription] = useState("")
const [value,setValue] = useState("")
const [status,setStatus] = useState("")

    async function handleSubmit(){
        const created = await handleInsertExpense({description, value, status})
        window.location.href = "/homeCompanies"
        //navigate("/homeCompanies", {replace: true})
        if(created){

        }
    }
    return (
        <Container>
        <Content>
        <Label>Description</Label>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} required={true}/>
        <Label>Valor</Label>
        <Input value={value} onChange={(e) => setValue(e.target.value)} type="number" style={{width: "200px"}}/>
        <Label>Status</Label>
        <SelectStatus status={status} setStatus={setStatus}/>
        <Button onClick={handleSubmit}>Adicionar</Button>
</Content>
        </Container>
    )
}