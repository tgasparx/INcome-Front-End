import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import { Container } from "./styles";
import DataShowTable from "./Table";

interface IComp3Props{
    selectedExpenseId: any
    setSelectedExpenseId: any
}
export default function Comp3({selectedExpenseId, setSelectedExpenseId}: IComp3Props){
const {companySummary} = useContext(Context)
    return (
        <Container>

<DataShowTable companySummary={companySummary} selectedExpenseId={selectedExpenseId} setSelectedExpenseId={setSelectedExpenseId}/>
        </Container>
   
    )
}