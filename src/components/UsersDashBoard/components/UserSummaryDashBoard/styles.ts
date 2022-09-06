import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 15px;
/* background-color: blue; */
width: 100%;
/* box-shadow: 2px 0.5px 1px; */
height: 70%;
/* min-height: 290px; */
border-radius: 5px;
min-height: 270px;

`;
export const Content = styled.div`
/* background-color: lightblue; */
width: 99%;
/* border: 2px double blue; */
border-radius: 5px;
height: 99%;
min-height: 264px;
flex-direction: grid;
grid-template-columns: 100%;



`;
export const First = styled.div`
width: 100%;
height: 50%;
/* min-height: 180px; */
/* background-color: blue; */
/* padding: 10px; */
`; 
export const Second = styled.div`
margin-top: 10px;

/* padding: 10px; */
width: 100%;
height: 50%;
/* background-color: yellow; */
min-height: 150px;
`;