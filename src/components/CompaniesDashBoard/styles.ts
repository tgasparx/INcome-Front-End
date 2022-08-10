import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 700px;
/* background-color: lightblue; */


`;
export const UpContent = styled.section`
padding: 50px 20px;
flex-direction: row;
justify-content: center;
align-items: center;
display: flex;
width: 100%;
height: 50%;
background-color: snow;

@media (max-width: 700px) {
    flex-direction: column;
}
`;
export const UpLeft = styled.div`
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
display: flex;
flex-direction: row;

`;
export const UpRight = styled.div`
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
display: flex;
flex-direction: row;
`;
export const DownContent = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: 50%;
/* background-color: gray; */
background-color: lightgray;
@media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
}
`;
export const Left = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
/* background-color: magenta; */
@media (max-width: 700px) {

    width: 100%;
}
`;
export const Right = styled.div`
display: flex;
flex-direction: row;
width: 50%;
height: 100%;

@media (max-width: 700px) {

width: 100%;
}
`;