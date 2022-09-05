import { useContext, useState } from "react";
import { Context } from "../../../../../../../../../context";
import { OutBox } from "../../../../OutBox";
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
    const {handleEditExpense, controlOutBox} = useContext(Context)
    const [status, setStatus] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [inputColor, setInputColor] = useState("gray")


    async function handleSubmit(){
        if(status && description && status){
            const edited = await handleEditExpense({description, value, status}, selectedExpenseId)
            controlOutBox("green", "Despesa editada com sucesso")
        }else{
            controlOutBox("orange", "Preencha as informações")
            setInputColor("orange")
        }
 
    
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
         <Input value={description} onChange={(e: any) => setDescription(e.target.value)} required={true} inputColor={inputColor}/>
         <Label>Valor</Label>
         <Input value={value} onChange={(e:any) => setValue(e.target.value)} required={true} type="number" style={{width: "200px"}} inputColor={inputColor}/>
         <Label>Status</Label>
        <SelectStatus status={status} setStatus={setStatus} inputColor={inputColor}/>
         <Button onClick={handleSubmit}>Confirmar</Button>
         <OutBox/>
        </Form>
        </Container>
     )
   }else{
    return <></>
   }
}