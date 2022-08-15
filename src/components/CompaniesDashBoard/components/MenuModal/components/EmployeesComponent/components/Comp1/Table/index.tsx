import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
}
export default function DataShowTable({companyEmployees}: IDataShowTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">CPF</TableCell>
            <TableCell align="right">Data de contratação</TableCell>
            <TableCell align="right">Data de atualização</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companyEmployees.employees.all_employees.map((e: any) => (
            <TableRow
              key={e.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {e.name}
              </TableCell>
              <TableCell align="right">{e.email}</TableCell>
              <TableCell align="right">{e.cpf}</TableCell>
              <TableCell align="right">{e.created_at}</TableCell>
              <TableCell align="right">{e.updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
