import { Container, ShowData } from "./styles";

interface IUserDataCardProps{
    userData: any
}
export default function UserDataCard({userData}: IUserDataCardProps){

    return (
       <Container>
        <ShowData><span>Nome</span> <span>{userData.name}</span></ShowData>
        <ShowData><span>Email</span> <span>{userData.email}</span></ShowData>
        <ShowData><span>CPF</span> <span>{userData.cpf}</span></ShowData>
        <ShowData><span>Profissão</span> <span>{userData.job}</span></ShowData>
       </Container>
    )
}