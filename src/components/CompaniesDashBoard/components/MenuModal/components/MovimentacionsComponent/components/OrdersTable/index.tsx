import { Container } from "./styles";
import DataShowTable from "./Table";

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
      <DataShowTable
        companySummary={companySummary}
        selectedOrderId={selectedOrderId}
        setSelectedOrderId={setSelectedOrderId}
      />
    </Container>
  );
}
