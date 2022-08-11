import { useContext, useEffect } from "react";
import CompaniesDashboard from "../../components/CompaniesDashBoard";
import Header from "../../components/Header";
import { Context } from "../../context";
import { PageContainer } from "./styles";
import {useNavigate} from 'react-router-dom'


export default function HomeCompanies() {
    const { checkToken, getSummaryCompany,getCompanyData, getCompanyEmployees, companySummary } = useContext(Context)
    const token = localStorage.getItem("CompanyToken")
    console.log("hometoken", token)
    const navigate = useNavigate()
    
    async function checkValidTokenAndGetData() {
        const isValid = await checkToken(token)
        if(!isValid){
            navigate("/", {replace: true})
        }else{
            getSummaryCompany()
            getCompanyData()
            getCompanyEmployees()
        }
    }
    useEffect(() => {
        checkValidTokenAndGetData()
    }, [token])

    return (
        <PageContainer>
            <Header />
            <CompaniesDashboard/>

        </PageContainer>
    )
}