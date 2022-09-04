import { Container } from "./styles";
import DataShowTable from "./Table";

interface IComp1Props {
  setSelectedExpenseId: any;
  selectedExpenseId: any;
  companySummary: any;
}
export default function ExpensesTable({
  selectedExpenseId,
  setSelectedExpenseId,
  companySummary,
}: IComp1Props) {
  return (
    <Container>
      <DataShowTable
        companySummary={companySummary}
        selectedExpenseId={selectedExpenseId}
        setSelectedExpenseId={setSelectedExpenseId}
      />
    </Container>
  );
}
