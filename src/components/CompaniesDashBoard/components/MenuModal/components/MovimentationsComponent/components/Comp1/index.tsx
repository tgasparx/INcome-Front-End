import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import { Container } from "./styles";
import DataShowTable from "./Table";

interface IComp1Props{
    selectedOrderId: any
    setSelectedOrderId: any
}
export default function Comp1({selectedOrderId, setSelectedOrderId}: IComp1Props){
const {companySummary} = useContext(Context)
    return (
        <Container>

<DataShowTable companySummary={companySummary} selectedOrderId={selectedOrderId} setSelectedOrderId={setSelectedOrderId}/>
        </Container>
   
    )
}