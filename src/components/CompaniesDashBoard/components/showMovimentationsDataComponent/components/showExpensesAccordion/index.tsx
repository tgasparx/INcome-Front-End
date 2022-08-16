
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Span } from './styles';

interface IShowMovimentationsAccordion{
    element: any
}
export default function ShowExpensesAccordion({element}:IShowMovimentationsAccordion) {
  function setColor(){
    if(element.status === "Pendente"){
      return "red"
    }else{
      return "black"
    }
  }
  return (
    <div>
      <Accordion style={{width: "100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{display: "flex", justifyContent: "space-between", width: "100%"}}
        >
          <Typography style={{minWidth: "190px"}}><Span style={{minWidth: "190px"}}>{element.description} </Span> </Typography>
          <Typography ><Span style={{color: "red"}}>R$ {element.value} </Span> </Typography>
          <Typography><Span style={{color: setColor()}}>{element.status}</Span> </Typography>
       
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <section> <label>  Identificação: </label><br></br>
        <label> Data de criação: </label><br></br>
        <label> Data de atualização: </label>
        </section>
        <section style={{color: "blue"}}>
        <span> {element.expense_id}</span><br></br>
        <span>{element.created_at}</span><br></br>
        <span>{element.updated_at}</span>
        </section>
      
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
