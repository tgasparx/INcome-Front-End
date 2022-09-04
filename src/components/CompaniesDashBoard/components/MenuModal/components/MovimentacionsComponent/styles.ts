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
export const ContainerNav = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
@media (max-width: 800px) {
    flex-direction: column;
}
`;
export const NavContent = styled.nav`
width: 100%;
display: grid;
//background-color: yellow;
margin-bottom: 20px;
grid-template-columns: 1fr 1fr;
`;
export const OptContent = styled.div`
width: 100%;
height: 400px;
//background-color: gray;
`;
export const OrdersNav = styled.div`
width: 100%;
`;
export const ExpensesNav = styled.div`
width: 100%;
`;