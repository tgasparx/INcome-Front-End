import { useContext, useEffect } from "react";
import { Context } from "../../context";
import ShowInfoCard from "./components/ShowInfoCard";
import { Info } from "./components/ShowInfoCard/styles";
import UserCard from "./components/UserCard";
import UserSummaryDashboard from "./components/UserSummaryDashBoard";
import { Container,  ContentInfoLeft, ContentInfoRight, FirstContent, SecondContent} from "./styles";



export default function UsersDashBoard(){
 const {userSummary, getSummaryUser, userData, getUserData} = useContext(Context)

 useEffect(() => {
  getUserData()
  getSummaryUser()
  console.log(userSummary)
 },[])

    return (
        <>
      <Container>
        <FirstContent>
            <ContentInfoLeft>
          <UserCard userData={userData}/>
        
            </ContentInfoLeft>
            <UserSummaryDashboard/>

        </FirstContent>
        <SecondContent>
        <ContentInfoRight>
               <ShowInfoCard userData={userData} userSummary={userSummary}/>
 
            </ContentInfoRight>
        </SecondContent>
      </Container>
        </>
    )
}








