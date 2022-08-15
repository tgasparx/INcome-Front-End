import styled from 'styled-components'

interface IButtonProps{
    name: string
}
export const Button = styled.button<IButtonProps>`
margin-top: 5px;
width: 100%;
height: 30px;
border: none;
color: white;

background-color: ${(props) => props.name === "order" ? "green" : "red"};
&:hover{
    background-color: ${(props) => props.name === "order" ? "darkgreen" : "darkred"};
    
}
`;