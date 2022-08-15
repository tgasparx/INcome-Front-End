import { useContext, useState } from "react";
import { Context } from "../../context";
import CompanyDataComponent from "./components/CompanyDataComponent";
import EmployeesInfoAccordion from "./components/EmployeesInfoAccordion";
import ExpensesGrafic from "./components/ExpensesGrafic";
import MenuModal from "./components/MenuModal";
import MovimentationsInfoAccordion from "./components/MovimentationsInfoAccordion";
import { OrderEvolutionGrafic } from "./components/OrderEvolutionGrafic";
import ShowEmployeesDataComponent from "./components/showEmployeesDataComponent";
import ShowMovimentationsDataComponent from "./components/showMovimentationsDataComponent";
import { Button, Container, DownContent, Left, Right, UpContent, UpLeft, UpRight } from "./styles";

interface ICompaniesDashBoardProps{
    companySummary: any
}

export default function CompaniesDashboard(){
const {companyData, companyEmployees, companySummary} = useContext(Context)
const [selectedDataComponent, setSelectedDataComponent] = useState<any>("")
const [selectedMovimentation, setSelectedMovimentation] = useState<any>("")
const [modalIsOpen, setIsOpen] = useState(false);
function handleChangeSelectedDataComponent(){
    switch (selectedDataComponent) {
        case "company":
            return <CompanyDataComponent companyData={companyData}/>
        case "employees":
            return <ShowEmployeesDataComponent companyEmployees={companyEmployees}/>
        case "movimentations":
            return <ShowMovimentationsDataComponent companySummary={companySummary} selectedMovimentation={selectedMovimentation}/>
        default:
            return <CompanyDataComponent companyData={companyData}/>
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
            <Button onClick={() => setSelectedDataComponent("company")}>Companhia</Button>
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