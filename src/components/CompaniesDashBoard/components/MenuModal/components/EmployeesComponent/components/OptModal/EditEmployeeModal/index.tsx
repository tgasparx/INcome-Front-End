import { useContext, useState } from "react";
import { Context } from "../../../../../../../../../context";
import { OutBox } from "../../../../OutBox";
import { Container, Label, Input, Button, Header, CloseButton, Form, ShowInfo, Left, Right } from "./styles";


interface OptModalProps{
    isOptModalOpen: boolean
    setIsOptModalOpen: any
    companyEmployees: any
    selectedEmployeeId: any
}
export default function EditEmployeeModal({isOptModalOpen, setIsOptModalOpen, companyEmployees, selectedEmployeeId}: OptModalProps){
    const seletedEmployeeData = companyEmployees.employees.all_employees.filter((e: any) => e.id === selectedEmployeeId)
    const {handleEditUser, controlOutBox} = useContext(Context)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpf, setCpf] = useState("")
    const [inputColor, setInputColor] = useState("gray")



    async function handleSubmit(){
       if(name && email && password && cpf){
        const edited = await handleEditUser({name, email, password, cpf}, selectedEmployeeId)
        controlOutBox("green", "Funcionário editado com sucesso")
        setInputColor("orange")
       }else{
        controlOutBox("orange", "Preencha as informações")
        setInputColor("orange")
       }
    }


   if(isOptModalOpen){
    return (
        <Container>
            <Header> Editar funcionário<CloseButton onClick={() => setIsOptModalOpen(false)}>Fechar</CloseButton></Header>
           
        <ShowInfo>
      
            <Left>
                <span>Nome:</span>
                <span>Email:</span>
                <span>Cpf:</span>
            </Left>
            <Right>
           <span> {seletedEmployeeData[0].name}</span>
         <span>{seletedEmployeeData[0].email}</span>
       <span>  {seletedEmployeeData[0].cpf}</span>
            </Right>
        </ShowInfo>
        <Form>
        <Label>Name</Label>
         <Input value={name} onChange={(e: any) => setName(e.target.value)} inputColor={inputColor}/>
         <Label>Email</Label>
         <Input value={email} onChange={(e:any) => setEmail(e.target.value)} inputColor={inputColor}/>
         <Label>Password</Label>
         <Input value={password} onChange={(e:any) => setPassword(e.target.value)} inputColor={inputColor}/>
         <Label>CPF</Label>
         <Input value={cpf} onChange={(e:any) => setCpf(e.target.value)} inputColor={inputColor}/>
         <Button onClick={handleSubmit}>Confirmar</Button>
         <OutBox/>
        </Form>
      
        </Container>
     )
   }else{
    return <></>
   }
}