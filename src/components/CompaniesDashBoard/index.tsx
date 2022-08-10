import CompanyInfoAccordion from "./components/CompanyInfoAccordion";
import EmployeesInfoAccordion from "./components/EmployeesInfoAccordion";
import ExpensesGrafic from "./components/ExpensesGrafic";
import MovimentationsInfoAccordion from "./components/MovimentationsInfoAccordion";
import { OrderEvolutionGrafic } from "./components/OrderEvolutionGrafic";
import ShowDataComponent from "./components/showDataComponent";
import { Container, DownContent, Left, Right, UpContent, UpLeft, UpRight } from "./styles";

export default function CompaniesDashboard(){


    return (
        <>
       <Container>
        <UpContent>
            <UpLeft>
            <OrderEvolutionGrafic/>
            </UpLeft>
            <UpRight>
                <ExpensesGrafic/>
            </UpRight>
           
        </UpContent>
        <DownContent>
        <Left>
            <CompanyInfoAccordion/>
            <EmployeesInfoAccordion/>
            <MovimentationsInfoAccordion/>
        </Left>
        <Right>
        <ShowDataComponent/>

        </Right>
        </DownContent>
       </Container>
        </>
    )
}