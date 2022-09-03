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
/* padding: 10px auto; */
min-height: 400px;


`;
export const Label = styled.label`
margin-top: 10px;
`;
export const Content = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
margin-bottom: 20px;
`;


export const Input = styled.input<IInputProps>`
height: 35px;
color: gray;
width: 100%;
border: none;
box-shadow: 3px 0.2px 2px;

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