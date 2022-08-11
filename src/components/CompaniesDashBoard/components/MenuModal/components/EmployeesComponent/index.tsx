import { useState } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
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
      <button onClick={() => setSelectedComp("comp1")}>Funcionários </button>
          <button onClick={() => setSelectedComp("comp2")}>Adicionar FUncionário</button>
          <button onClick={() => setSelectedComp("comp1")} >Editar FUncionário</button>
          <button onClick={() => setSelectedComp("comp1")}>Remover FUncionário</button>
      </NavContent>
      <OptContent>
      {controlSelectedComp()}
     
      </OptContent>
     </Container>
    )
}