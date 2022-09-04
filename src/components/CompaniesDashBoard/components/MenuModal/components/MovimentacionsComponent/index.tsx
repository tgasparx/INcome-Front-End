import { useContext, useState } from "react";
import { Context } from "../../../../../../context";
import OrdersTable from "./components/OrdersTable";
import CreateOrderComp from "./components/CreateOrderComp";
import MenuButtons from "./components/MenuButton";
import DeleteOrderModal from "./components/OptModal/DeleteOrderModal";
import EditOrderModal from "./components/OptModal/EditOrderModal";
import { Container, NavContent, OptContent, OrdersNav, ExpensesNav, ContainerNav } from "./styles";
import ExpensesTable from "./components/ExpensesTable";
import CreateExpenseComp from "./components/CreateExpenseComp";
// import EditOrderComp from "./components/EditOrderComp";

export default function MovimentationsCOmponent() {
  const [selectedComp, setSelectedComp] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const { companySummary, companyEmployees } = useContext(Context);
  const [selectedExpenseId, setSelectedExpenseId] = useState("")
  const [isEditOrderModalOpen, setIsEditOrderModalOpen] = useState<boolean>(false)
  const [isDeleteOrderModalOpen, setIsDeleteOrderModalOpen] = useState<boolean>(false)

  
  function controlSelectedComp() {
    switch (selectedComp) {
      case "OrdersTable":
        return (
          <OrdersTable
          companySummary={companySummary}
          selectedOrderId={selectedOrderId}
          setSelectedOrderId={setSelectedOrderId}
          />
        );
      case "CreateOrder":
        return <CreateOrderComp/>
      case "ExpensesTable":
          return (
            <ExpensesTable
            companySummary={companySummary}
            selectedExpenseId={selectedExpenseId}
            setSelectedExpenseId={setSelectedExpenseId}
            />
          )
      case "CreateExpense":
        return <CreateExpenseComp/>

      default:
        return (
          <OrdersTable
          companySummary={companySummary}
          selectedOrderId={selectedOrderId}
            setSelectedOrderId={setSelectedOrderId}
          />
        );
    }
  }
  return (
    <Container>
      <EditOrderModal isEditOrderModalOpen={isEditOrderModalOpen} setIsEditOrderModalOpen={setIsEditOrderModalOpen} companySummary={companySummary} selectedOrderId={selectedOrderId} companyEmployees={companyEmployees}/>
      <DeleteOrderModal isDeleteOrderModalOpen={isDeleteOrderModalOpen} setIsDeleteOrderModalOpen={setIsDeleteOrderModalOpen} companySummary={companySummary} selectedOrderId={selectedOrderId}/>
      <ContainerNav>
      <OrdersNav>
      <NavContent>
        <MenuButtons
          onClick={() => {
            setSelectedComp("OrdersTable")
          }}
          text="Pedidos"
        />
        <MenuButtons
          onClick={() => {
            setSelectedComp("CreateOrder")
          }}
          text="Adicionar pedido"
        />
        <MenuButtons
          onClick={() => {
            if(!selectedOrderId){
              window.alert("Selecione um pedido")
              setSelectedComp("OrdersTable")
            }else{
              setIsEditOrderModalOpen(true)
            }
          }}
          text="Editar pedido"
        />
        <MenuButtons
          onClick={() => {
            if(!selectedOrderId){
              window.alert("Selecione um pedido")
            }else{
              setIsDeleteOrderModalOpen(true)
            }
          }}
          text="Excluir pedido"
        />
      </NavContent>
      </OrdersNav>
      <ExpensesNav>
      <NavContent>
        <MenuButtons
          onClick={() => {
            setSelectedComp("ExpensesTable")
          }}
          text="Despesas"
        />
        <MenuButtons
          onClick={() => {
            setSelectedComp("CreateExpense")
          }}
          text="Adicionar despesa"
        />
        <MenuButtons
          onClick={() => {
          if(!selectedExpenseId){
            window.alert("Selecione uma despesa")
          }else{
            window.alert("ABERTURA DO MODAL  DE EDIÇÃO DE DESPESA")
          }
          }}
          text="Editar despesa"
        />
        <MenuButtons
          onClick={() => {
         if(!selectedExpenseId){
          window.alert("Selecione uma despesa")
         }else{
          window.alert("ABERTURA DO MODAL DE EXCLUSÃO DE DESPESA")
         }
          }}
          text="Excluir despesa"
        />
      </NavContent>
      </ExpensesNav>
      </ContainerNav>
      <OptContent>{controlSelectedComp()}</OptContent>
    </Container>
  );
}
