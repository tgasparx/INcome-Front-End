import ShowExpensesAccordion from "./components/showExpensesAccordion"
import ShowOrdersAccordion from "./components/showOrdersAccordion"
import { ContainerTableHeader, ContainerTableHeaderExpenses } from "./styles"

interface IShowMovimentationsDataComponent{
    companySummary: any
    selectedMovimentation: any
}
export default function ShowMovimentationsDataComponent({companySummary, selectedMovimentation}: IShowMovimentationsDataComponent){

if(selectedMovimentation === "pedidos"){
    return (
      <>
      <table style={{textAlign: "left"}}>
       <thead>
        <ContainerTableHeader>
Pedidos
        </ContainerTableHeader>
      
         <tr>
     
    
         
         </tr>
       </thead>
       <tbody>
       {companySummary.orders_summary.all_orders.map((e: any) => {
         return (
           <tr>
            <td> <ShowOrdersAccordion element={e}/></td>
           </tr>
         ) 
       })}
       </tbody>
      </table>
         </>
    )
}
else{
    return (
        <>
     <table style={{textAlign: "left"}}>
      <thead>
        <ContainerTableHeaderExpenses>
          Despesas
        </ContainerTableHeaderExpenses>
        
        <tr>
  
        
        </tr>
      </thead>
      <tbody>
      {companySummary.expenses_summary.all_expenses.map((e: any) => {
        return (
          <tr>
           <td> <ShowExpensesAccordion element={e}/></td>
          </tr>
        ) 
      })}
      </tbody>
     </table>
        </>
    )
}

}