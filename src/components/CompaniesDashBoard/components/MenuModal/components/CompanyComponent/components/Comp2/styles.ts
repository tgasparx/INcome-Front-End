import styled from 'styled-components'

interface IInputProps{
    value: string
}
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/* margin-top: 20px; */
`;
export const Content = styled.div`
display: flex;
flex-direction: column;
width: 80%;
height: 100%;
`;


export const Label = styled.label`
margin-top: 10px;

`;

interface IInputProps{
value: string
inputColor: string
}
export const Input = styled.input<IInputProps>`
height: 35px;
color: gray;
width: 100%;
border: none;
box-shadow: 3px 0.2px 2px ${(props) => props.value === "" ? props.inputColor : "green"};

`;
export const Button = styled.button`
margin-top: 10px;
width: 200px;
background-color: blue;
color: white;
height: 30px;
border: none;
border-radius: 5px;
&:hover{
    background-color: darkblue;
}
`;