import {Up, Down, ContainerFlag, ContentFlag} from './styles'

interface ICardProps{
    data: any
}
export default function Card ({data}: ICardProps){


    return (
        <>
          <Up>
            <h1 style={{fontSize: "8vw"}}>{data.value}</h1>
        </Up>
        <ContainerFlag>
            <ContentFlag> {data.tag}</ContentFlag>
        </ContainerFlag>
        
        <Down>
            {data.description}

        </Down>
        </>
    )
}