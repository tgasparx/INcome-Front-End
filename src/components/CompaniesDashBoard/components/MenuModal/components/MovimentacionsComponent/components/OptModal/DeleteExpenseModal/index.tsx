import { useContext, useState } from "react";
import { Context } from "../../../../../../../../../context";
import { OutBox } from "../../../../OutBox";
import { Container, Label, Input, Button, Header, CloseButton, Form, ShowInfo, Left, Right } from "./styles";


interface OptModalProps{
    isDeleteExpenseModalOpen: any
    setIsDeleteExpenseModalOpen: any
    companySummary: any
    selectedExpenseId: any
}
export default function DeleteExpenseModal({isDeleteExpenseModalOpen, setIsDeleteExpenseModalOpen, companySummary, selectedExpenseId}: OptModalProps){
    const selectedOrderData = companySummary.expenses_summary.all_expenses.filter((e: any) => e.expense_id === selectedExpenseId)
    const {handleDeleteExpense, controlOutBox} = useContext(Context)


    async function handleSubmit(){

        const deleted = await handleDeleteExpense(selectedExpenseId)
        controlOutBox("green", "Despesa excluida com sucesso")
        setTimeout(() => {
            window.location.href = "/homeCompanies"
        }, 1000);
    }


   if(isDeleteExpenseModalOpen){
    return (
        <Container>
            <Header> Excluir pedido<CloseButton onClick={() => setIsDeleteExpenseModalOpen(false)}>Fechar</CloseButton></Header>
        <ShowInfo>
            <Left>
                <span>Descrição:</span>
                <span>Valor:</span>
                <span>Status:</span>
            </Left>
            <Right>
           <span> {selectedOrderData[0].description}</span>
         <span>{selectedOrderData[0].value}</span>
       <span>  {selectedOrderData[0].status}</span>
            </Right>
        </ShowInfo>
            <span>Tem certeza que deseja remover este pedido?</span>
            `
         <Button onClick={handleSubmit}>Sim, tenho certeza</Button>
         <Button onClick={() => setIsDeleteExpenseModalOpen(false)}>Não, quero cancelar</Button>
        <OutBox/>
        </Container>
     )
   }else{
    return <></>
   }
}