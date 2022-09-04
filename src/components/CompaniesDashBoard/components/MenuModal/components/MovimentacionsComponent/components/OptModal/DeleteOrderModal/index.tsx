import { useContext, useState } from "react";
import { Context } from "../../../../../../../../../context";
import { Container, Label, Input, Button, Header, CloseButton, Form, ShowInfo, Left, Right } from "./styles";


interface OptModalProps{
    isDeleteOrderModalOpen: any
    setIsDeleteOrderModalOpen: any
    companySummary: any
    selectedOrderId: any
}
export default function DeleteOrderModal({isDeleteOrderModalOpen, setIsDeleteOrderModalOpen, companySummary, selectedOrderId}: OptModalProps){
    const selectedOrderData = companySummary.orders_summary.all_orders.filter((e: any) => e.order_id === selectedOrderId)
    const {handleDeleteOrder} = useContext(Context)



    async function handleSubmit(){
        const deleted = await handleDeleteOrder(selectedOrderId)
        window.location.href = "/homeCompanies"
    }


   if(isDeleteOrderModalOpen){
    return (
        <Container>
            <Header> Excluir pedido<CloseButton onClick={() => setIsDeleteOrderModalOpen(false)}>Fechar</CloseButton></Header>
        <ShowInfo>
            <Left>
                <span>Descrição:</span>
                <span>Valor:</span>
                <span>Status:</span>
                <span>Cliente:</span>
                <span>Km:</span>
                <span>Motorista:</span>
            </Left>
            <Right>
           <span> {selectedOrderData[0].description}</span>
         <span>{selectedOrderData[0].value}</span>
       <span>  {selectedOrderData[0].status}</span>
       <span>  {selectedOrderData[0].client}</span>
       <span>  {selectedOrderData[0].km}</span>
       <span>  {selectedOrderData[0].driver}</span>
            </Right>
        </ShowInfo>
            <span>Tem certeza que deseja remover este pedido?</span>
            `
         <Button onClick={handleSubmit}>Sim, tenho certeza</Button>
         <Button onClick={() => setIsDeleteOrderModalOpen(false)}>Não, quero cancelar</Button>
      
        </Container>
     )
   }else{
    return <></>
   }
}