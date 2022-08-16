import styled from 'styled-components'


interface ITrProps{
    element: any
    selectedEmployeeId: any
}
export const ActionTableButton = styled.a`
background-color: blue;

`;
export const NoActionTr = styled.tr`

`;
export const Tr = styled.tr<ITrProps>`
background-color: ${(props) => props.selectedEmployeeId === props.element.id ? "darkblue" : "lightblue"};
color: ${(props) => props.selectedEmployeeId === props.element.id ? "white" : "black"};
&:hover{
background-color: blue;
color: white;
cursor: pointer;
}
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