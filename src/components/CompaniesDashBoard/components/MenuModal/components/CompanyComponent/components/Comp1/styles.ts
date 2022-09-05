import styled from 'styled-components'

export const Container = styled.div`
display: grid;
width: 100%;
height: 100%;

grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;

@media (max-width: 600px) {
    display: flex;
    flex-direction: column;

    /* justify-content: space-between; */
}
/* background-color: blue; */
margin-top: 10px;
`;
export const RightContent = styled.div`
border-radius: 0 5px 5px 0;
/* padding-left: 10%; */
    width: 50%;
    height: 100%;
/* margin-right: 10px; */
display: flex;
flex-direction: column;
/* height: 60%; */
color: blue;
/* margin-left: 50px; */
justify-content: center;


`;
export const LeftContent = styled.div`
border-radius: 5px 0 0 5px;
padding-left: 10%;
   width: 50%;
    height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
/* height: 60%; */

`;
export const First = styled.div`
width: 100%;
    height: 100%;
    display: flex;
    flex-direction: inline;
    @media (max-width: 600px) {
  margin-top: 20px;
}
`;

export const Second = styled.div`
    height: 100%;   
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
  margin-top: 20px;
}
`;
export const Thirty = styled.div`
    height: 100%;   
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
  margin-top: 20px;
}

`;
export const Fourthy = styled.div`
    height: 100%;   
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
  margin-top: 20px;
}
`;