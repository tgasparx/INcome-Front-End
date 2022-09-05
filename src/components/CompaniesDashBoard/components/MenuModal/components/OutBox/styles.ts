import styled from "styled-components";

interface IContainerProps{
    color: string
}
export const Container = styled.div<IContainerProps>`
height: 50px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: ${(props) => props.color};
/* background-color: yellow; */

`;