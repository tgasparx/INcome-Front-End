import { useContext, useState } from "react";
import { Context } from "../../../../../../../../../context";
import StyledButton from "./components/button";
import {
  Container,
  ContainerTopCloseFlag,
  Content,
  ContentTopCloseFlag,
  Down,
  DownLeft,
  DownRight,
  Input,
  Label,
  Select,
  Span,
  Up,
  UpLeft,
  UpRight,
} from "./styles";

interface IEditOrderCompProps {
  setIsOptModalOpen: any;
  expense: any;
}
export default function EditExpenseComp({
  setIsOptModalOpen,
  expense,
}: IEditOrderCompProps) {
  const [description, setDescription] = useState(expense.description);
  const [value, setValue] = useState(expense.value);
  const [status, setStatus] = useState(expense.status);
  const {handleEditExpense} = useContext(Context)

  async function handleSubmit() {
    const edited = await handleEditExpense({description, value, status}, expense.expense_id)
    window.location.href = "/homeCompanies";
  }

  return (
    <Container>
      <ContainerTopCloseFlag>
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
            <Label>Descrição</Label>
            <Input
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
            <Label>Valor</Label>
            <Input
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
            />
            <Label>Status</Label>
            <Select onChange={(e: any) => setStatus(e.target.value)}>
              <option value="Concluido">Concluído</option>
              <option value="Pendente">Pendente</option>
            </Select>
          </DownLeft>
          <DownRight>
            <StyledButton text="Confirmar" onClick={handleSubmit} />
          </DownRight>
        </Down>
      </Content>
    </Container>
  );
}
