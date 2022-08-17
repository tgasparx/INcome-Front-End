import { Container, LeftContent, LogOut, MenuButton, RightContent } from "./styles";
import {TiThMenu} from 'react-icons/ti'
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

export default function Header(){
    const [modalIsOpen, setIsOpen] = useState(false);
const navigate = useNavigate()

    return (
        <>
     <Container>
        <LeftContent>
        
        </LeftContent>
        <RightContent>
        <LogOut onClick={() => {
            localStorage.removeItem("UserToken")
            navigate("/")
        }}>Sair</LogOut>

        </RightContent>
     </Container>
        </>
    )
}