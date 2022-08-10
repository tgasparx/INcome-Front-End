import { useContext, useState } from "react";
import { Context } from "../../context";
import CompanyInfoAccordion from "./components/CompanyInfoAccordion";
import EmployeesInfoAccordion from "./components/EmployeesInfoAccordion";
import ExpensesGrafic from "./components/ExpensesGrafic";
import MovimentationsInfoAccordion from "./components/MovimentationsInfoAccordion";
import { OrderEvolutionGrafic } from "./components/OrderEvolutionGrafic";
import ShowEmployeesDataComponent from "./components/showEmployeesDataComponent";
import ShowMovimentationsDataComponent from "./components/showMovimentationsDataComponent";
import { Container, DownContent, Left, Right, UpContent, UpLeft, UpRight } from "./styles";

interface ICompaniesDashBoardProps{
    companySummary: any
}

export default function CompaniesDashboard(){
const {companyData, companyEmployees, companySummary} = useContext(Context)
const [selectedDataComponent, setSelectedDataComponent] = useState<any>("")
const [selectedMovimentation, setSelectedMovimentation] = useState<any>("")
function handleChangeSelectedDataComponent(){
    switch (selectedDataComponent) {
        case "employees":
            return <ShowEmployeesDataComponent companyEmployees={companyEmployees}/>
        case "movimentations":
            return <ShowMovimentationsDataComponent companySummary={companySummary} selectedMovimentation={selectedMovimentation}/>
        default:
            return <div><h2>Selecione a informação no mesnu</h2></div>
    }
}

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
            <EmployeesInfoAccordion companyEmployees={companyEmployees} setSelectedDataComponent={setSelectedDataComponent}/>
            <MovimentationsInfoAccordion companySummary={companySummary} setSelectedDataComponent={setSelectedDataComponent} setSelectedMovimentation={setSelectedMovimentation}/>
        </Left>
        <Right>
        {handleChangeSelectedDataComponent()}

        </Right>
        </DownContent>
       </Container>
        </>
    )
}