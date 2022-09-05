import styled from 'styled-components'


export const Container = styled.div`
flex-direction: column;
display: flex;
width: 100%;
height: 600px;
padding-bottom: 30px;
background-color: white;
border-radius: 8px;
box-shadow: 0.2px 1px 4px;
@media (max-width: 600px) {
    grid-template-columns: 1fr;
grid-template-rows: 50%;
height: 100%;
}
`;
export const NavContent = styled.nav`
margin-top: 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
min-height: 10%;
//background-color: yellow;
@media (max-width: 600px) {
  flex-direction: column;
  justify-content: center;
  min-height: 25%;
    button{
        /* margin-bottom: 8px; */
        margin-top: 8px;
    }
}
`;
export const OptContent = styled.div`
font-size: 14px;
/* margin-top: 2%; */
background-color: white;
/* min-height: 400px; */
min-height: 90%;
border-radius: 0 0 5px 5px;
//background-color: gray;
@media (max-width: 600px) {
 min-height: 75%;
}
`;