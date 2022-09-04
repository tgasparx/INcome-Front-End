import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 600px;
background-color: white;
border-radius: 8px;
box-shadow: 0.2px 1px 4px;

`;
export const NavContent = styled.nav`
display: flex;
flex-direction: column;
//background-color: yellow;
margin-bottom: 20px;
@media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
`;
export const OptContent = styled.div`
width: 100%;
min-height: 400px;
//background-color: gray;
`;