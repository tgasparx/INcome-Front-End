import { useContext, useState } from "react";
import { Context } from "../../../../../../context";
import OrdersTable from "./components/OrdersTable";
import CreateOrderComp from "./components/CreateOrderComp";
import MenuButtons from "./components/MenuButton";
import DeleteEmployeeModal from "./components/OptModal/DeleteEmployeeModal";
import EditEmployeeModal from "./components/OptModal/EditEmployeeModal";
import { Container, NavContent, OptContent, OrdersNav, ExpensesNav, ContainerNav } from "./styles";

export default function MovimentationsCOmponent() {
  const [selectedComp, setSelectedComp] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const { companyEmployees } = useContext(Context);
  const [isOptModalOpen, setIsOptModalOpen] = useState<boolean>(false)
  const [isDeleteEmployeeModalOpen, setIsDeleteEmployeeModalOpen] = useState<boolean>(false)

  
  function controlSelectedComp() {
    switch (selectedComp) {
      case "comp1":
        return (
          <OrdersTable
            companyEmployees={companyEmployees}
            selectedEmployeeId={selectedEmployeeId}
            setSelectedEmployeeId={setSelectedEmployeeId}
          />
        );
      case "comp2":
        return <CreateOrderComp />;

      default:
        return (
          <OrdersTable
            companyEmployees={companyEmployees}
            selectedEmployeeId={selectedEmployeeId}
            setSelectedEmployeeId={setSelectedEmployeeId}
          />
        );
    }
  }
  return (
    <Container>
      <EditEmployeeModal isOptModalOpen={isOptModalOpen} setIsOptModalOpen={setIsOptModalOpen} companyEmployees={companyEmployees} selectedEmployeeId={selectedEmployeeId}/>
      <DeleteEmployeeModal isDeleteEmployeeModalOpen={isDeleteEmployeeModalOpen} setIsDeleteEmployeeModalOpen={setIsDeleteEmployeeModalOpen} companyEmployees={companyEmployees} selectedEmployeeId={selectedEmployeeId}/>
      <ContainerNav>
      <OrdersNav>
      <NavContent>
        <MenuButtons
          onClick={() => {
            setSelectedComp("comp1")
          }}
          text="Pedidos"
        />
        <MenuButtons
          onClick={() => {
            setSelectedComp("comp2")
          }}
          text="Adicionar pedido"
        />
        <MenuButtons
          onClick={() => {
            // setSelectedComp("comp1");
            // handleEditEmployee();
          }}
          text="Editar pedido"
        />
        <MenuButtons
          onClick={() => {
            // setSelectedComp("comp1");
            // handleDeleteEmployee();
          }}
          text="Excluir pedido"
        />
      </NavContent>
      </OrdersNav>
      <ExpensesNav>
      <NavContent>
        <MenuButtons
          onClick={() => {
            // setSelectedComp("comp1")
          }}
          text="Despesas"
        />
        <MenuButtons
          onClick={() => {
            // setSelectedComp("comp2")
          }}
          text="Adicionar despesa"
        />
        <MenuButtons
          onClick={() => {
            // setSelectedComp("comp1");
            // handleEditEmployee();
          }}
          text="Editar despesa"
        />
        <MenuButtons
          onClick={() => {
            // setSelectedComp("comp1");
            // handleDeleteEmployee();
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
