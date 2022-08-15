import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import { Container } from "./styles";
import DataShowTable from "./Table";


export default function Comp1(){
const {companySummary} = useContext(Context)
    return (
        <Container>

<DataShowTable companySummary={companySummary}/>
        </Container>
   
    )
}