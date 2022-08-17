import { Container, LeftContent, RightContent } from "./styles"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface ICompanyDataComponentProps{
    companyData: any
    companyEmployees: any
    companySummary: any
}

export default function CompanyDataComponent({companyData, companyEmployees, companySummary}: ICompanyDataComponentProps){
const date = new Date()

    return (
      <>
      

 
      
        <Container>
        <Card sx={{ width: "50%", height: "150px"}}>
      <CardActionArea>
    
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {companyData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CNPJ: {companyData.cnpj}<br></br>
            Funcionários: {companyEmployees.employees.all_employees.length}
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
    <></>
    <Card sx={{ width: "50%", height: "150px" }}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Movimentações em {`${date.toLocaleString('default', {month: 'long'})}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pedidos: {companySummary.orders_summary.all_orders.length}<br></br>
            Despesas: {companySummary.orders_summary.all_orders.length}
          </Typography>
        </CardContent>
      </CardActionArea>
 
    </Card>

        </Container>
        </>
    )
}

