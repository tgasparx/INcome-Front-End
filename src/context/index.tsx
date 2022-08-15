
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
    const [companyToken, setCompanyToken] = useState<any>(localStorage.getItem("CompanyToken"))
    const [actualToken, setActualToken] = useState<any>("")
    console.log("contexttoken",companyToken)

    useEffect(() => {
        setCompanyToken(localStorage.getItem("CompanyToken"))
        setActualToken(localStorage.getItem("CompanyToken"))
    }, [])
    async function checkToken(token: string) {
        if (token !== "") {
            return true
        } else {
            return false
        }
    }
    //START COMPANIES
    async function handleCreateCompany({ name, email, password, cnpj }: any) {
        const created = await companiesServices.createCompany({ name, email, password, cnpj })
            console.log(created)
        if(created){
            return true
        }else{
            return false
        }
    }
    async function handleSignInCompany({ email, password }: any): Promise<any> {
        const logged = await companiesServices.companyAuth({ email, password })
        if (logged.token.tokenHash) {
            console.log(logged.token.tokenHash)
            window.localStorage.setItem("CompanyToken", logged.token.tokenHash)
            setCompanyToken(localStorage.getItem("CompanyToken"))
            setActualToken(logged.token.tokenHash)
            return true
        } else {
            return false
        }

    }
    async function handleEditCompany({name, email, password}: any) {
        const edited = await companiesServices.companyEdit({name, email, password}, companyToken)
        return edited
     }
    async function handleDeleteCompany() { }
    async function getSummaryCompany() {
        const summary = await companiesServices.companySummary(companyToken)
        console.log("context summary", summary)
        if (!summary.error) {
            setCompanySummary(summary)
        }




    }
    async function getCompanyData() {
        const companyData = await companiesServices.getCompanyData(companyToken)
        console.log("ccompanyData", companyData)
        if (!companyData.error) {
            setCompanyData(companyData)
        }

    }
    async function getCompanyEmployees() {
        const employees = await companiesServices.listEmployees(companyToken)
        console.log("context employees", employees)
        if (!employees.error) {
            setCompanyEmployees(employees)
        }

    }
    async function handleCreateNewEmployee({name, email, password, cpf}: any){
        const created = await companiesServices.insertNewEmployee({name, email, password, cpf}, companyToken)
        console.log(created)
        return true
    }
    async function handleInsertOrder({description, value, status}: any){
        const created = await companiesServices.insertOrder({description, value ,status}, companyToken)

    }
    async function handleInsertExpense({description, value, status}: any){
        const created = await companiesServices.insertExpense({description, value, status}, companyToken)
        console.log(created)
    }
    //END COMPANIES
    // START USERS

    // END USERS
    return (
        <Context.Provider value={{ checkToken, handleCreateCompany, handleSignInCompany, handleEditCompany, handleDeleteCompany, getSummaryCompany, companySummary, getCompanyData, companyData, getCompanyEmployees, companyEmployees, handleCreateNewEmployee, handleInsertOrder,handleInsertExpense }}>
            {children}
        </Context.Provider>
    )
}