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
  const included: any[] = all.filter((e: any) => e.status === "Concluido" || "Pendente")
  return included[0]
}
function returnLastIncludedExpense(){
  const all: any[] = companySummary.expenses_summary.all_expenses
  const included: any[] = all.filter((e: any) => e.status === "Concluido" || "Pendente")
  return included[0]
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
function returnLastConcluedOrder(){
  const all: any[] = companySummary.orders_summary.all_orders
  const included: any[] = all.filter((e: any) => e.status === "Concluido" || "Pendente")
  return included[0]
}
const cardContent = [
  {
    title: "Último pedido",
    description: "Último pedido incluído",
    link1: `${returnLastIncludedOrder().client}`,
    link2: `R$ ${returnLastIncludedOrder().value}`

  },
  {
    title: "Última despesa",
    description: returnTextExpense(),
    link1: returnExpenseContents("link1"),
    link2: returnExpenseContents("link2"),

  },
  {
    title: "Último pedido Concluído",
    description: "Último pedido concluído",
    link1: `${returnLastConcluedOrder().client}`,
    link2: `R$ ${returnLastConcluedOrder().value}`,

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