import styled from 'styled-components'

export const Container = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 800px;
/* background-color: yellow; */
@media (max-width: 700px) {
    flex-direction: column;
    min-height: 600px;
    height: 100%;
    padding-top: 20px;
}

`;
export const FirstContent = styled.div`
display: flex;
flex-direction: column;
width: 48%;
/* align-items: center;
justify-content: center; */
height: 90%;
/* background-color: blue; */
@media (max-width: 700px) {
    width: 95%;
    min-height: 400px;

}
`;
export const SecondContent = styled.div`
display: flex;
flex-direction: row;
width: 48%;
height: 90%;
@media (max-width: 700px) {
    width: 100%;

}

`;
export const ContentInfoLeft = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 30%;
background-color: lightgray;
border-radius: 10px;
box-shadow: 1px 0.4px 4px;
@media (max-width: 700px) {
   width: 100%;
   min-height: 120px;
  
}
`;
export const ContentInfoRight = styled.div`

box-shadow: 1px 0.4px 4px;
margin: 0px 10px;
width: 100%;
height: 100%;
min-height: 500px;
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
   min-height: 500px;
}
`;

