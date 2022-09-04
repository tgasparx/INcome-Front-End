import { api } from "../api";

export default class UsersService{
    async userAuth({email, password}: any){
        const logged = await api.post("/users/auth", {email, password}).then(response => response.data)
        return logged
    }
    async userSummary(token: any){
const summary = await api.get(`/users/summary/${token}`).then(response => response.data)
return summary
    }
    async userData(token: string){
        const userData = await api.get(`/users/data/${token}`).then(response => response.data)
        return userData
    }
  

}