import { useContext, useState } from "react"
import { Context } from "../../../../../../../../context"
import { Button, Container, Input, Label, Select } from "./styles"

//edit expense
export default function Comp4(){
  
const {handleInsertExpense, companyData} = useContext(Context)
const [description, setDescription] = useState("")
const [value, setValue] = useState("")
const [status, setStatus] = useState("")

async function handleSubmit(){
   const inserted = await handleInsertExpense({description, value, status})

}
    return (
        <>
        <Container>
         <Label>Descrição</Label>
         <Input onChange={(e: any) => setDescription(e.target.value)} value={description}></Input> 
         <Label>Valor</Label>
         <Input onChange={(e: any) => setValue(e.target.value)} value={value}></Input> 
         <Label>Status</Label>
         <Select onChange={(e: any) => { setStatus(e.target.value)}}>
    <option value="Concluido">Concluído</option>
    <option value="Pendente">Pendente</option>
    </Select>
         <Button onClick={handleSubmit}>Salvar</Button>
        </Container>
        </>
    )
}