

export default interface ICompanyData{
    id: string;
    name: string;
    email: string;
    created_at: string;
    token: {
        type: string;
        tokenHash: string;
    };
}