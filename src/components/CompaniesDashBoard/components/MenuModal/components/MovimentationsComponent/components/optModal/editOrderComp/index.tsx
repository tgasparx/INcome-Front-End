import StyledButton from "./components/button"
import { Container, ContainerTopCloseFlag, Content, ContentTopCloseFlag, Down, DownLeft, DownRight, Input, Label, Select, Span, Up, UpLeft, UpRight } from "./styles"

interface IEditOrderCompProps{
    setIsOptModalOpen: any
    order: any
}
export default function EditOrderComp({setIsOptModalOpen, order}: IEditOrderCompProps){

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
<Input/>
<Label>Valor</Label>
<Input/>
<Label>Status</Label>
<Select >
    <option value="Concluido">Concluído</option>
    <option value="Pendente">Pendente</option>
</Select>



     </DownLeft>
        <DownRight>

           <StyledButton text="Confirmar" onClick={() => {}}/>
           
                   </DownRight>
     </Down>
      
        </Content>
    
    
    </Container>
}