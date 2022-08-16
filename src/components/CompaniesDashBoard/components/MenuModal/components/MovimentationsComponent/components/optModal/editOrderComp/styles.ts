import styled from 'styled-components'


export const Container = styled.div`
margin: 10px 20px;
z-index: 100;
width: 60%;
height: 300px;
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
    background-color: black;
    color: white;
&:hover{
    background-color: darkgray;
}
}

`;
export const Content = styled.div`
display: flex;
flex-direction: column;
box-shadow: 2px 0.2px 3px;
width: 100%;
min-height: 300px;
background-color: lightgray;

div:first-child{
    display: flex;
    flex-direction: row;
    div:first-child{
        width: 30%;
    }
}
div:last-child{
    display: flex;
    flex-direction: column;
}

`;