import { useContext, useEffect } from "react";
import CompaniesDashboard from "../../components/CompaniesDashBoard";
import Header from "../../components/Header";
import { Context } from "../../context";
import { PageContainer } from "./styles";
import {useNavigate} from 'react-router-dom'


export default function HomeCompanies() {
    const { checkToken } = useContext(Context)
    const token = localStorage.getItem("CompanyToken") || ""
    const navigate = useNavigate()
    async function checkValidToken() {
        const isValid = await checkToken(token)
        if(!isValid){
            navigate("/", {replace: true})
        }
    }
    useEffect(() => {
        checkValidToken()
    }, [])

    return (
        <PageContainer>
            <Header />
            <CompaniesDashboard />

        </PageContainer>
    )
}