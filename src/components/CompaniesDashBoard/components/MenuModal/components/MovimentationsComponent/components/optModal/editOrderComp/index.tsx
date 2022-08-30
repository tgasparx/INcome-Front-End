import { useContext, useState } from "react"
import { Context } from "../../../../../../../../../context"
import StyledButton from "./components/button"
import { Container, ContainerTopCloseFlag, Content, ContentTopCloseFlag, Down, DownLeft, DownRight, Input, Label, Select, Span, Up, UpLeft, UpRight } from "./styles"

interface IEditOrderCompProps{
    setIsOptModalOpen: any
    order: any
}
export default function EditOrderComp({setIsOptModalOpen, order}: IEditOrderCompProps){
    const {handleEditOrder} = useContext(Context)
const [description, setDescription] = useState(order.description)
const [value, setValue] = useState(order.value)
const [status, setStatus] = useState(order.status)


async function handleSubmit(){
const edited = await handleEditOrder({description, value ,status}, order.id)
window.location.href = "/homeCompanies"
}

    return <Container >
        <ContainerTopCloseFlag
        >
            <ContentTopCloseFlag>
                <button onClick={() => setIsOptModalOpen(false)}> X</button>
            </ContentTopCloseFlag>
        </ContainerTopCloseFlag>
        <Content>
     <Up>
     <UpLeft>
           <Span> ID:</Span>
            <Span>Descrição:</Span>
            <Span>Valor:</Span>
            <Span>Status:</Span>
            <Span>Data de criação:</Span>
            <Span>Data de atualização:</Span>
        </UpLeft>
        <UpRight>
           <Span> {order.order_id}</Span>
            <Span>{order.description}</Span>
           <Span> {order.value}</Span>
            <Span>{order.status}</Span>
            <Span>{order.created_at}</Span>
            <Span>{order.updated_at}</Span>
        </UpRight>
     </Up>
     <Down>
     <DownLeft>
<Label>Descrição</Label>
<Input value={description} onChange={(e:any) => setDescription(e.target.value)}/>
<Label>Valor</Label>
<Input value ={value} onChange={(e:any) => setValue(e.target.value)}/>
<Label>Status</Label>
<Select onChange={(e:any) => setStatus(e.target.value)}>
    <option value="Concluido">Concluído</option>
    <option value="Pendente">Pendente</option>
</Select>



     </DownLeft>
        <DownRight>

           <StyledButton text="Confirmar" onClick={handleSubmit}/>
           
                   </DownRight>
     </Down>
      
        </Content>
    
    
    </Container>
}