
import { createContext, ReactNode, useEffect, useState } from "react";
import IChangePasswordData from "../interfaces/IChangePasswordData";
import ICompanyAuthData from "../interfaces/ICompanyAuthData";
import ICompanyData from "../interfaces/ICompanyData";
import ICompanyEmployees from "../interfaces/ICompanyEmployees";
import ICompanySummary from "../interfaces/ICompanySummary";
import IContextData from "../interfaces/IContextData";
import IContextProvider from "../interfaces/IContextProvider";
import ICreateCompanyData from "../interfaces/ICreateCompanyData";
import ICreateUserData from "../interfaces/ICreateUserData";
import IEditCompanyData from "../interfaces/IEditCompanyData";
import IEditOrderData from "../interfaces/IEditOrderData";
import IEditUserData from "../interfaces/IEditUserData";
import IUserData from "../interfaces/IUserData";
import IUserSummary from "../interfaces/IUserSummary";
import OutBoxController from "../OutBoxContoller";
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
    const [companySummary, setCompanySummary] = useState<ICompanySummary>(templateCompanySummary)
    const [companyData, setCompanyData] = useState<ICompanyData>(templateCompanyData)
    const [companyEmployees, setCompanyEmployees] = useState<ICompanyEmployees>(templateCompanyEmployees)
    const [companyToken, setCompanyToken] = useState<string | "">(localStorage.getItem("CompanyToken") || "")
    const [userToken, setUserToken] = useState<string | "">(localStorage.getItem("UserToken") || "")
    const [userSummary, setUserSummary] = useState<IUserSummary>(templateUserSummary)
    const [userData, setUserData] = useState<IUserData>(templateUserData)
    const [outBoxColor, setOutBoxColor] = useState("none")
    const [outBoxText, setOutBoxText] = useState("")



    useEffect(() => {
        setCompanyToken(localStorage.getItem("CompanyToken") || "")
    }, [])
    async function checkToken(token: string) {
        if (token !== "") {
            return true
        } else {
            return false
        }
    }

    function controlOutBox(color: string, text: string){
        setOutBoxColor(color)
        setOutBoxText(text)
        setTimeout(() => {
            setOutBoxColor("none")
            setOutBoxText("")
        }, 5000);
    }
    //START COMPANIES
    async function handleCreateCompany({ name, email, password, cnpj }: ICreateCompanyData): Promise<boolean> {
        const created = await companiesServices.createCompany({ name, email, password, cnpj })
        if(created){
            return true
        }else{
            return false
        }
    }
    async function handleSignInCompany({ email, password }: ICompanyAuthData): Promise<boolean> {
        const logged = await companiesServices.companyAuth({ email, password })
        if (logged.token.tokenHash) {
            window.localStorage.setItem("CompanyToken", logged.token.tokenHash)
            setCompanyToken(localStorage.getItem("CompanyToken") || "")
            return true
        } else {
            return false
        }

    }
    async function handleEditCompany({name, email, cnpj}: IEditCompanyData):Promise<boolean> {
        const edited = await companiesServices.companyEdit({name, email, cnpj}, companyToken)
        return edited
     }
    async function handleDeleteCompany():Promise<boolean> { 
        return false
    }
    async function getSummaryCompany():Promise<void> {
        const summary = await companiesServices.companySummary(companyToken)
        if (!summary.error) {
            setCompanySummary(summary)
        }
    }
    async function getCompanyData():Promise<void> {
        const companyData = await companiesServices.getCompanyData(companyToken)
        if (!companyData.error) {
            setCompanyData(companyData)
        }

    }
    async function getCompanyEmployees():Promise<void> {
        const employees = await companiesServices.listEmployees(companyToken)
        if (!employees.error) {
            setCompanyEmployees(employees)
        }

    }
    async function handleCreateUser({name, email, password, cpf}: ICreateUserData): Promise<boolean>{
        const created = await companiesServices.createUser({name, email, password, cpf}, companyToken)
        return true
    }
    async function handleEditUser({name, email, password, cpf}: IEditUserData, employeeId: string): Promise<boolean>{
        const edited = await companiesServices.editEmployee({name, email, password, cpf}, employeeId,companyToken)
        // console.log(name, email, password, cpf)
        return edited
    }
    async function handleDeleteUser(employeeId: string): Promise<boolean>{
        const deleted = await companiesServices.deleteUser(employeeId, companyToken)
        return true
    }
    async function handleInsertOrder({description, value, status, driver, client, km}: any): Promise<boolean>{
        const created = await companiesServices.insertOrder({description, value ,status, driver, client, km}, companyToken)
        return true
    }
    async function handleEditOrder({description, value, status, driver,client, km}: IEditOrderData, orderId: string): Promise<boolean>{
        const edited = await companiesServices.editOrder({description, value, status ,driver, client, km}, orderId, companyToken)
        return true
    }
    async function handleDeleteOrder(orderId: string): Promise<boolean>{
        const deleted = await companiesServices.deleteOrder(orderId, companyToken)
        return true
    }
    async function handleInsertExpense({description, value, status}: any): Promise<boolean>{
        const created = await companiesServices.insertExpense({description, value, status}, companyToken)
        return true
    }
    async function handleEditExpense({description, value, status}: any, expenseId: string): Promise<boolean>{
        console.log(description, value, status, expenseId)
        const edited = await companiesServices.editExpense({description, value, status}, expenseId, companyToken)
        return true
    }
    async function handleDeleteExpense(expenseId: string): Promise<boolean>{
        const deleted = await companiesServices.deleteExpense(expenseId, companyToken)
        return true
    }
    async function handleChangePassword({password, newPassword}: IChangePasswordData): Promise<boolean>{
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
async function handleSignUser({ email, password }: any): Promise<boolean>{
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

async function getSummaryUser(): Promise<void>{
    const summary = await usersServices.userSummary(userToken)
    setUserSummary(summary)

}

async function getUserData(): Promise<void>{
   if(userToken){
    const userData = await usersServices.userData(userToken)
    setUserData(userData)
   }
}

    // END USERS
    return (
        <Context.Provider value={{ checkToken, handleCreateCompany, handleSignInCompany, handleEditCompany, handleDeleteCompany, getSummaryCompany, companySummary, getCompanyData, companyData, getCompanyEmployees, companyEmployees, handleCreateUser, handleEditUser, handleDeleteUser,handleInsertOrder,handleInsertExpense, handleSignUser, getSummaryUser, userSummary, userData, handleChangePassword, handleEditOrder, handleEditExpense, handleDeleteExpense, handleDeleteOrder, getUserData, outBoxText, outBoxColor,  controlOutBox }}>
            {children}
        </Context.Provider>
    )
}