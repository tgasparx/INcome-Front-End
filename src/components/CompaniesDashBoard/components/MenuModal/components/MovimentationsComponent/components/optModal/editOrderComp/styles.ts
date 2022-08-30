import styled from 'styled-components'


export const Container = styled.div`
margin: -3% 5% 0 0;
z-index: 100;
width: 80%;
height: 400px;
position: absolute;
//background-color: lightgray;
border-radius: 5px;
justify-self: end;


`;
export const ContainerTopCloseFlag = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
width: 100%;
height: 40px;
//background-color: blue;


`;
export const ContentTopCloseFlag = styled.div`
display: flex;
flex-direction: column;
width: 60px;
height: 40px;
background-color: lightgray;
border-radius: 5px 5px 0px 0px;
button{
    width: 100%;
    height: 100%;
    background-color: darkgreen;
    color: white;
    border: none;
    border-radius: 5px;
&:hover{
    background-color: green;
}
}

`;
export const Content = styled.div`
display: flex;
flex-direction: column;
box-shadow: 2px 0.2px 3px;
width: 100%;
height: 480px;
background-color: lightgray;
padding: 5%;
`;
export const Up = styled.div`
width: 100%;
display: flex;
flex-direction: row;
height: 50%;

`;

export const UpLeft = styled.div`
width: 30%;
display: flex;
flex-direction: column;
`;
export const Span = styled.span``;


export const UpRight = styled.div`
width: 70%;
display: flex;
flex-direction: column;
color: green;

`;
export const Down = styled.div`
margin-top: 5%;
padding-bottom: 5%;
display: flex;
flex-direction: row;
width: 100%;
height: 50%;
`;
export const DownLeft = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
`;
export const DownRight = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
align-items: end;
width: 50%;
height: 100%;
`;
export const Label = styled.label``;
export const Input = styled.input``;
export const Select = styled.select``;
