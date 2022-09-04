

export default interface ICompanyEmployees{
    company_name: string;
    employees: {
        page: number;
        perPage: number;
        all_employees: {
            name: string;
            email: string;
            cnpj: string;
            summary: {};
        }[];
    };
}