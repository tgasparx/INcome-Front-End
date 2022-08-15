import { useContext, useState } from "react"
import { Context } from "../../../../../../../../context"
import { Button, Container, Input, Label } from "./styles"


export default function Comp4(){
  
const {handleEditCompany, companyData} = useContext(Context)
const [name, setName] = useState(companyData.name)
const [email, setEmail] = useState(companyData.email)
const [cnpj, setCnpj] = useState(companyData.cnpj)

async function handleSubmit(){
   const edited = await handleEditCompany({name, email, cnpj})

}
    return (
        <>
        <Container>
         <Label>Descrição</Label>
         <Input onChange={(e: any) => setName(e.target.value)} value={name}></Input> 
         <Label>Valor</Label>
         <Input onChange={(e: any) => setEmail(e.target.value)} value={email}></Input> 
         <Label>Status</Label>
         <Input onChange={(e: any) => setCnpj(e.target.value)} value={cnpj}></Input> 
         <Button onClick={handleSubmit}>Confirmar alterações</Button>
        </Container>
        </>
    )
}