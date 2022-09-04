


export default interface IUserData{
    id: string;
    name: string;
    email: string;
    cpf: string;
    user_job: string;
    created_at: string;
    token: {
        type: string;
        tokenHash: string;
    };
}