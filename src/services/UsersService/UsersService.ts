import { api } from "../api";

export default class UsersService{
    async userAuth({email, password}: any){
        const logged = await api.post("/users/auth", {email, password})
        return logged
    }
    async userSummary(token: any){
const summary = await api.get(`/users/summary/${token}`).then(response => response.data)
return summary

    }
}