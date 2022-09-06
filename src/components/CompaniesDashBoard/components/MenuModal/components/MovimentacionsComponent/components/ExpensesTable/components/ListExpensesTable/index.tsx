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

interface IListExpensesTableProps{
  companySummary: any
  selectedExpenseId: any
  setSelectedExpenseId: any
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

export default function ListExpensesTable({companySummary, selectedExpenseId, setSelectedExpenseId}: IListExpensesTableProps) {
  const [lineColor, setLineColor] = React.useState("")
  const [target, setTarget] = React.useState("")

  function controlLineColor(id: string, dest: string){
    if(dest === "color"){
      if(id === selectedExpenseId){
        return "white"
      }else{
        return "black"
      }
    }else{
      
      if(id === selectedExpenseId){
        return "red"
      }else{
        if(target === id){
          return "pink"
        }else{
          return "white"
        }
      }
   
    }

  }
  return (
    <TableContainer component={Paper} style={{marginBottom: "20px"}}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{backgroundColor: "darkred"}}>Descrição</StyledTableCell>
            <StyledTableCell style={{backgroundColor: "darkred"}} align="right">Valor</StyledTableCell>
            <StyledTableCell style={{backgroundColor: "darkred"}} align="right">Status</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {companySummary.expenses_summary.all_expenses.map((row: any) => (
            <StyledTableRow key={row.cpf}
            onMouseEnter={() => {setTarget(row.expense_id); console.log(row.expense_id)}}
            onMouseLeave={() => setTarget("")}
            style={{cursor: "pointer",backgroundColor: `${controlLineColor(row.expense_id, "background")}`}}
            onClick={() => setSelectedExpenseId(row.expense_id)}
            >
             
              <StyledTableCell component="th" scope="row" style={{color: controlLineColor(row.expense_id, "color")}}>
               
                {row.description}
                
               
              </StyledTableCell>
              <StyledTableCell align="right" style={{color: controlLineColor(row.expense_id, "color")}}>{row.value}</StyledTableCell>
              <StyledTableCell align="right" style={{color: controlLineColor(row.expense_id, "color")}}>{row.status}</StyledTableCell>
 
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
