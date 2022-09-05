import { useContext, useState } from "react";
import { Context } from "../../../../../../../../../context";
import { OutBox } from "../../../../OutBox";
import { Container, Label, Input, Button, Header, CloseButton, Form, ShowInfo, Left, Right } from "./styles";


interface OptModalProps{
    isDeleteEmployeeModalOpen: any
    setIsDeleteEmployeeModalOpen: any
    companyEmployees: any
    selectedEmployeeId: any
}
export default function DeleteEmployeeModal({isDeleteEmployeeModalOpen, setIsDeleteEmployeeModalOpen, companyEmployees, selectedEmployeeId}: OptModalProps){
    const seletedEmployeeData = companyEmployees.employees.all_employees.filter((e: any) => e.id === selectedEmployeeId)
    const {handleDeleteUser, controlOutBox} = useContext(Context)



    async function handleSubmit(){
        try {
            const deleted = await handleDeleteUser(selectedEmployeeId)
            controlOutBox("green", "Funcionário removido com sucesso")
            setTimeout(() => {
                window.location.href = "/homeCompanies"
            }, 1000);
        } catch (error) {
            controlOutBox("orange", "O funcionário possui pedidos")
        }
        
    
    }


   if(isDeleteEmployeeModalOpen){
    return (
        <Container>
            <Header> Remover funcionário<CloseButton onClick={() => setIsDeleteEmployeeModalOpen(false)}>Fechar</CloseButton></Header>
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
            <span>Tem certeza que deseja remover este funcionário?</span><br></br>
                <span>Nota: O funcionário só será removido quando não conter nenhum pedido associado.</span>
            `
         <Button onClick={handleSubmit}>Sim, tenho certeza</Button>
         <Button onClick={() => setIsDeleteEmployeeModalOpen(false)}>Não, quero cancelar</Button>
        <OutBox/>
        </Container>
     )
   }else{
    return <></>
   }
}