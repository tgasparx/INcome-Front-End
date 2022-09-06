import OrdersTable from "./components/OrdersTable";
import PendingOrderCard from "./components/PendindOrderCard";
import { Container,Content, First, Second } from "./styles";



export default function UserSummaryDashboard(){

    return (
     <Container>
        <Content>
        <First>
        <PendingOrderCard/>
        
        </First>
        <Second>
     <OrdersTable/>
        </Second>
        </Content>

     </Container>
    )
}