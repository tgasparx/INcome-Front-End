import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NoActionTr, Td, Th, Tr } from "./styles";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}
interface IDataShowTableProps {
  companySummary: any;
  selectedOrderId: any;
  setSelectedOrderId: any;
  companyEmployees: any;
}

export default function DataShowTable({
  companySummary,
  selectedOrderId,
  setSelectedOrderId,
  companyEmployees,
}: IDataShowTableProps) {
  function handleChangeSeletedOrder(orderId: string) {
    setSelectedOrderId(orderId);
  }

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <NoActionTr>
            <Th>Descrição</Th>
            <Th align="right">Valor</Th>
            <Th align="right">Status</Th>
            <Th align="right">Motorista</Th>
            <Th align="right">KM</Th>
            <Th align="right">Data de criação</Th>
          </NoActionTr>
        </TableHead>
        <TableBody>
          {companySummary.orders_summary.all_orders.map((element: any) => (
            <Tr
              key={element.order_id}
              element={element}
              selectedOrderId={selectedOrderId}
              onClick={() => {
                handleChangeSeletedOrder(element.order_id);
              }}
            >
              <Td >{element.description}</Td>
              <Td >{element.value}</Td>
              <Td >{element.status}</Td>
              <Td >{element.driver}</Td>

              <Td>{element.km} </Td>
              <Td >{element.created_at}</Td>
            </Tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
