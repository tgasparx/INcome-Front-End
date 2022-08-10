import { Container, LeftContent, LogOut, MenuButton, RightContent } from "./styles";
import {TiThMenu} from 'react-icons/ti'
import {useNavigate} from 'react-router-dom'

export default function Header(){
const navigate = useNavigate()

    return (
        <>
     <Container>
        <LeftContent>
            <MenuButton><TiThMenu size="30px" color="white"/></MenuButton>
        </LeftContent>
        <RightContent>
        <LogOut onClick={() => {
            localStorage.removeItem("CompanyToken")
            navigate("/")
        }}>Sair</LogOut>

        </RightContent>
     </Container>
        </>
    )
}