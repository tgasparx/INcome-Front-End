import { useContext, useState } from "react"
import { Context } from "../../../../../../../../../context"
import StyledButton from "./components/button"
import { Container, ContainerTopCloseFlag, Content, ContentTopCloseFlag, Down, DownLeft, DownRight, Input, Label, Select, Span, Up, UpLeft, UpRight } from "./styles"

interface IEditOrderCompProps{
    setIsOptModalOpen: any
    order: any
}
export default function DeleteOrderComp({setIsOptModalOpen, order}: IEditOrderCompProps){
    const [referedOrderId, setReferedOrderId] = useState(order.order_id)
    const {handleDeleteOrder} = useContext(Context)

    async function handleSubmit(){
        const deleted = await handleDeleteOrder(referedOrderId)
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
<h3>Tem certeza que deseja excluir esse pedido? </h3>




     </DownLeft>
        <DownRight>
        <StyledButton text="Sim, desejo excluir" onClick={handleSubmit}/>
        <StyledButton text="Não, desejo cancelar" onClick={() => setIsOptModalOpen(false)}/>
           
                   </DownRight>
     </Down>
      
        </Content>
    
    
    </Container>
}