import { useState } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import MenuButtons from "./components/MenuButton";
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
   
            <MenuButtons onClick={() => setSelectedComp("comp1")} text="Pedidos"/>
            <MenuButtons onClick={() => setSelectedComp("comp2")} text="Adicionar Pedido"/>
            <MenuButtons onClick={() => setSelectedComp("comp1")} text="Editar Pedido"/>
            <MenuButtons onClick={() => setSelectedComp("comp1")} text="Excluir pedido"/>
            <MenuButtons onClick={() => setSelectedComp("comp3")} text="Despesas"/>
            <MenuButtons onClick={() => setSelectedComp("comp4")} text="Adicionar despesa"/>
            <MenuButtons onClick={() => setSelectedComp("comp3")} text="Editar despesa"/>
            <MenuButtons onClick={() => setSelectedComp("comp3")} text="Excluir despesa"/>
   
        </NavContent>
        <OptContent>
          {controlSelectedComp()}
        </OptContent>
       </Container>
    )
}