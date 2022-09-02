import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import DeleteExpenseComp from "./deleteExpenseComp";
import DeleteOrderComp from "./deleteOrderComp";
import EditExpenseComp from "./editExpenseComp";
import EditOrderComp from "./editOrderComp";
import { Container } from "./styles";

interface IOptModalProps{
    setIsOptModalOpen: any
    selectedOptComp: any
    selectedOrderId: any
    selectedExpenseId: any
}
export default function OptModal({setIsOptModalOpen, selectedOptComp, selectedOrderId, selectedExpenseId}: IOptModalProps){
const {companySummary} = useContext(Context)
function returnSelectedOrder(){
    const selectedOrder = companySummary.orders_summary.all_orders.filter((e: any) => e.order_id === selectedOrderId)
    return selectedOrder[0]
}
function returnSelectedExpense (){
    const selectedOrder = companySummary.expenses_summary.all_expenses.filter((e: any) => e.expense_id === selectedExpenseId)
    return selectedOrder[0]
}


    switch (selectedOptComp) {
        case "edit-order":
            return (
               <Container>
                <EditOrderComp order={returnSelectedOrder()} setIsOptModalOpen={setIsOptModalOpen}/> 
               </Container>
                    
               
            )
        case "delete-order":
            return(
                <Container>
                     <DeleteOrderComp order={returnSelectedOrder()} setIsOptModalOpen={setIsOptModalOpen}/>
                </Container>
            )
        case "edit-expense":
            return (
                <Container>
                    <EditExpenseComp expense={returnSelectedExpense()} setIsOptModalOpen={setIsOptModalOpen}/>
                </Container>
            )
        case "delete-expense":
            return (
                <Container>
                    <DeleteExpenseComp expense={returnSelectedExpense()} setIsOptModalOpen={setIsOptModalOpen}/>
                </Container>
            )

    
        default:
            setIsOptModalOpen(false)
            return <></>
            
    }

   
}