import { useContext, useState } from "react";
import { Context } from "../../../../../../../../../context";
import SelectDriver from "./components/SelectDriver";
import SelectStatus from "./components/SelectStatus";
import { Container, Label, Input, Button, Header, CloseButton, Form, ShowInfo, Left, Right } from "./styles";


interface OptModalProps{
    isEditExpenseModalOpen: boolean
    setIsEditExpenseModalOpen: any
    companySummary: any
    selectedExpenseId: any
    companyEmployees: any
}
export default function EditExpenseModal({isEditExpenseModalOpen, setIsEditExpenseModalOpen, companySummary, selectedExpenseId, companyEmployees}: OptModalProps){
    const selectedOrderData = companySummary.expenses_summary.all_expenses.filter((e: any) => e.expense_id === selectedExpenseId)
    const {handleEditExpense} = useContext(Context)
    const [status, setStatus] = useState("")
    const [driver, setDriver] = useState("")
    const [client, setClient] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [km, setKm] = useState("")


    async function handleSubmit(){
        const edited = await handleEditExpense({description, value, status}, selectedExpenseId)
        // console.log(selectedEmployeeId)
        window.location.href = "/homeCompanies"
    }


   if(isEditExpenseModalOpen){
    return (
        <Container>
            <Header> Editar Despesa<CloseButton onClick={() => setIsEditExpenseModalOpen(false)}>Fechar</CloseButton></Header>
        <ShowInfo>
            <Left>
                <span>Descrição:</span>
                <span>Valor:</span>
                <span>Status:</span>
            </Left>
            <Right>
           <span> {selectedOrderData[0].description}</span>
         <span>{selectedOrderData[0].value}</span>
         <span>{selectedOrderData[0].status}</span>
            </Right>
        </ShowInfo>
        <Form>
        <Label>Descrição</Label>
         <Input value={description} onChange={(e: any) => setDescription(e.target.value)} required={true}/>
         <Label>Valor</Label>
         <Input value={value} onChange={(e:any) => setValue(e.target.value)} required={true} type="number" style={{width: "200px"}}/>
         <Label>Status</Label>
        <SelectStatus status={status} setStatus={setStatus}/>
         <Button onClick={handleSubmit}>Confirmar</Button>
        </Form>
        </Container>
     )
   }else{
    return <></>
   }
}