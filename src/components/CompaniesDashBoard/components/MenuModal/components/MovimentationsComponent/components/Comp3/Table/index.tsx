import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NoActionTr, Td, Th, Tr } from './styles';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
interface IDataShowTableProps{
  companySummary: any
}
export default function DataShowTable({companySummary}: IDataShowTableProps) {
  const [selectedOrderId, setSelectedOrderId] = React.useState("")


function handleChangeSeletedOrder(orderId: string){
  setSelectedOrderId(orderId)
}



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <NoActionTr>
          <Th>Descrição</Th>
            <Th align="right">Valor</Th>
            <Th align="right">Status</Th>
            <Th align="right">Data de criação</Th>
            <Th align="right">Data de atualização</Th>
          </NoActionTr>
        </TableHead>
        <TableBody>


          {companySummary.orders_summary.all_orders.map((element: any) => (
            <Tr
              key={element.order_id}
              element={element}
              selectedOrderId={selectedOrderId}
              onClick={() => {handleChangeSeletedOrder(element.order_id)}}
            >
              <Td>
                {element.description}
              </Td>
              <Td >{element.value}</Td>
              <Td >{element.status}</Td>
              <Td >{element.created_at}</Td>
              <Td >{element.updated_at}</Td>
            </Tr>




          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
