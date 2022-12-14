import { useContext, useState } from "react";
import { Context } from "../../context";
import CompanyDataComponent from "./components/CompanyDataComponent";
import DashComponent from "./components/DashComponent";
import { OrderEvolutionGrafic } from "./components/OrderEvolutionGrafic";
import ShowEmployeesDataComponent from "./components/showEmployeesDataComponent";
import ShowMovimentationsDataComponent from "./components/showMovimentationsDataComponent";
import { Container, DownContent, UpContent, UpLeft } from "./styles";

export default function CompaniesDashboard() {
    const { companyData, companyEmployees, companySummary } = useContext(Context)
    const [selectedDataComponent, setSelectedDataComponent] = useState<any>("")
    const [selectedMovimentation, setSelectedMovimentation] = useState<any>("")


    function handleChangeSelectedDataComponent() {
        switch (selectedDataComponent) {
            case "company":
                return <CompanyDataComponent companySummary={companySummary} companyEmployees={companyEmployees} companyData={companyData} />
            case "employees":
                return <ShowEmployeesDataComponent companyEmployees={companyEmployees} />
            case "movimentations":
                return <ShowMovimentationsDataComponent companySummary={companySummary} selectedMovimentation={selectedMovimentation} />
            default:
                return <CompanyDataComponent companySummary={companySummary} companyEmployees={companyEmployees} companyData={companyData} />
        }
    }

    return (
        <>
            <Container>
                <UpContent>
                    <UpLeft>
                        <OrderEvolutionGrafic companySummary={companySummary} />
                    </UpLeft>
                </UpContent>
                <DownContent>
                    <DashComponent companySummary={companySummary} companyEmployees={companyEmployees} />
                    {/* <Left>
            <Button id="company" onClick={() => setSelectedDataComponent("company")}>Companhia</Button>
            <Button id="employees" onClick={() => setSelectedDataComponent("employees")}>Funcion??rios</Button>
            <MovimentationsInfoAccordion companySummary={companySummary} setSelectedDataComponent={setSelectedDataComponent} setSelectedMovimentation={setSelectedMovimentation}/>
        </Left>
        <Right>
        {handleChangeSelectedDataComponent()}

        </Right> */}
                </DownContent>
            </Container>
        </>
    )
}