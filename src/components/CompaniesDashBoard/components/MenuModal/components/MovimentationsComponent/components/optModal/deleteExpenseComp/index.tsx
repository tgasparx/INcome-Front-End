import { useContext } from "react"
import { Context } from "../../../../../../../../../context"
import StyledButton from "./components/button"
import { Container, ContainerTopCloseFlag, Content, ContentTopCloseFlag, Down, DownLeft, DownRight, Input, Label, Select, Span, Up, UpLeft, UpRight } from "./styles"

interface IEditOrderCompProps{
    setIsOptModalOpen: any
    expense: any
}
export default function DeleteExpenseComp({setIsOptModalOpen, expense}: IEditOrderCompProps){
    const {handleDeleteExpense} = useContext(Context)
    async function handleSubmit(){
        const deleted = await handleDeleteExpense(expense.expense_id)
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
<h3>Tem certeza que deseja excluir essa despesa?</h3>




     </DownLeft>
        <DownRight> 
        <StyledButton text="Sim, desejo excluir" onClick={handleSubmit}/>
        <StyledButton text="Não, desejo cancelar" onClick={() => setIsOptModalOpen(false)}/>
           
                   </DownRight>
     </Down>
      
        </Content>
    
    
    </Container>
}