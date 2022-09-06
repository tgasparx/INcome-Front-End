import ListExpensesTable from "./components/ListExpensesTable";
import { Container } from "./styles";

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
      <ListExpensesTable
        companySummary={companySummary}
        selectedExpenseId={selectedExpenseId}
        setSelectedExpenseId={setSelectedExpenseId}
      />
    </Container>
  );
}
