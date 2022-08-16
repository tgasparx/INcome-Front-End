import { Container } from "./styles"

interface IDeleteExpenseCompProps{
    setIsOptModalOpen: any
}
export default function DeleteExpenseComp({setIsOptModalOpen}: IDeleteExpenseCompProps){

    return <Container onMouseLeave={() => setIsOptModalOpen(false)}>Edit order</Container>
}