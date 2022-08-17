import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
height: 95%;
display: flex;
flex-direction: row;
padding-bottom: 5px;


`;

export const LeftContent = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
span{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 25px;
    margin-top: 3px;
    border-radius: 3px;
    background-color: white;
    padding-left: 5px;
}

`;
export const RightContent = styled.div`
color: blue;
width: 70%;
height: 100%;
display: flex;
flex-direction: column;
span{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 25px;
    margin-top: 3px;
    background-color: white;
    border-radius: 3px;
    padding-left: 5px;
}
`;