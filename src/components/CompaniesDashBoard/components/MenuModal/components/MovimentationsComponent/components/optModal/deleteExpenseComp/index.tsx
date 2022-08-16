import { useContext } from "react"
import { Context } from "../../../../../../../../../context"
import { Container } from "./styles"

interface IDeleteExpenseCompProps{
    setIsOptModalOpen: any
}
export default function DeleteExpenseComp({setIsOptModalOpen}: IDeleteExpenseCompProps){
    return <Container onMouseLeave={() => setIsOptModalOpen(false)}>
        <div><div></div></div>
        <div>

        </div>
    </Container>
}