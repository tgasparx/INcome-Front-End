import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ActionRow } from './styles';

interface IEmployeesTableProps{
  companyEmployees: any
  setSelectedEmployeeId: any
  selectedEmployeeId: any
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
  createData('teste', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function EmployeesTable({companyEmployees, setSelectedEmployeeId, selectedEmployeeId}: IEmployeesTableProps) {
  const [lineColor, setLineColor] = React.useState("")
  const [target, setTarget] = React.useState("")

  function controlLineColor(id: string, dest: string){
    if(dest === "color"){
      if(id === selectedEmployeeId){
        return "white"
      }else{
        return "black"
      }
    }else{
      if(id === selectedEmployeeId){
        return "blue"
      }
      if(target === id){
        return "lightblue"
      }else{
        return "white"
      }
    }

  }
  return (
    <TableContainer component={Paper} style={{marginBottom: "20px"}}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor: "blue"}}>
            <StyledTableCell style={{backgroundColor: "darkblue"}}>Nome</StyledTableCell>
            <StyledTableCell style={{backgroundColor: "darkblue"}} align="right">Email</StyledTableCell>
            <StyledTableCell style={{backgroundColor: "darkblue"}} align="right">CPF</StyledTableCell>
            <StyledTableCell style={{backgroundColor: "darkblue"}} align="right">Função</StyledTableCell>
            <StyledTableCell style={{backgroundColor: "darkblue"}} align="right">Data de criação</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companyEmployees.employees.all_employees.map((row: any) => (
            <StyledTableRow key={row.cpf}
            onMouseEnter={() => setTarget(row.id)}
            onMouseLeave={() => setTarget("")}
            style={{cursor: "pointer",backgroundColor: controlLineColor(row.id, "background")}}
            onClick={() => setSelectedEmployeeId(row.id)}
            >
             
              <StyledTableCell component="th" scope="row" style={{color: controlLineColor(row.id, "color")}}>
               
                {row.name}
                
               
              </StyledTableCell>
              <StyledTableCell align="right" style={{color: controlLineColor(row.id, "color")}}>{row.email}</StyledTableCell>
              <StyledTableCell align="right" style={{color: controlLineColor(row.id, "color")}}>{row.cpf}</StyledTableCell>
              <StyledTableCell align="right" style={{color: controlLineColor(row.id, "color")}}>Motorista</StyledTableCell>
              <StyledTableCell align="right" style={{color: controlLineColor(row.id, "color")}}>{row.created_at}</StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
