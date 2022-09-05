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
min-height: 400px;
/* background-color: yellow; */

`;
export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 80px;
height: 100%;
/* background-color: green; */

`;
interface IPropsButtons{
    name : string

}
export const Button = styled.button<IPropsButtons>`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
color: white;
background-color: ${(props) => props.name === "close" ? "darkblue" : "purple"};
border: none;
border-radius: 5px;
&:hover{
    background-color: ${(props) => props.name === "close" ? "blue" : "black"};
}
`;
