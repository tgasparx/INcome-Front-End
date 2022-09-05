import styled from "styled-components";


export const Container = styled.div`
z-index: 100;
margin: -4% 0 0 0 ;
position: absolute;
width: 97%;
height: 100%;
background-color: white;
box-shadow: 1px 0.5px 2px;
border-radius: 5px;
display: flex;
flex-direction: column;
min-height: 600px;
align-items: center;
`;
export const Header = styled.div`
color: white;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: 40px;
background-color: blue;
padding-right: 10px;
padding-left: 10px;
border-radius: 5px 5px 0 0;
`;
export const ShowInfo = styled.div`
margin-top: 20px;
width: 60%;
display: flex;
flex-direction: row;
justify-content: center;
background-color: lightgreen;
height: 150px;
align-items: center;
margin-bottom: 20px;

`;
export const Left = styled.div`
width: 150px;
display: flex;
flex-direction: column;
`
export const Right = styled.div`
width: 150px;
display: flex;
flex-direction: column;
`
export const CloseButton = styled.button`
width: 80px;
height: 30px;
border: none;
background-color: black;
color: white;
border-radius: 5px;
&:hover{
    background-color: darkgray;
    color: black;
}
`;
export const Form = styled.div`
margin-top: 20px;
width: 60%;
display: flex;
flex-direction: column;
`;
export const Label = styled.label`
margin-top: 10px;
`;
export const Input = styled.input``;
export const Button = styled.button`
width: 200px;
height: 30px;
border: none;
background-color: blue;
color: white;
border-radius: 5px;
margin-top: 10px;
&:hover{
    background-color: darkblue;
}
`;