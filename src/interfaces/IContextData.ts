
export default interface IContextData{
    handleSignInCompany: ({email, password}: any) => Promise<any>
    handleCreateCompany: ({name, email, password, cnpj}: any) => Promise<any>
    handleEditCompany: () => Promise<any>
    handleDeleteCompany: () => Promise<any>
    checkToken: (token: string) => Promise<any>
    getSummaryCompany: (token: string) => Promise<any>
    companySummary: any
    getCompanyData: () => any
    companyData: any
    getCompanyEmployees: any
    companyEmployees: any
}