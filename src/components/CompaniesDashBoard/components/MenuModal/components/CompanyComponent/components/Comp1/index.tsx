import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import MediaCard from "./components/Card";
import { Container, LeftContent, RightContent, First, Second, Thirty, Fourthy } from "./styles";

interface IComp1Props{
  companySummary: any
  companyData: any
}
export function Comp1({companySummary, companyData}: IComp1Props){

  


function returnLastIncludedOrder(){
  const all: any[] = companySummary.orders_summary.all_orders
  const included: any[] = all
  const final = (all.length - 1)
  return included[final]
}
function returnTextLastIncludedOrder(){
  if(!returnLastIncludedOrder()){
    return "Você ainda não adicionou nenhum pedido"
  }else{
    return "Último pedido incluído"
  }
}
function returnContentLastIncludedOrder(link: string){
  switch (link) {
    case "link1":
     if(!returnLastIncludedOrder()){
      return ""
     }else{
      return returnLastIncludedOrder().client
     }
     
    case "link2":
      if(!returnLastIncludedOrder()){
        return "R$ 0,00"
      }else{
        return returnLastIncludedOrder().value
      }

    default:
      break;
  }
}


function returnLastConcluedOrder(){
  const all: any[] = companySummary.orders_summary.all_orders
  const included: any[] = all.filter((e: any) => e.status === "Concluido")
  const final = included.length -1
  return included[final]
}
function returnTextLastConcluedOrder(){
  if(!returnLastConcluedOrder()){
    return "Você não possui nenhum pedido concluído"
  }else{
    return "Último pedido concluído"
  }
}
function returnContentLastConcluedOrder(link: string){
  switch (link) {
    case "link1":
      if(!returnLastConcluedOrder()){
        return ""
      }else{
        return returnLastConcluedOrder().client
      }
    case "link2":

      if(!returnLastConcluedOrder()){
        return "R$ 0,00"
      }else{
        return returnLastConcluedOrder().value
      }
    default:
      break;
  }
}



function returnLastIncludedExpense(){
  const all: any[] = companySummary.expenses_summary.all_expenses
  const final = all.length - 1
  return all[final]
}
function returnTextExpense(){
  if(returnLastIncludedExpense()){
    return "Última despesa incluída"
  }else{
    return "Você ainda não adicionou nenhuma despesa"
  }
}
function returnExpenseContents(link: string){

  switch (link) {
    case "link2":
      if(!returnLastIncludedExpense()){
      return "R$ 0,00"
      }else{
        return `R$ ${returnLastIncludedExpense().value}`
      }
    case "link1":
      if(!returnLastIncludedExpense()){
        return ""
        }else{
          return `${returnLastIncludedExpense().description}`
        }
    default:
      return null
  }
}

const cardContent = [
  {
    title: "Último pedido",
    description: returnTextLastIncludedOrder(),
    link1: returnContentLastIncludedOrder("link1"),
    link2: returnContentLastIncludedOrder("link2"),

  },
  {
    title: "Última despesa",
    description: returnTextExpense(),
    link1: returnExpenseContents("link1"),
    link2: returnExpenseContents("link2"),

  },
  {
    title: "Último pedido Concluído",
    description: returnTextLastConcluedOrder(),
    link1: returnContentLastConcluedOrder("link1"),
    link2: returnContentLastConcluedOrder("link2")

  }

]
    return (
      
      <Container>
        <First>
        <LeftContent>
        <span>Nome:</span>
       <span>Email:</span>
        <span>Cnpj:</span>
        <span>Data de criação:</span>
        <span>Data de atualização:</span>
        <span>Área de atuação:</span>
        </LeftContent>
        <RightContent>
        {companyData.name}
       <span>{companyData.email}</span>
        <span>{companyData.cnpj}</span>
        <span>{companyData.created_at}</span>
        <span>{companyData.updated_at}</span>
        <span>Logística</span>
        </RightContent>
        </First>
        <Second>
       
        <MediaCard cardContent={cardContent[1]} color="darkred"/>
        </Second>
      <Thirty>
      <MediaCard cardContent={cardContent[0]} color="green"/>
      </Thirty>
       <Fourthy>
       <MediaCard cardContent={cardContent[2]} color="darkgreen"/>
       </Fourthy>
      </Container>
     
    )
}