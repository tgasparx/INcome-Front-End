import { ContainerAvatar, ContainerName, Down, Up} from "./styles";



export default function UserCard(){


    return (
        <>
          <Up>
                <ContainerAvatar>Foto</ContainerAvatar>
                <ContainerName>NOme</ContainerName>
            </Up>
            <Down>
              Profissão: Motorista
            </Down>
        </>
    )
}