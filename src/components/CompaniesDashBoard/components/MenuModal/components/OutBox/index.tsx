import { Container, Content } from "./styles";
import { useContext, useState } from "react";
import { Context } from "../../../../../../context";


export function OutBox(){
const {outBoxColor, outBoxText, isOutBoxActive} = useContext(Context)
if(isOutBoxActive){
  return (
    <Container >
     <Content isOutBoxActive={isOutBoxActive} style={{backgroundColor: "darkorange", color: "white"}}>
     {outBoxText}
     </Content>
    </Container>
  )
}else{
  return (
    <Container >

    </Container>
  )
}
}