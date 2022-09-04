import { useContext, useState } from "react";
import { Context } from "../../../../../../context";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import MenuButtons from "./components/MenuButton";
import DeleteEmployeeModal from "./components/OptModal/DeleteEmployeeModal";
import EditEmployeeModal from "./components/OptModal/EditEmployeeModal";
import { Container, NavContent, OptContent } from "./styles";

export default function EmployeesComponent() {
  const [selectedComp, setSelectedComp] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const { companyEmployees } = useContext(Context);
  const [isOptModalOpen, setIsOptModalOpen] = useState<boolean>(false)
  const [isDeleteEmployeeModalOpen, setIsDeleteEmployeeModalOpen] = useState<boolean>(false)

  function handleDeleteEmployee() {
   if(!selectedEmployeeId){
    window.alert("Selecione um funcionário")
   }else{
    setIsDeleteEmployeeModalOpen(true)
   }
  }
  function handleEditEmployee() {
   if(!selectedEmployeeId){
    window.alert("Selecione um Funcionário")
   }else{
    setIsOptModalOpen(true)
   }
  }
  function controlSelectedComp() {
    switch (selectedComp) {
      case "comp1":
        return (
          <Comp1
            companyEmployees={companyEmployees}
            selectedEmployeeId={selectedEmployeeId}
            setSelectedEmployeeId={setSelectedEmployeeId}
          />
        );
      case "comp2":
        return <Comp2 />;

      default:
        return (
          <Comp1
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
      
      
      
      <NavContent>
        <MenuButtons
          onClick={() => setSelectedComp("comp1")}
          text="Funcionários"
        />
        <MenuButtons
          onClick={() => setSelectedComp("comp2")}
          text="Adicionar Funcionário"
        />
        <MenuButtons
          onClick={() => {
            setSelectedComp("comp1");
            handleEditEmployee();
          }}
          text="Editar Funcionário"
        />
        <MenuButtons
          onClick={() => {
            setSelectedComp("comp1");
            handleDeleteEmployee();
          }}
          text="Remover Funcionário"
        />
      </NavContent>
      <OptContent>{controlSelectedComp()}</OptContent>
    </Container>
  );
}
