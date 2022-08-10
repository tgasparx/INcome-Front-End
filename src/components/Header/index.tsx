import { Container, LeftContent, LogOut, MenuButton, RightContent } from "./styles";
import {TiThMenu} from 'react-icons/ti'

export default function Header(){


    return (
        <>
     <Container>
        <LeftContent>
            <MenuButton><TiThMenu size="30px" color="white"/></MenuButton>
        </LeftContent>
        <RightContent>
        <LogOut>Sair</LogOut>

        </RightContent>
     </Container>
        </>
    )
}