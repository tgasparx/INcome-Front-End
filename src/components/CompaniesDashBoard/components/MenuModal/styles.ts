import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 10%;
/* background-color: yellow; */

`;

export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
min-height: 600px;
/* background-color: yellow; */

`;
export const Button = styled.button`
width: 30px;
height: 30px;
color: white;
background-color: black;
border: none;
border-radius: 5px;
&:hover{
    background-color: darkgray;
    color: black;
}
`;