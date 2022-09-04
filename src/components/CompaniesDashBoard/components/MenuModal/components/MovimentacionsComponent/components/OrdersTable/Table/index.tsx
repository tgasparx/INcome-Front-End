import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ActionTableButton, NoActionTr, Td, Th, Tr } from './styles';

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
    selectedOrderId: any
    setSelectedOrderId: any
}
export default function DataShowTable({companySummary, selectedOrderId, setSelectedOrderId}: IDataShowTableProps) {

function handleSelectOrder(id: any){
  setSelectedOrderId(id)
  console.log(id)
}





  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead >
          <NoActionTr >
            <Th>Descrição</Th>
            <Th align="right">Valor</Th>
            <Th align="right">Motorista</Th>
            <Th align="right">Status</Th>
            <Th align="right">Cliente</Th>
            <Th align="right">Km</Th>
            
        
          </NoActionTr>
        </TableHead>
        <TableBody>
          {companySummary.orders_summary.all_orders.map((e: any) => (
        
                <Tr
              key={e.id}
              onClick={() => handleSelectOrder(e.order_id)}
              element={e}
              selectedOrderId={selectedOrderId}
            >
            
                <Td>
               {e.description}
                </Td>
                <Td>
               {e.value}
                </Td>
                <Td>
                {e.driver}
                </Td>
                <Td>
                {e.status}
                </Td>
                <Td>
                {e.client}
                </Td>
                <Td>
                {e.km}
                </Td>
           
              
           
              
               
        
            </Tr>
          
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
