import { ContainerAvatar, ContainerName, Down, Up} from "./styles";


interface IUserCardProps{
  userData: any
}
export default function UserCard({userData}: IUserCardProps){


    return (
        <>
          <Up>
                <ContainerAvatar>Foto</ContainerAvatar>
                <ContainerName>{userData.name}</ContainerName>
            </Up>
            <Down>
              Profissão: {userData.function}
            </Down>
        </>
    )
}