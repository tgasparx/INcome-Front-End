import styled from 'styled-components'


export const Container = styled.div`
display: grid;
grid-template-columns: 30% 70%;
grid-template-rows: 100%;
width: 100%;
min-height: 370px;
background-color: lightgray;
border-radius: 8px;
box-shadow: 0.2px 1px 4px;
@media (max-width: 600px) {
    grid-template-columns: 1fr;
grid-template-rows: 50%;
}
`;
export const NavContent = styled.nav`
display: flex;
flex-direction: column;
background-color: yellow;
`;
export const OptContent = styled.div`
background-color: gray;
`;