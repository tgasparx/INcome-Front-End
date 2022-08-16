import { Container } from "./styles"

interface IEditOrderCompProps{
    setIsOptModalOpen: any
}
export default function EditOrderComp({setIsOptModalOpen}: IEditOrderCompProps){

    return <Container onMouseLeave={() => setIsOptModalOpen(false)}>Edit order</Container>
}