import DeleteExpenseComp from "./deleteExpenseComp";
import DeleteOrderComp from "./deleteOrderComp";
import EditExpenseComp from "./editExpenseComp";
import EditOrderComp from "./editOrderComp";
import { Container } from "./styles";

interface IOptModalProps{
    setIsOptModalOpen: any
    selectedOptComp: any
}
export default function OptModal({setIsOptModalOpen, selectedOptComp}: IOptModalProps){


    switch (selectedOptComp) {
        case "edit-order":
            return <EditOrderComp setIsOptModalOpen={setIsOptModalOpen}/> 
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