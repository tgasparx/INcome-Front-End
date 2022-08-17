import { useContext } from "react";
import { Context } from "../../../../../../../../context";
import DeleteExpenseComp from "./deleteExpenseComp";
import DeleteOrderComp from "./deleteOrderComp";
import EditExpenseComp from "./editExpenseComp";
import EditOrderComp from "./editOrderComp";

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
            return <EditOrderComp order={returnSelectedOrder()} setIsOptModalOpen={setIsOptModalOpen}/> 
        case "delete-order":
            return <DeleteOrderComp order={returnSelectedOrder()} setIsOptModalOpen={setIsOptModalOpen}/>
        case "edit-expense":
            return <EditExpenseComp expense={returnSelectedExpense()} setIsOptModalOpen={setIsOptModalOpen}/>
        case "delete-expense":
            return <DeleteExpenseComp expense={returnSelectedExpense()} setIsOptModalOpen={setIsOptModalOpen}/>

    
        default:
            setIsOptModalOpen(false)
            return <></>
            
    }

   
}