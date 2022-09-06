import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Span } from './styles';

interface IUserDataCardProps{
    userData: any
}
export default function UserDataCard({userData}: IUserDataCardProps) {
  return (
    <Card sx={{ width: "98%", height: "100%" }}>
      <CardActionArea style={{height: "100%"}}>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        
        <CardContent style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <div>
    <label>Nome</label>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: "16px"}}>
          <Span>
          {userData.name}
          </Span>
          </Typography>

    </div>

       <div>
       <label>Email</label>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: "16px"}}>
          <Span>
          {userData.email}
          </Span>
          </Typography>
       </div>

      <div>
      <label>Cpf</label>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: "16px"}}>
         <Span>
         {userData.cpf}
         </Span>
          </Typography>
      </div>

     <div>
     <label>Função</label>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: "16px"}}>
          <Span>
          Motorista
          </Span>
          </Typography>
     </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



// import {Up, Down, ContainerFlag, ContentFlag} from './styles'


// export default function Card ({data}: ICardProps){


//     return (
//         <>
//           <Up>
//             <h1 style={{fontSize: "8vw"}}>{data.value}</h1>
//         </Up>
//         <ContainerFlag>
//             <ContentFlag> {data.tag}</ContentFlag>
//         </ContainerFlag>
        
//         <Down>
//             {data.description}

//         </Down>
//         </>
//     )
// }



// import { Container, ShowData } from "./styles";

// interface IUserDataCardProps{
//     userData: any
// }
// export default function UserDataCard({userData}: IUserDataCardProps){

//     return (
//        <Container>
//         <ShowData><span>Nome</span> <span>{userData.name}</span></ShowData>
//         <ShowData><span>Email</span> <span>{userData.email}</span></ShowData>
//         <ShowData><span>CPF</span> <span>{userData.cpf}</span></ShowData>
//         <ShowData><span>Profissão</span> <span>{userData.job}</span></ShowData>
//        </Container>
//     )
// }