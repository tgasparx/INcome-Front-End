import styled from 'styled-components'


interface ITrProps{
    element: any
    selectedOrderId: any
}
export const ActionTableButton = styled.a`
background-color: blue;

`;
export const NoActionTr = styled.tr`
background-color: lawngreen;
line-height: 30px;
font-size: 12px;
`;
export const Tr = styled.tr<ITrProps>`
background-color: ${(props) => props.selectedOrderId === props.element.order_id ? "darkgreen" : "white"};
color: ${(props) => props.selectedOrderId === props.element.order_id ? "white" : "black"};
&:hover{
background-color: green;
color: white;
cursor: pointer;
}
`;
export const Td = styled.td`
text-align: left;
padding-left: 10px;
line-height: 30px;
font-size: 12px;

`;
export const Th = styled.th`
padding-left: 10px;
text-align: left;
line-height: 25px;
`;