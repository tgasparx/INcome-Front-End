import ShowMovimentationsAccordion from "./components/showMovimentationsAccordion"

interface IShowMovimentationsDataComponent{
    companySummary: any
    selectedMovimentation: any
}
export default function ShowMovimentationsDataComponent({companySummary, selectedMovimentation}: IShowMovimentationsDataComponent){

if(selectedMovimentation === "pedidos"){
    return (
        <>
      {companySummary.orders_summary.all_orders.map((e: any) => {
        return <ShowMovimentationsAccordion element={e}/>
      })}
        </>
    )
}
else{
    return (
        <>
             {companySummary.expenses_summary.all_expenses.map((e: any) => {
        return <ShowMovimentationsAccordion element={e}/>
      })}
        </>
    )
}

}