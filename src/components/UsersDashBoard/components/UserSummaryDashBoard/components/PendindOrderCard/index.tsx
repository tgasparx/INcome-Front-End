import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Content } from './styles';

export default function PendingOrderCard() {
    return (
        <Card sx={{minHeight: "230px", height: "70%"}}>
            <CardActionArea>
                {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        Próximo pedido pendente
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pedido pendente com prazo mais curto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Cliente: <br></br>
                        Valor: <br></br>
                        Km:
                    </Typography>

                </CardContent>

            </CardActionArea>
            <Content>
               Prazo: Quinta feira - 22/02/2022
            </Content>
        </Card>
    );
}
