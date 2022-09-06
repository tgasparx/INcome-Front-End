import SummaryDataCard from "./components/SummaryDataCard";
import UserDataCard from "./components/UserDataCard";
import { Down, ContainerFlag, Info, Up, ContentFlag } from "./styles";


interface IShowInfoCardProps{
    userSummary: any
    userData: any
}
export default function ShowInfoCard({userSummary, userData}: IShowInfoCardProps){

const data = [
    {
        value: `${userSummary.total_km || 0}`,
        tag: "Qulômetros",
        description: "Total de quilõmetros percorridos"  ,
        
    },
    {
        value: `${userSummary.total_pedidos || 0}`,
        tag: "Pedidos",
        description: "Total de pedidos"
        
    },
    {
        value: `${userSummary.total_pedidos_finalizados || 0}`,
        tag: "Pedidos concluídos",
        description: "Total de pedidos concluídos"
            
    }
]


    return (
        <>
        {/* Info - Total de quilômetros */}
        <Info> 
     <SummaryDataCard bkColor="purple" data={data[0]}/>

        </Info>
                {/* Info -=- total de pedidos */}
        <Info>
        <SummaryDataCard bkColor="darkgreen" data={data[1]}/>
        </Info>
                {/* Info -=- total de pedidos concluídos */}
        <Info>
        <SummaryDataCard bkColor="green" data ={data[2]}/>
        </Info>
                {/* Info -=- Dados do usuario*/}
        <Info>
        <UserDataCard userData={userData}/>
        </Info>
        </>
    )
}