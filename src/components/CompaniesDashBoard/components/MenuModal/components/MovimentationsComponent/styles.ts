import styled from 'styled-components'


export const Container = styled.div`
display: grid;
grid-template-columns: 30% 70%;
grid-template-rows: 100%;
width: 100%;
min-height: 400px;
background-color: lightgray;
border-radius: 8px;
box-shadow: 0.2px 1px 4px;

`;
export const NavContent = styled.nav`
display: flex;
flex-direction: column;
//background-color: yellow;
`;
export const OptContent = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
//background-color: gray;
`;

