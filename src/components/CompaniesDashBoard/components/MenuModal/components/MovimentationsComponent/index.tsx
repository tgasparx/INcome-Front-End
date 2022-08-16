import { useState } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import MenuButtons from "./components/MenuButton";
import OptModal from "./components/optModal";
import { Container, NavContent, OptContent } from "./styles";


export default function MovimentationsComponent(){
const [selectedComp, setSelectedComp] = useState("")
const [selectedOrderId, setSelectedOrderId] = useState("")
const [selectedExpenseId, setSelectedExpenseId] = useState("")
const [isOptModalOpen, setIsOptModalOpen] = useState(false)
const [selectedOptComp, setSelectedOptComp] = useState<string>("")
    function controlSelectedComp(){
        switch (selectedComp) {
            case "comp1":
              return  <Comp1 selectedOrderId={selectedOrderId} setSelectedOrderId={setSelectedOrderId}/>
              case "comp2":
                return  <Comp2/>
                case "comp3":
                    return  <Comp3 selectedExpenseId={selectedExpenseId} setSelectedExpenseId={setSelectedExpenseId}/>
                    case "comp4":
                        return  <Comp4/>
        
            default:
               return  <Comp1 selectedOrderId={selectedOrderId} setSelectedOrderId={setSelectedOrderId}/>
        }
        
    }
    function controlOptModalExibition(){
   
        if(isOptModalOpen){
            return <OptModal setIsOptModalOpen={setIsOptModalOpen} selectedOptComp={selectedOptComp}/>
        }else{
            return <></>
        }
    }
    function handleEditOrder(){
        if(!selectedOrderId){
            window.alert("Selecione um pedido")
        }else{
            setIsOptModalOpen(true)
        }
     
    }
    function handleDeleteOrder(){
        if(!selectedOrderId){
            window.alert("Selecione um pedido")
        }else{
            setIsOptModalOpen(true)
        }
    }
function handleEditExpense(){
    if(!selectedExpenseId){
        window.alert("Selecione uma despesa")
    }else{
        setIsOptModalOpen(true)
    }
}
function handledeleteExpense(){
    if(!selectedExpenseId){
        window.alert("Selecione ua despesa")
    }else{
        setIsOptModalOpen(true)
    }
}
    return (
        <Container>
           {controlOptModalExibition()}
        <NavContent>
   
            <MenuButtons onClick={() => {setSelectedComp("comp1"); setSelectedOrderId(""); setSelectedExpenseId("")}} text="Pedidos"/>
            <MenuButtons onClick={() => {setSelectedComp("comp2"); setSelectedOrderId(""); setSelectedExpenseId("")}} text="Adicionar Pedido"/>
            <MenuButtons onClick={() => {setSelectedComp("comp1"); handleEditOrder(); setSelectedOptComp("edit-order")}} text="Editar Pedido"/>
            <MenuButtons onClick={() =>{ setSelectedComp("comp1"); handleDeleteOrder(); setSelectedOptComp("delete-order")}} text="Excluir pedido"/>
            <MenuButtons onClick={() => {setSelectedComp("comp3"); setSelectedOrderId(""); setSelectedExpenseId("")}} text="Despesas"/>
            <MenuButtons onClick={() => {setSelectedComp("comp4"); setSelectedOrderId(""); setSelectedExpenseId("")}} text="Adicionar despesa"/>
            <MenuButtons onClick={() => {setSelectedComp("comp3"); handleEditExpense(); setSelectedOptComp("edit-expense")}} text="Editar despesa"/>
            <MenuButtons onClick={() => {setSelectedComp("comp3"); handledeleteExpense(); setSelectedOptComp("delete-expense")}} text="Excluir despesa"/>
   
        </NavContent>
        <OptContent>
          {controlSelectedComp()}
        </OptContent>
       </Container>
    )
}