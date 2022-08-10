import { api } from "../api";

export default class CompaniesService{

async createCompany({name, email, password, cnpj}: any){
    const newCompany = await api.post("/companies/create", {company_name: name, company_email: email, company_password: password, company_cnpj: cnpj})
    return newCompany
}
async companyAuth({email, password}: any){
    try {
        const logged = await api.post("/companies/auth", {email, password}).then(response => response.data)
        return logged
    } catch (error) {
        console.log(error)
        return false
        
    }

}
async companyEdit(token: string, {newData}: any){}
async companyDelete(token: string){}
async companySummary(token: string){}

async insertNewEmployee({name, email, password, cpf}: any){}
async editEmployee(token: string, {newData}: any ){}
async deleteEmployee(token: string, employeeCPF: string){}

}