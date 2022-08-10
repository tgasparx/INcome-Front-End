
import { createContext, ReactNode, useEffect, useState } from "react";
import IContextData from "../interfaces/IContextData";
import IContextProvider from "../interfaces/IContextProvider";
import CompaniesService from "../services/CompaniesService/CompaniesService";

export const Context = createContext({} as IContextData);
export function ContextProvider({ children }: IContextProvider) {
const companiesServices = new CompaniesService()
async function checkToken(){
    return true //false - se retornar true o acesso a página está liberado, senão não
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
//END COMPANIES
// START USERS

// END USERS

    return (
        <Context.Provider value={{checkToken,handleCreateCompany,handleSignInCompany, handleEditCompany, handleDeleteCompany}}>
            {children}
        </Context.Provider>
    )
}