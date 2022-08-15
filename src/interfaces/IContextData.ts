
export default interface IContextData{
    handleSignInCompany: ({email, password}: any) => Promise<any>
    handleCreateCompany: ({name, email, password, cnpj}: any) => Promise<any>
    handleEditCompany: ({name, email, cnpj}: any) => Promise<any>
    handleDeleteCompany: () => Promise<any>
    checkToken: (token: any) => Promise<any>
    getSummaryCompany: () => Promise<any>
    companySummary: any
    getCompanyData: () => any
    companyData: any
    getCompanyEmployees: any
    companyEmployees: any
    handleCreateNewEmployee: any
}