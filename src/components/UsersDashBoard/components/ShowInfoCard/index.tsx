import Card from "./components/SummaryDataCard";
import UserDataCard from "./components/UserDataCard";
import { Down, ContainerFlag, Info, Up, ContentFlag } from "./styles";



export default function ShowInfoCard(){

const data = [
    {
        value: "345",
        tag: "Qulômetros",
        description: "Total de quilõmetros percorridos"    
    },
    {
        value: "28",
        tag: "Pedidos",
        description: "Total de pedidos"    
    },
    {
        value: "25",
        tag: "Pedidos",
        description: "Total de pedidos concluídos"    
    }
]


    return (
        <>
        {/* Info - Total de quilômetros */}
        <Info> 
     <Card data={data[0]}/>

        </Info>
                {/* Info -=- total de pedidos */}
        <Info>
        <Card data={data[1]}/>
        </Info>
                {/* Info -=- total de pedidos concluídos */}
        <Info>
        <Card data ={data[2]}/>
        </Info>
                {/* Info -=- Dados do usuario*/}
        <Info>
        <UserDataCard/>
        </Info>
        </>
    )
}