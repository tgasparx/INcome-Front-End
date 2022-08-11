import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import { Container } from "./styles";


export function Comp1(){
const {companyData} = useContext(Context)
    return (
        <>
      <Container>
        Nome: {companyData.name}<br></br>
        Email:  {companyData.email}<br></br>
        CNPJ: {companyData.cnpj}<br></br>
        Data de criação:  {companyData.created_at}<br></br>
        Data de atualização: {companyData.updated_at}<br></br>
        Área de atuação: logística
      </Container>
        </>
    )
}