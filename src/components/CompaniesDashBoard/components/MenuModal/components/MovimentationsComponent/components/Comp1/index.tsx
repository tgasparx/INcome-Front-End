import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import { Container } from "./styles";
import DataShowTable from "./Table";


export default function Comp1(){
const {companyEmployees} = useContext(Context)
    return (
        <Container>

<DataShowTable companyEmployees={companyEmployees}/>
        </Container>
   
    )
}