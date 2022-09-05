import { Container } from "./styles";
import OutBoxController from '../../../../../../OutBoxContoller'
import { useContext, useState } from "react";
import { Context } from "../../../../../../context";


export function OutBox(){
const {outBoxColor, outBoxText} = useContext(Context)
    return (
      <Container color={outBoxColor}>
        {outBoxText}
      </Container>
    )
}