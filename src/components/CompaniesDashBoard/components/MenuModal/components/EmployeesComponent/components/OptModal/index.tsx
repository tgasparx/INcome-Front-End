import { useContext, useState } from "react";
import { Context } from "../../../../../../../../context";
import { Container, Label, Input, Button } from "./styles";


interface OptModalProps{
    isOptModalOpen: boolean
    setIsOptModalOpen: any
    companyEmployees: any
    selectedEmployeeId: any
}
export default function OptModal({isOptModalOpen, setIsOptModalOpen, companyEmployees, selectedEmployeeId}: OptModalProps){
    const {handleEditEmployee} = useContext(Context)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpf, setCpf] = useState("")

    const seletedEmployeeData = companyEmployees.employees.all_employees.filter((e: any) => e.id === selectedEmployeeId)

    async function handleSubmit(){
        handleEditEmployee({name, email, password, cpf}, selectedEmployeeId)
        window.location.href = "/homeCompanies"
    }


   if(isOptModalOpen){
    return (
        <Container>
         <button onClick={() => setIsOptModalOpen(false)}>Fechar</button>
         <Label>Name</Label>
         <Input value={name} onChange={(e: any) => setName(e.target.value)}/>
         <Label>Email</Label>
         <Input value={email} onChange={(e:any) => setEmail(e.target.value)}/>
         <Label>Password</Label>
         <Input value={password} onChange={(e:any) => setPassword(e.target.value)}/>
         <Label>CPF</Label>
         <Input value={cpf} onChange={(e:any) => setCpf(e.target.value)}/>
         <Button onClick={handleSubmit}>Confirmar</Button>
        </Container>
     )
   }else{
    return <></>
   }
}