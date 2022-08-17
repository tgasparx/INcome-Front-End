import { useContext, useState } from "react"
import { Context } from "../../../../../../../../context"
import SelectComp from "./components/Select"
import { Button, Container, Input, Label, Option, Select } from "./styles"


export default function Comp2(){
  
const {handleInsertOrder, companyData, companyEmployees} = useContext(Context)
const [description, setDescription] = useState("")
const [value, setValue] = useState("")
const [status, setStatus] = useState("")
const [driver, setDriver] = useState("")
const [km, setKm] = useState("")

async function handleSubmit(){
   const edited = await handleInsertOrder({description, value, status, driver, km})
let element = document.getElementById("select");

console.log(driver)

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
       <SelectComp driver={driver} setDriver={setDriver} companyEmployees={companyEmployees}/>
         <Label>Distância -KM</Label>
         <Input onChange={(e: any) => setKm(e.target.value)} value={km}></Input>
         <Button onClick={handleSubmit}>Salvar</Button>
        </Container>
        </>
    )
}