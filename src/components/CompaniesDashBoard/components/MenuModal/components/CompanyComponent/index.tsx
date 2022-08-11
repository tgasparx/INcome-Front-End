import { useState } from "react";
import { Comp1 } from "./components/Comp1";
import { Comp2 } from "./components/Comp2";
import { Comp3 } from "./components/Comp3";
import { Container, NavContent, OptContent } from "./styles";


export default function CompanyComponent(){
    const [selectedOpt, setSelectedOpt] = useState("")
function controlSelectedOpt(){
    switch (selectedOpt) {
        case "comp1":
            return <Comp1/>
        case "comp2":
            return <Comp2/>
        case "comp3":
            return <Comp3/>
        default:
            return <Comp1/>
          
    }
}
    return (
       <Container>
        <NavContent>
        <button onClick={() =>setSelectedOpt("comp1")}>Companhia </button>
        <button onClick={() => setSelectedOpt("comp2")}>Alterar Informações</button>
            <button onClick={() => setSelectedOpt("comp3")}>Alterar Senha</button>
        </NavContent>
        <OptContent>
            {controlSelectedOpt()}
           
         
        </OptContent>
       </Container>
    )
}