import { useContext, useState } from "react"
import { Context } from "../../../../../../../../context"
import { Button, Container, Input, Label } from "./styles"


export default function Comp2(){
  
const {handleInsertOrder, companyData} = useContext(Context)
const [description, setDescription] = useState("")
const [value, setValue] = useState("")
const [status, setStatus] = useState("")

async function handleSubmit(){
   const edited = await handleInsertOrder({description, value, status})
   console.log(edited)

}
    return (
        <>
        <Container>
         <Label>Descrição</Label>
         <Input onChange={(e: any) => setDescription(e.target.value)} value={description}></Input>
         <Label>Valor</Label>
         <Input onChange={(e: any) => setValue(e.target.value)} value={value}></Input> 
         <Label>Status</Label>
         <Input onChange={(e: any) => setStatus(e.target.value)} value={status}></Input>
         <Button onClick={handleSubmit}>Salvar</Button>
        </Container>
        </>
    )
}