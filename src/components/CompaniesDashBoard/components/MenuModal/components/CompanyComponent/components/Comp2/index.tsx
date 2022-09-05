import { useContext, useState } from "react"
import { Context } from "../../../../../../../../context"
import { Button, Container, Content, Input, Label } from "./styles"


export function Comp2(){
  
const {handleEditCompany, companyData, controlOutBox} = useContext(Context)
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [cnpj, setCnpj] = useState("")
const [inputColor, setInputColor] = useState("gray")

async function handleSubmit(){

  if(name !== "" && email !== "" && cnpj !== ""){
    const edited = await handleEditCompany({name, email, cnpj})
    if(edited){
      controlOutBox("green", "Informações enviadas com sucesso. Nota: Email e CNPJ só serão alterados caso estejam disponíveis.")
    }else{
      controlOutBox("darkred", "CNPJ ou email já cadastrados")
    }
  }else{
    controlOutBox("darkorange", "Preencha as informações")
    setInputColor("orange")
  }
}
    return (
        <>
        <Container>
      <Content>
      <Label>Nome</Label><br></br>
         <Input onChange={(e: any) => setName(e.target.value)} value={name} inputColor={inputColor}></Input> <br></br>
         <Label>Email</Label><br></br>
         <Input onChange={(e: any) => setEmail(e.target.value)} value={email} inputColor={inputColor}></Input> <br></br>
         <Label>Cnpj</Label><br></br>
         <Input onChange={(e: any) => setCnpj(e.target.value)} value={cnpj} inputColor={inputColor}></Input> <br></br>
         <Button onClick={handleSubmit}>Confirmar alterações</Button>

      </Content>
        </Container>
        </>
    )
}