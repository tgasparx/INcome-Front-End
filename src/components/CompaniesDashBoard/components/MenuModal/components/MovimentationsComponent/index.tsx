import { useState } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import { Container, NavContent, OptContent } from "./styles";


export default function MovimentationsComponent(){
const [selectedComp, setSelectedComp] = useState("")
    function controlSelectedComp(){
        switch (selectedComp) {
            case "comp1":
              return  <Comp1/>
              case "comp2":
                return  <Comp2/>
                case "comp3":
                    return  <Comp3/>
                    case "comp4":
                        return  <Comp4/>
        
            default:
               return  <Comp1/>
        }
        
    }
    return (
        <Container>
        <NavContent>
        <button onClick={() => setSelectedComp("comp1")}>Pedidos </button>
        <button onClick={() => setSelectedComp("comp2")}>Adicionar Pedido</button>
            <button onClick={() => setSelectedComp("comp1")}>Editar Pedido</button>
            <button onClick={() => setSelectedComp("comp1")}>Excluir Pedido</button>
            <br></br><br></br>
        <button onClick={() => setSelectedComp("comp3")}>Despesas </button>
        <button  onClick={() => setSelectedComp("comp4")}>Adicionar Despesa</button>
            <button  onClick={() => setSelectedComp("comp3")}>Editar Despesa</button>
            <button  onClick={() => setSelectedComp("comp3")}>Excluir Despesa</button>
   
        </NavContent>
        <OptContent>
          {controlSelectedComp()}
        </OptContent>
       </Container>
    )
}