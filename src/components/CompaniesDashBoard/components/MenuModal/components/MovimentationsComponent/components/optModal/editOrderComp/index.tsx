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
  order: any;
}
export default function EditOrderComp({
  setIsOptModalOpen,
  order,
}: IEditOrderCompProps) {
  const { handleEditOrder, companyEmployees } = useContext(Context);
  const [description, setDescription] = useState(order.description);
  const [value, setValue] = useState(order.value);
  const [status, setStatus] = useState(order.status);
  const [driver, setDriver] = useState(order.driver);
  const [client,setClient] = useState(order.client)
  const [km, setKm] = useState(order.km);

  async function handleSubmit() {
    const edited = await handleEditOrder(
      { description, value, status, driver, client, km },
      order.order_id
    );
    console.log({ description, value, status, driver, km }, order.order_id)
    window.location.href = "/homeCompanies";
  }
  function returnEmployeeName(employeeId: string) {
    const name = companyEmployees.employees.all_employees.filter(
      (e: any) => e.id === employeeId
    );
    return <>{name[0].name}</>;
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
            <Span>Motorista:</Span>
            <Span>KM:</Span>
            <Span>Status:</Span>
            <Span>Data de criação:</Span>
            <Span>Data de atualização:</Span>
          </UpLeft>
          <UpRight>
            <Span> {order.order_id}</Span>
            <Span>{order.description}</Span>
            <Span> {order.value}</Span>
            <Span>{returnEmployeeName(order.driver)}</Span>
            <Span>{order.km}</Span>
            <Span>{order.status}</Span>
            <Span>{order.created_at}</Span>
            <Span>{order.updated_at}</Span>
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
            <Label>Motorista</Label>
            <Select
              onChange={(e: any) => setDriver(e.target.value)}
              defaultValue={status}
            >
              {companyEmployees.employees.all_employees.map((e: any) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </Select>
            <Label>KM</Label>
            <Input value={km} onChange={(e: any) => setKm(e.target.value)} />
            <Label>Cliente</Label>
            <Input value={client} onChange={(e: any) => setClient(e.target.value)} />
            <Label>Status</Label>
            <Select
              onChange={(e: any) => setStatus(e.target.value)}
              defaultValue={status}
            >
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
