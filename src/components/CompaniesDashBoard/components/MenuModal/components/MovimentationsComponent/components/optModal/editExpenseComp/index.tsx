import { Container } from "./styles"

interface IEditExpenseCompProps{
    setIsOptModalOpen: any
}
export default function EditExpenseComp({setIsOptModalOpen}: IEditExpenseCompProps){

    return <Container onMouseLeave={() => setIsOptModalOpen(false)}>Edit Expense</Container>
}