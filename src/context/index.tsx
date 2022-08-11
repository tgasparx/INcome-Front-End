
import { createContext, ReactNode, useEffect, useState } from "react";
import IContextData from "../interfaces/IContextData";
import IContextProvider from "../interfaces/IContextProvider";
import CompaniesService from "../services/CompaniesService/CompaniesService";
import { templateCompanyData } from "../templates/companyData";
import { templateCompanyEmployees } from "../templates/companyEmployees";
import { templateCompanySummary } from "../templates/companySummary";

export const Context = createContext({} as IContextData);
export function ContextProvider({ children }: IContextProvider) {
const companiesServices = new CompaniesService()
const [companySummary, setCompanySummary] = useState(templateCompanySummary)
const [companyData, setCompanyData] = useState(templateCompanyData)
const [companyEmployees, setCompanyEmployees] = useState(templateCompanyEmployees)
const companyToken = localStorage.getItem("CompanyToken") || ""

async function checkToken(token: string){
    if(token !== ""){
        return true
    }else{
        return false
    }
}
//START COMPANIES
async function handleCreateCompany({name, email, password, cnpj}: any){
    const created = await companiesServices.createCompany({name, email, password, cnpj})
}
async function handleSignInCompany({email, password}: any): Promise<any>{
const logged = await companiesServices.companyAuth({email, password})
if(logged.token.tokenHash){
    window.localStorage.setItem("CompanyToken", logged.token.tokenHash)
    return true
}else{
    return false
}
    
}
async function handleEditCompany(){}
async function handleDeleteCompany(){}
async function getSummaryCompany(){
    const summary = await companiesServices.companySummary(companyToken)
    console.log("context summary", summary)
    setCompanySummary(summary)
}
async function getCompanyData(){
    const companyData = await companiesServices.getCompanyData(companyToken)
    console.log("ccompanyData", companyData)
    setCompanyData(companyData)
}
async function getCompanyEmployees(){
    const employees = await companiesServices.listEmployees(companyToken)
    console.log("context employees", employees)
    setCompanyEmployees(employees)
}
//END COMPANIES
// START USERS

// END USERS
    return (
        <Context.Provider value={{checkToken,handleCreateCompany,handleSignInCompany, handleEditCompany, handleDeleteCompany, getSummaryCompany, companySummary, getCompanyData, companyData, getCompanyEmployees, companyEmployees}}>
            {children}
        </Context.Provider>
    )
}