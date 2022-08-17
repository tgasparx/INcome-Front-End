import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 600px;
/* background-color: yellow; */

`;
export const Content = styled.div`
display: flex;
flex-direction: row;
width: 90%;
height: 90%;
/* background-color: blue; */
@media (max-width: 700px) {
    flex-direction: column;
}
`;
export const ContentInfoLeft = styled.div`
width: 30%;
height: 30%;
background-color: lightgray;
border-radius: 10px;
box-shadow: 1px 0.4px 4px;
@media (max-width: 700px) {
   width: 100%;
}
`;

export const ContentInfoRight = styled.div`

box-shadow: 1px 0.4px 4px;
margin: 0px 10px;
width: 70%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 50% 50%;
align-items: center;
justify-items: center;
background-color: lightgray;
border-radius: 10px;
@media (max-width: 700px) {
   width: 100%;
   margin: 10px 0;
}
`;

