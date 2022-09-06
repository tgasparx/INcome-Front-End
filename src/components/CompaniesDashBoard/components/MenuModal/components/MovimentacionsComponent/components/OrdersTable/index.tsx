import ListOrdersTable from "./components/ListOrdersTable";
import { Container } from "./styles";

interface IComp1Props {
  setSelectedOrderId: any;
  selectedOrderId: any;
  companySummary: any;
}
export default function OrdersTable({
  selectedOrderId,
  setSelectedOrderId,
  companySummary,
}: IComp1Props) {
  return (
    <Container>
      <ListOrdersTable
        companySummary={companySummary}
        selectedOrderId={selectedOrderId}
        setSelectedOrderId={setSelectedOrderId}
      />
    </Container>
  );
}
