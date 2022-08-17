import { Container, ShowData } from "./styles";


export default function UserDataCard(){

    return (
       <Container>
        <ShowData><span>Nome</span> <span>Francisco</span></ShowData>
        <ShowData><span>Email</span> <span>francisco@mail</span></ShowData>
        <ShowData><span>CPF</span> <span>124512</span></ShowData>
        <ShowData><span>Profissão</span> <span>Motorista</span></ShowData>
       </Container>
    )
}