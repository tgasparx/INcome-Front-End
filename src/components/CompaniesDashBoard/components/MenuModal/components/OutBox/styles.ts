import styled from "styled-components";

interface IContentProps{
    isOutBoxActive: boolean
}
export const Container = styled.div`
height: 50px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 20px auto;


`;
export const Content = styled.div<IContentProps>`
display: flex;
align-items: center;
justify-content: center;
width: 98%;
height: 98%;
/* color: "white"; */
/* background-color: "black"; */
/* box-shadow: 10px 5px 3px; */
border-radius: 5px;
`;