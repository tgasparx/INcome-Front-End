import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 60px;
background-color: var(--color-Blue-700);

`;
export const LeftContent = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 10%;
height: 100%;
/* background-color: blue;///////////////////////////// */
`;
export const RightContent = styled.section`
padding-right: 6%;
display: flex;
flex-direction: row;
justify-content: right;
align-items: center;
width: 90%;
height: 100%;
/* background-color: yellow; */
`;
export const MenuButton = styled.button`
background: none;
border: none;

`;
export const LogOut = styled.button`
margin-right: 10px;
border: none;
background: none;
color: white;

&:hover{
    color: lightblue;
    font-size: 1.1rem;
}
`;