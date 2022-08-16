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
export default function OptModal({setIsOptModalOpen, selectedOptComp, selectedOrderId}: IOptModalProps){
const {companySummary} = useContext(Context)
function returnSelectedOrder(){
    const selectedOrder = companySummary.orders_summary.all_orders.filter((e: any) => e.order_id === selectedOrderId)
    return selectedOrder[0]
}

    switch (selectedOptComp) {
        case "edit-order":
            return <EditOrderComp order={returnSelectedOrder()} setIsOptModalOpen={setIsOptModalOpen}/> 
        case "delete-order":
            return <DeleteOrderComp setIsOptModalOpen={setIsOptModalOpen}/>
        case "edit-expense":
            return <EditExpenseComp setIsOptModalOpen={setIsOptModalOpen}/>
        case "delete-expense":
            return <DeleteExpenseComp setIsOptModalOpen={setIsOptModalOpen}/>

    
        default:
            setIsOptModalOpen(false)
            return <></>
            
    }

   
}