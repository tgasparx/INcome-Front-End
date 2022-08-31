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
async companyEdit({name, email, cnpj}: any, companyToken: string){
    const edited = await api.patch(`/companies/edit/${companyToken}`, {name, email, cnpj}).then(response => response.data)
    return edited
}
async companyDelete(token: string){}
async companySummary(companyToken: string){
    const summary = await api.get(`/companies/summary/${companyToken}`).then(response => response.data)
    return summary
}
async getCompanyData(companyToken: string){
    const companyData = await api.get(`/companies/data/${companyToken}`).then(response => response.data)
    return companyData
}

async listEmployees(companyToken: string){
    const employees = await api.get(`/companies/employees/${companyToken}`).then(response => response.data)
    return employees
}
async insertNewEmployee({name, email, password, cpf}: any, token: string){
    const created = await api.post(`/users/create/${token}`, {name, email, password, cpf})
    return created
}
async editEmployee(token: string, {newData}: any ){}
async deleteEmployee(token: string, employeeCPF: string){}

async insertOrder({description, value, status,driver, km}: any, token: string){
    const created = await api.post(`companies/orders/create/${token}`, {description, value, status, driver, km})
    return true
}
async editOrder({description, value, status ,driver, km}: any, orderId:string, token: string){
    const edited = await api.patch(`/companies/orders/edit/${token}`, {description, value, status, driver, km, orderId})
    console.log(edited)
}
async insertExpense({description, value, status}: any, token: string){
    const created = await api.post(`/companies/expenses/create/${token}`, {description, value ,status})
    return created
}
async editExpense({description, value, status}: any, expenseId: string, token: string){

}
async changePassword({password, newPassword}: any, token: string){
    const changed = await api.put(`/companies/changePassword/${token}`, {password, newPassword}).then(response => response.data)
    return changed
}
}