import Header from "../../components/Header";
import UsersDashBoard from "../../components/UsersDashBoard";
import { useContext, useEffect } from "react";
import CompaniesDashboard from "../../components/CompaniesDashBoard";
import { Context } from "../../context";
import {useNavigate} from 'react-router-dom'


export default function HomeUsers(){
  const { checkToken } = useContext(Context)
  const token = localStorage.getItem("CompanyToken") || ""
  const navigate = useNavigate()
  async function checkValidToken() {
    const isValid = await checkToken(token)
    if(!isValid){
        navigate("/", {replace: true})
    }
}
useEffect(() => {
  checkValidToken()
}, [])
    return (
      <>
        <Header/>
        <UsersDashBoard/>
      </>
    )
}