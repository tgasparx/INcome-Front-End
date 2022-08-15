import { useState } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import MenuButtons from "./components/MenuButton";
import { Container, NavContent, OptContent } from "./styles";



export default function EmployeesComponent() {
const [selectedComp, setSelectedComp] = useState("")
function controlSelectedComp(){
    switch (selectedComp) {
        case "comp1":
            return <Comp1/>
        case "comp2":
            return <Comp2/>

    
        default:
           return   <Comp1/>
    }
}
    return (
      <Container>
      <NavContent>
  
          <MenuButtons onClick={() => setSelectedComp("comp1")} text="Funcionários"/>
          <MenuButtons onClick={() => setSelectedComp("comp2")} text="Adicionar Funcionário"/>
          <MenuButtons onClick={() => setSelectedComp("comp1")} text="Editar Funcionário"/>
          <MenuButtons onClick={() => setSelectedComp("comp1")} text="Remover Funcionário"/>
      </NavContent>
      <OptContent>
      {controlSelectedComp()}
     
      </OptContent>
     </Container>
    )
}