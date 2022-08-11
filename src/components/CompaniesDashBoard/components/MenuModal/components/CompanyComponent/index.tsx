import OptChangeInformationCompanyComponent from "./components/OptChangeInformationCompanyComponent";
import OptCompanyComponent from "./components/OptCompanyComponent";
import { Container, NavContent, OptContent } from "./styles";


export default function CompanyComponent(){

    return (
       <Container>
        <NavContent>
        <button>Companhia </button>
        <button>Alterar Informações</button>
            <button>Alterar Senha</button>
        </NavContent>
        <OptContent>
            <OptCompanyComponent/>
            <OptChangeInformationCompanyComponent/>
        </OptContent>
       </Container>
    )
}