
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IShowMovimentationsAccordion{
    element: any
}
export default function ShowMovimentationsAccordion({element}:IShowMovimentationsAccordion) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{element.value} {element.status}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Identificação: {element.order_id}<br></br>
           Data de criação: {element.created_at}<br></br>
           Data de atualização: {element.updated_at}
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
