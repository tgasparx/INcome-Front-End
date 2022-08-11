import { Container, NavContent, OptContent } from "./styles";


export default function MovimentationsComponent(){

    return (
        <Container>
        <NavContent>
        <button>Pedidos </button>
        <button>Despesas </button>
            <button>Adicionar Movimentação</button>
            <button>Editar Movimentação</button>
            <button>Excluir Movimentação</button>
        </NavContent>
        <OptContent></OptContent>
       </Container>
    )
}