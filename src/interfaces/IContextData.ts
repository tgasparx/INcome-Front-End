import IEditOrderData from "./IEditOrderData"

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
    handleCreateUser: any
    handleEditUser: any
    handleDeleteUser: any
    handleInsertOrder: ({description, value, status}: any) => any
    handleInsertExpense: ({description, value, status}: any) => any
    handleSignUser: any
    getSummaryUser: any
    userSummary: any
    userData: any
    handleChangePassword: ({password, newPassword}: any) => Promise<any>
    handleEditOrder: ({description, value, status, driver}: IEditOrderData, orderId: string) => Promise<any>
    handleEditExpense: ({description, value, status}: any, expenseId: string) => Promise<any>
    handleDeleteOrder: (orderId: string) => Promise<any>
    handleDeleteExpense: (expenseId: string) => Promise<any>
    getUserData: () => Promise<any>
}