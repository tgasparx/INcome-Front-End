import styled from 'styled-components'


interface ITrProps{
    element: any
    selectedOrderId: any
};
export const ActionTableButton = styled.a`
background-color: blue;

`;
export const NoActionTr = styled.tr`
color: white;
background-color: red;
line-height: 30px;
`;
export const Tr = styled.tr<ITrProps>`
background-color: ${(props) => props.element.order_id === props.selectedOrderId ? "darkred" : "white"};
color: ${(props) => props.element.order_id === props.selectedOrderId ? "white" : "black"};
&:hover{
background-color: red;
color: white;
cursor: pointer;
};
`;
export const Td = styled.td`
text-align: left;
padding-left: 10px;
line-height: 30px;

`;
export const Th = styled.th`
padding-left: 10px;
text-align: left;
line-height: 25px;
`;