import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import { Container, LeftContent, RightContent } from "./styles";


export function Comp1(){
const {companyData} = useContext(Context)
    return (
        <>
      <Container>
        
        <LeftContent>
        <span>Nome:</span>
       <span>Email:</span>
        <span>Cnpj:</span>
        <span>Data de criação:</span>
        <span>Data de atualização:</span>
        <span>Área de atuação:</span>
        </LeftContent>
        <RightContent>
        {companyData.name}
       <span>{companyData.email}</span>
        <span>{companyData.cnpj}</span>
        <span>{companyData.created_at}</span>
        <span>{companyData.updated_at}</span>
        <span>Logística</span>
        </RightContent>

       
      </Container>
        </>
    )
}