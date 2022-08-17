import ShowInfoCard from "./components/ShowInfoCard";
import { Info } from "./components/ShowInfoCard/styles";
import UserCard from "./components/UserCard";
import { Container, Content, ContentInfoLeft, ContentInfoRight} from "./styles";



export default function UsersDashBoard(){
 

    return (
        <>
      <Container>
        <Content>
            <ContentInfoLeft>
          <UserCard/>

            </ContentInfoLeft>
            <ContentInfoRight>
               <ShowInfoCard/>
 
            </ContentInfoRight>
        </Content>
      </Container>
        </>
    )
}








