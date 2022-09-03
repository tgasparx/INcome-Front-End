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
async editEmployee({name, email, password, cpf}: any, employeeId: string, token: string ){
    const edited = await api.patch(`/users/edit/${token}/${employeeId}`, {name,email, password, cpf})
    console.log(employeeId, name, email, password, cpf, token)
    console.log(edited)
    return false

}
async deleteEmployee(employeeId: string, token: string){
    const deleted = await api.delete(`/users/delete/${token}/${employeeId}`)
    return deleted
}   

async insertOrder({description, value, status,driver, client, km}: any, token: string){
    const created = await api.post(`/orders/create/${token}`, {description, value, status, driver, client, km})
    return created
}
async editOrder({description, value, status ,driver,client, km}: any, orderId:string, token: string){
    const edited = await api.patch(`/orders/edit/${token}`, {description, value, status, driver,client, km, orderId})
    console.log(edited)
    return edited
}
async deleteOrder(orderId: string, token: string){
    const deleted = await api.delete(`/orders/delete/${orderId}/${token}`)
    return deleted
}
async insertExpense({description, value, status}: any, token: string){
    const created = await api.post(`/expenses/create/${token}`, {description, value ,status})
    return created
}
////////////////////////////////////////
async editExpense({description, value, status}: any, expenseId: string, token: string){
    const edited = await api.patch(`/expenses/edit/${expenseId}/${token}`, {description, value, status})
    return edited
}
async deleteExpense(expenseId: string, token: string){
    const deleted = await api.delete(`/expenses/delete/${expenseId}/${token}`)
    return deleted
}
async changePassword({password, newPassword}: any, token: string){
    const changed = await api.put(`/companies/changePassword/${token}`, {password, newPassword}).then(response => response.data)
    return changed
}

}