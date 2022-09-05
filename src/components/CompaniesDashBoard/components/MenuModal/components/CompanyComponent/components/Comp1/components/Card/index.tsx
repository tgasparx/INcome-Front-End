import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface IMediaCardProps{
    cardContent: any
    color: string
}
export default function MediaCard({cardContent, color}: IMediaCardProps) {
  return (
    <Card sx={{ width: "80%", height: "80%" }}>
     
      <CardContent style={{height: "70%",  width: "100%"}}>
        <Typography gutterBottom variant="h5" component="div">
          {cardContent.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {cardContent.description}
        </Typography>
      </CardContent>
      <CardActions style={{height: "30%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "right", backgroundColor: color}}>
        <Button style={{color: "white"}} size="small">{cardContent.link1}</Button>
        <Button  style={{color: "white"}} size="small">{cardContent.link2}</Button>
      </CardActions>
    </Card>
  );
}
