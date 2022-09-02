
import { createContext, ReactNode, useEffect, useState } from "react";
import IContextData from "../interfaces/IContextData";
import IContextProvider from "../interfaces/IContextProvider";
import CompaniesService from "../services/CompaniesService/CompaniesService";
import UsersService from "../services/UsersService/UsersService";
import { templateCompanyData } from "../templates/companyData";
import { templateCompanyEmployees } from "../templates/companyEmployees";
import { templateCompanySummary } from "../templates/companySummary";
import { templateUserData } from "../templates/userData";
import { templateUserSummary } from "../templates/UserSummary";

export const Context = createContext({} as IContextData);
export function ContextProvider({ children }: IContextProvider) {
    const companiesServices = new CompaniesService()
    const usersServices = new UsersService()
    const [companySummary, setCompanySummary] = useState(templateCompanySummary)
    const [companyData, setCompanyData] = useState(templateCompanyData)
    const [companyEmployees, setCompanyEmployees] = useState(templateCompanyEmployees)
    const [companyToken, setCompanyToken] = useState<any>(localStorage.getItem("CompanyToken"))
    const [userToken, setUserToken] = useState(localStorage.getItem("UserToken"))
    const [userSummary, setUserSummary] = useState(templateUserSummary)
    const [userData, setUserData] = useState(templateUserData)

    useEffect(() => {
        setCompanyToken(localStorage.getItem("CompanyToken"))
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
        if(created){
            return true
        }else{
            return false
        }
    }
    async function handleSignInCompany({ email, password }: any): Promise<any> {
        const logged = await companiesServices.companyAuth({ email, password })
        if (logged.token.tokenHash) {
            window.localStorage.setItem("CompanyToken", logged.token.tokenHash)
            setCompanyToken(localStorage.getItem("CompanyToken"))
            return true
        } else {
            return false
        }

    }
    async function handleEditCompany({name, email, cnpj}: any) {
        const edited = await companiesServices.companyEdit({name, email, cnpj}, companyToken)
        return edited
     }
    async function handleDeleteCompany() { }
    async function getSummaryCompany() {
        const summary = await companiesServices.companySummary(companyToken)
        if (!summary.error) {
            setCompanySummary(summary)
        }




    }
    async function getCompanyData() {
        const companyData = await companiesServices.getCompanyData(companyToken)
        if (!companyData.error) {
            setCompanyData(companyData)
        }

    }
    async function getCompanyEmployees() {
        const employees = await companiesServices.listEmployees(companyToken)
        if (!employees.error) {
            setCompanyEmployees(employees)
        }

    }
    async function handleCreateNewEmployee({name, email, password, cpf}: any){
        const created = await companiesServices.insertNewEmployee({name, email, password, cpf}, companyToken)
        return true
    }
    async function handleEditEmployee({name, email, password, cpf}: any, employeeId: string){
        const edited = await companiesServices.editEmployee({name, email, password, cpf}, employeeId,companyToken)
        console.log(name, email, password, cpf)
        return edited

    }
    async function handleInsertOrder({description, value, status, driver, client, km}: any){
        const created = await companiesServices.insertOrder({description, value ,status, driver, client, km}, companyToken)
    }
    async function handleEditOrder({description, value, status, driver,client, km}: any, orderId: string){
        const edited = await companiesServices.editOrder({description, value, status ,driver, client, km}, orderId, companyToken)

    }
    async function handleDeleteOrder(orderId: string){
        const deleted = await companiesServices.deleteOrder(orderId, companyToken)
        return deleted
    }
    async function handleInsertExpense({description, value, status}: any){
        const created = await companiesServices.insertExpense({description, value, status}, companyToken)
        return created
    }
    async function handleEditExpense({description, value, status}: any, expenseId: string){
        console.log(description, value, status, expenseId)
        const edited = await companiesServices.editExpense({description, value, status}, expenseId, companyToken)
        return edited
    }
    async function handleDeleteExpense(expenseId: string){
        const deleted = await companiesServices.deleteExpense(expenseId, companyToken)
        return deleted
    }
    async function handleChangePassword({password, newPassword}: any){
       try {
        const changed = await companiesServices.changePassword({password, newPassword}, companyToken)
        return true
       } catch (error) {
        console.log(error)
        return false
       }
        
    }


    //END COMPANIES
    // START USERS
async function handleSignUser({ email, password }: any){
const logged = await usersServices.userAuth({email, password})
if(logged){
    localStorage.setItem("UserToken", logged.token.tokenHash)
    setUserData(logged)
    setUserToken(logged.token.tokenHash)
    return true
}else{
    return false
}
}
async function getSummaryUser(){
    const summary = await usersServices.userSummary(userToken)
    setUserSummary(summary)

    return true
}

async function getUserData(){
   if(userToken){
    const userData = await usersServices.userData(userToken)
    setUserData(userData)
   }
}
    // END USERS
    return (
        <Context.Provider value={{ checkToken, handleCreateCompany, handleSignInCompany, handleEditCompany, handleDeleteCompany, getSummaryCompany, companySummary, getCompanyData, companyData, getCompanyEmployees, companyEmployees, handleCreateNewEmployee, handleEditEmployee, handleInsertOrder,handleInsertExpense, handleSignUser, getSummaryUser, userSummary, userData, handleChangePassword, handleEditOrder, handleEditExpense, handleDeleteExpense, handleDeleteOrder, getUserData }}>
            {children}
        </Context.Provider>
    )
}