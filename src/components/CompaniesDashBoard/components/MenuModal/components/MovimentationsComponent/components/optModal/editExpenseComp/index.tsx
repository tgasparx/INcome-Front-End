import StyledButton from "./components/button"
import { Container, ContainerTopCloseFlag, Content, ContentTopCloseFlag, Down, DownLeft, DownRight, Input, Label, Select, Span, Up, UpLeft, UpRight } from "./styles"

interface IEditOrderCompProps{
    setIsOptModalOpen: any
    expense: any
}
export default function EditExpenseComp({setIsOptModalOpen, expense}: IEditOrderCompProps){

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
           <Span> {expense.expense_id}</Span>
            <Span>{expense.description}</Span>
           <Span> {expense.value}</Span>
            <Span>{expense.status}</Span>
            <Span>{expense.created_at}</Span>
            <Span>{expense.updated_at}</Span>
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