import styled from 'styled-components'

export const Container = styled.div`
padding: 10px 0px ;
flex-direction: row;
display: flex;
width: 100%;
height: 100%;
justify-content: center;
@media (max-width: 600px) {
    /* justify-content: space-between; */
}
/* background-color: blue; */
margin-top: 10px;
`;
export const RightContent = styled.div`
margin-right: 10px;
display: flex;
flex-direction: column;
height: 60%;
color: blue;
margin-left: 50px;

`;
export const LeftContent = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
height: 60%;

`;