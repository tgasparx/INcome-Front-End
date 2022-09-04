import { Container } from "./styles";
import DataShowTable from "./Table";

interface IComp1Props {
  setSelectedEmployeeId: any;
  selectedEmployeeId: any;
  companyEmployees: any;
}
export default function OrdersTable({
  selectedEmployeeId,
  setSelectedEmployeeId,
  companyEmployees,
}: IComp1Props) {
  return (
    <Container>
      <DataShowTable
        companyEmployees={companyEmployees}
        selectedEmployeeId={selectedEmployeeId}
        setSelectedEmployeeId={setSelectedEmployeeId}
      />
    </Container>
  );
}
