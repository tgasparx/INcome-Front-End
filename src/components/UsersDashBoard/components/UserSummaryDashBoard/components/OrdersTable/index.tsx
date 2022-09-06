import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from './styles';
import {AiFillCheckCircle} from 'react-icons/ai'
function createData(
  clientName: string,
  value: number,
  km: number,
  // carbs: number,
  // protein: number,
) {
  return { clientName, value, km };
}

const rows = [
  createData('Francisco', 1000, 78.8),
  createData('Julieta', 237, 8.9 ),
  createData('Eurico', 859, 25.9),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
  createData('Gingerbread', 356, 16.0),
  createData('Gingerbread', 356, 16.0),
  createData('Gingerbread', 356, 16.0),
  createData('Gingerbread', 356, 16.0),
  createData('Gingerbread', 356, 16.0),
  createData('Gingerbread', 356, 16.0),
  createData('Gingerbread', 356, 16.0),
  createData('Gingerbread', 356, 16.0),
];

export default function OrdersTable() {

  return (
    <Container>
      <span>Pedidos disponíveis</span>
    <TableContainer component={Paper} sx={{height: "100%"}}> 
      <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
        <TableHead sx={{backgroundColor: "green"}}>
          <TableRow>
            <TableCell sx={{color: "white"}}>Cliente</TableCell>
            <TableCell align="right" sx={{color: "white"}}>Valor</TableCell>
            <TableCell align="right" sx={{color: "white"}}>KM</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.clientName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{width: "150px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <AiFillCheckCircle size="20px" color="green"/>
                {row.clientName}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="right">{row.km}</TableCell>
              {/* <TableCell align="right">{row.km}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
