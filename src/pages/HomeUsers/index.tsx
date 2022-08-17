import UsersDashBoard from "../../components/UsersDashBoard";
import { useContext, useEffect } from "react";
import { Context } from "../../context";
import {useNavigate} from 'react-router-dom'
import  Header  from "../../components/Users-Header";


export default function HomeUsers(){
  const { checkToken } = useContext(Context)
  const token = localStorage.getItem("UserToken") || ""
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