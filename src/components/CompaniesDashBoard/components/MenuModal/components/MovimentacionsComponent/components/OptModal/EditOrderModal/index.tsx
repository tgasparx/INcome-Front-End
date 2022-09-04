import { useContext, useState } from "react";
import { Context } from "../../../../../../../../../context";
import SelectDriver from "./components/SelectDriver";
import SelectStatus from "./components/SelectStatus";
import { Container, Label, Input, Button, Header, CloseButton, Form, ShowInfo, Left, Right } from "./styles";


interface OptModalProps{
    isEditOrderModalOpen: boolean
    setIsEditOrderModalOpen: any
    companySummary: any
    selectedOrderId: any
    companyEmployees: any
}
export default function EditOrderModal({isEditOrderModalOpen, setIsEditOrderModalOpen, companySummary, selectedOrderId, companyEmployees}: OptModalProps){
    const selectedOrderData = companySummary.orders_summary.all_orders.filter((e: any) => e.order_id === selectedOrderId)
    const {handleEditOrder} = useContext(Context)
    const [status, setStatus] = useState("")
    const [driver, setDriver] = useState("")
    const [client, setClient] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [km, setKm] = useState("")


    async function handleSubmit(){
        const edited = await handleEditOrder({description, value, status, client, driver, km}, selectedOrderId)
        // console.log(selectedEmployeeId)
        window.location.href = "/homeCompanies"
    }


   if(isEditOrderModalOpen){
    return (
        <Container>
            <Header> Editar Pedido<CloseButton onClick={() => setIsEditOrderModalOpen(false)}>Fechar</CloseButton></Header>
        <ShowInfo>
            <Left>
                <span>Descrição:</span>
                <span>Valor:</span>
                <span>Motorista:</span>
                <span>Cliente:</span>
                <span>Status:</span>
            </Left>
            <Right>
           <span> {selectedOrderData[0].description}</span>
         <span>{selectedOrderData[0].value}</span>
         <span>{selectedOrderData[0].driver}</span>
         <span>{selectedOrderData[0].client}</span>
       <span>  {selectedOrderData[0].status}</span>
            </Right>
        </ShowInfo>
        <Form>
        <Label>Descrição</Label>
         <Input value={description} onChange={(e: any) => setDescription(e.target.value)} required={true}/>
         <Label>Valor</Label>
         <Input value={value} onChange={(e:any) => setValue(e.target.value)} required={true} type="number" style={{width: "200px"}}/>
         <Label>Status</Label>
        <SelectStatus status={status} setStatus={setStatus}/>
        <Label>Motorista</Label>
        <SelectDriver driver={driver} setDriver={setDriver} companyEmployees={companyEmployees}/>
        <Label>Cliente</Label>
        <Input value={client} onChange={(e:any) => setClient(e.target.value)} required={true}/>
        <Label>Km</Label>
        <Input value={km} onChange={(e:any) => setKm(e.target.value)} required={true} type="number" style={{width: "200px"}}/>
         <Button onClick={handleSubmit}>Confirmar</Button>
        </Form>
        </Container>
     )
   }else{
    return <></>
   }
}