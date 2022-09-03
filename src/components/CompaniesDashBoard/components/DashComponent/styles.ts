
import styled from "styled-components";


export const Container = styled.div`
margin: 0 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: 95%;
align-items: center;

@media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
}
`;
export const DashSection = styled.section`
border-radius: 5px;
box-shadow: 1px 0.5px 2px;
background-color: white;
width: 23%;
height: 95%;
@media (max-width: 800px) {
    width: 95%;
    margin: 2.5%;
}
`;
interface UpProps{
    color1: string
    color2: string
}
export const Up = styled.div<UpProps>`
height: 65%;
width: 100%;
border-radius: 5px 5px 0px 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background: linear-gradient(${(props) => props.color1}, ${(props) => props.color2});
`;
interface IDownProps{
    color: string
}
export const LabelUp = styled.span`
color: white;
;
font-size: 80px;
`;
interface IMidProps{
color: string
}
export const Mid = styled.div<IMidProps>`
padding: 10px 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
color: white;
height: 15%;
width: 100%;
border-radius: 0 0 5px 5px;
background-color: ${(props) => props.color};
`;
export const Down = styled.div<IDownProps>`
display: flex;
flex-direction: row;
justify-content: right;
height: 20%;
width: 100%;
background-color: ${(props) => props.color};
align-items: center;

`;
export const LabelDown = styled.span`
margin-right: 20px;
color: white;
`;
