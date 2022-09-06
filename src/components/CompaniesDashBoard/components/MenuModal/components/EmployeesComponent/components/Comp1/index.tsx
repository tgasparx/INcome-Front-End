import EmployeesTable from "./components/EmployeesTable";
import { Container, Content } from "./styles";

interface IComp1Props {
  setSelectedEmployeeId: any;
  selectedEmployeeId: any;
  companyEmployees: any;
}
export default function Comp1({
  selectedEmployeeId,
  setSelectedEmployeeId,
  companyEmployees,
}: IComp1Props) {
  return (
    <Container>
      {/* <DataShowTable
        companyEmployees={companyEmployees}
        selectedEmployeeId={selectedEmployeeId}
        setSelectedEmployeeId={setSelectedEmployeeId}
      /> */}
      <Content>
      <EmployeesTable companyEmployees={companyEmployees} setSelectedEmployeeId={setSelectedEmployeeId} selectedEmployeeId={selectedEmployeeId}/>
      </Content>

  
    </Container>
  );
}
