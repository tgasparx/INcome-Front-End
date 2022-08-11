import { Container, NavContent, OptContent } from "./styles";



export default function EmployeesComponent() {

    return (
      <Container>
      <NavContent>
      <button>Funcionários </button>
          <button>Adicionar FUncionário</button>
          <button>Editar FUncionário</button>
          <button>Remover FUncionário</button>
      </NavContent>
      <OptContent></OptContent>
     </Container>
    )
}