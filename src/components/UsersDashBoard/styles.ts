import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 500px;
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
@media (max-width: 700px) {
   width: 100%;
}
`;
export const ContentInfoRight = styled.div`
width: 70%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 50% 50%;
background-color: lightgray;
@media (max-width: 700px) {
   width: 100%;
}
`;
export const Info1 = styled.div`
width: 100%;
height: 100%;
background-color: pink;
`;
export const Info2 = styled.div`
width: 100%;
height: 100%;
background-color: pink;
`;
export const Info3 = styled.div`
width: 100%;
height: 100%;
background-color: pink;
`;
export const Info4 = styled.div`
width: 100%;
height: 100%;
background-color: pink;
`;
