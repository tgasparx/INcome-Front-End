import { useContext, useEffect } from "react";
import { Context } from "../../context";
import ShowInfoCard from "./components/ShowInfoCard";
import { Info } from "./components/ShowInfoCard/styles";
import UserCard from "./components/UserCard";
import { Container, Content, ContentInfoLeft, ContentInfoRight} from "./styles";



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
        <Content>
            <ContentInfoLeft>
          <UserCard userData={userData}/>

            </ContentInfoLeft>
            <ContentInfoRight>
               <ShowInfoCard userData={userData} userSummary={userSummary}/>
 
            </ContentInfoRight>
        </Content>
      </Container>
        </>
    )
}








