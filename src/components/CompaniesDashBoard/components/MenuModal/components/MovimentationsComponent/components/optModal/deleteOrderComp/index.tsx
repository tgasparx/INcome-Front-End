import { Container } from "./styles"

interface IDeleteOrderCompProps{
    setIsOptModalOpen: any
}
export default function DeleteOrderComp({setIsOptModalOpen}: IDeleteOrderCompProps){

    return <Container onMouseLeave={() => setIsOptModalOpen(false)}>Delete order</Container>
}