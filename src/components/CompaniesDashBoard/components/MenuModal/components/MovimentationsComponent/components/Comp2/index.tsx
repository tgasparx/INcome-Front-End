import { useContext, useState } from "react"
import { Context } from "../../../../../../../../context"
import SelectComp from "./components/Select"
import { Button, Container, Input, Label, Option, Select } from "./styles"

//edit orders
export default function Comp2(){
  
const {handleInsertOrder, companyData, companyEmployees} = useContext(Context)
const [description, setDescription] = useState("")
const [value, setValue] = useState("")
const [status, setStatus] = useState("")
const [driver, setDriver] = useState("")
const [km, setKm] = useState("")

async function handleSubmit(){
   const inserted = await handleInsertOrder({description, value, status, driver, km})


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
       <SelectComp driver={driver} setDriver={setDriver} companyEmployees={companyEmployees}/>
         <Label>Distância -KM</Label>
         <Input onChange={(e: any) => setKm(e.target.value)} value={km}></Input>
         <Button onClick={handleSubmit}>Salvar</Button>
        </Container>
        </>
    )
}