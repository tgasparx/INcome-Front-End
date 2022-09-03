import { useContext, useState } from "react";
import { Context } from "../../../../../../../../context";
import { Container, Label, Input, Button, Header, CloseButton, Form, ShowInfo, Left, Right } from "./styles";


interface OptModalProps{
    isOptModalOpen: boolean
    setIsOptModalOpen: any
    companyEmployees: any
    selectedEmployeeId: any
}
export default function OptModal({isOptModalOpen, setIsOptModalOpen, companyEmployees, selectedEmployeeId}: OptModalProps){
    const seletedEmployeeData = companyEmployees.employees.all_employees.filter((e: any) => e.id === selectedEmployeeId)
    const {handleEditEmployee} = useContext(Context)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpf, setCpf] = useState("")



    async function handleSubmit(){
        const edited = await handleEditEmployee({name, email, password, cpf}, selectedEmployeeId)
        // console.log(selectedEmployeeId)
        window.location.href = "/homeCompanies"
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
         <Input value={name} onChange={(e: any) => setName(e.target.value)}/>
         <Label>Email</Label>
         <Input value={email} onChange={(e:any) => setEmail(e.target.value)}/>
         <Label>Password</Label>
         <Input value={password} onChange={(e:any) => setPassword(e.target.value)}/>
         <Label>CPF</Label>
         <Input value={cpf} onChange={(e:any) => setCpf(e.target.value)}/>
         <Button onClick={handleSubmit}>Confirmar</Button>
        </Form>
        </Container>
     )
   }else{
    return <></>
   }
}