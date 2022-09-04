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
  selectedExpenseId: any
    setSelectedExpenseId: any
}
export default function DataShowTable({companySummary, selectedExpenseId, setSelectedExpenseId}: IDataShowTableProps) {

function handleSelectExpense(id: any){
  setSelectedExpenseId(id)
  console.log(id)
}





  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead >
          <NoActionTr >
            <Th>Descrição</Th>
            <Th align="right">Valor</Th>
            <Th align="right">Status</Th>
        
          </NoActionTr>
        </TableHead>
        <TableBody>
          {companySummary.expenses_summary.all_expenses.map((e: any) => (
      
                <Tr
              key={e.id}
              onClick={() => handleSelectExpense(e.expense_id)}
              element={e}
              selectedEmployeeId={selectedExpenseId}
            >
            
                <Td>
               {e.description}
                </Td>
                <Td>
               {e.value}
                </Td>
                <Td>
                {e.status}
                </Td>
           
              
           
              
               
        
            </Tr>
          
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
