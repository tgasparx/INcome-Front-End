import { Container, LeftContent, LogOut, MenuButton, RightContent } from "./styles";
import {TiThMenu} from 'react-icons/ti'
import {useNavigate} from 'react-router-dom'
import MenuModal from "../CompaniesDashBoard/components/MenuModal";
import { useState } from "react";

export default function Header(){
    const [modalIsOpen, setIsOpen] = useState(false);
const navigate = useNavigate()

    return (
        <>
     <Container>
        <LeftContent>
            <MenuButton onClick={() => setIsOpen(true)}><TiThMenu size="30px" color="white"/></MenuButton>
            <MenuModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
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