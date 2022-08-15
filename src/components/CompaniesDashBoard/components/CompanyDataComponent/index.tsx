import { Container, LeftContent, RightContent } from "./styles"

interface ICompanyDataComponentProps{
    companyData: any
}

export default function CompanyDataComponent({companyData}: ICompanyDataComponentProps){


    return (
        <Container>
            <LeftContent>
              <span>Nome:</span>
                <span>Email:</span>
                <span>CNPJ:</span>
                <span>Data de criação:</span>
                <span>Data de atualização:</span>
                <span>Área de atuação:</span>
            </LeftContent>
            <RightContent>
            <span>{companyData.name}</span>
            <span>{companyData.email}</span>
            <span>{companyData.cnpj}</span>
            <span>{companyData.created_at}</span>
            <span>{companyData.updated_at}</span>
            <span>Logística</span>

               
            </RightContent>

        </Container>
    )
}