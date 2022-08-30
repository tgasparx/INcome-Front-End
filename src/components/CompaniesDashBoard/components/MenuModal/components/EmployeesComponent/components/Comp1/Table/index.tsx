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
    companyEmployees: any
    selectedEmployeeId: any
    setSelectedEmployeeId: any
}
export default function DataShowTable({companyEmployees, selectedEmployeeId, setSelectedEmployeeId}: IDataShowTableProps) {

function handleSelectEmployee(id: any){
  setSelectedEmployeeId(id)
}





  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead >
          <NoActionTr >
            <Th>Nome</Th>
            <Th align="right">Email</Th>
            <Th align="right">CPF</Th>
            <Th align="right">Data de contratação</Th>
        
          </NoActionTr>
        </TableHead>
        <TableBody>
          {companyEmployees.employees.all_employees.map((e: any) => (
        
                <Tr
              key={e.name}
              onClick={() => handleSelectEmployee(e.id)}
              element={e}
              selectedEmployeeId={selectedEmployeeId}
            >
            
                <Td>
               {e.name}
                </Td>
                <Td>
               {e.email}
                </Td>
                <Td>
                {e.cpf}
                </Td>
                <Td>
                {e.created_at}
                </Td>
           
              
           
              
               
        
            </Tr>
          
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
