import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
interface ISummaryCardProps{
    data: any
    bkColor: string
}
export default function SummaryDataCard({data, bkColor}: ISummaryCardProps) {
  return (
    <Card sx={{ width: "98%", height: "100%" }}>
      <CardActionArea style={{height: "100%"}}>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        
        <CardContent style={{height: "50%", textAlign: "center"}}>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: "90px"}}>
          {data.value}
          </Typography>
        </CardContent>
        <CardContent style={{height: "50%", backgroundColor: bkColor, color: "white", display: "flex", flexDirection: "column",textAlign: "right", justifyContent: "center"}} >
          <Typography gutterBottom variant="h5" component="div">
            {data.tag}
          </Typography>
          <Typography variant="body2" color="white">
         {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



// import {Up, Down, ContainerFlag, ContentFlag} from './styles'

// interface ICardProps{
//     data: any
// }
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