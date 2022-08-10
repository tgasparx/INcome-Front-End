import { useContext } from "react";
import { Context } from "../../context";
import CompanyInfoAccordion from "./components/CompanyInfoAccordion";
import EmployeesInfoAccordion from "./components/EmployeesInfoAccordion";
import ExpensesGrafic from "./components/ExpensesGrafic";
import MovimentationsInfoAccordion from "./components/MovimentationsInfoAccordion";
import { OrderEvolutionGrafic } from "./components/OrderEvolutionGrafic";
import ShowDataComponent from "./components/showDataComponent";
import { Container, DownContent, Left, Right, UpContent, UpLeft, UpRight } from "./styles";

interface ICompaniesDashBoardProps{
    companySummary: any
}

export default function CompaniesDashboard({companySummary}: ICompaniesDashBoardProps){
const {companyData, companyEmployees} = useContext(Context)

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
            <CompanyInfoAccordion companyData={companyData}/>
            <EmployeesInfoAccordion companyEmployees={companyEmployees}/>
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