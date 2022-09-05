import { useContext, useState } from "react";
import { Context } from "../../../../../../../../context";
import { Button, Container, Content, Input, Label } from "./styles";
import { useNavigate } from "react-router";
import SelectStatus from "./components/SelectStatus";


export default function CreateExpenseComp(){
    const navigate = useNavigate()
const{handleInsertExpense, companyEmployees, controlOutBox} = useContext(Context)
const [description, setDescription] = useState("")
const [value,setValue] = useState("")
const [status,setStatus] = useState("")
const [inputColor, setInputColor] = useState("gray")

    async function handleSubmit(){
        if(description && value && status && inputColor){
            const created = await handleInsertExpense({description, value, status})
            controlOutBox("green", "Despesa criada com sucesso")
            setInputColor("green")
        }else{
            controlOutBox("orange", "Preencha as informações")
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
        <Button onClick={handleSubmit}>Adicionar</Button>
</Content>
        </Container>
    )
}