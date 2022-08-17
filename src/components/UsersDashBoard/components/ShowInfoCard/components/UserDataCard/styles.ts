import styled from "styled-components";



export const Container = styled.div`
padding: 10px 0px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
height: 100%;
/* background-color: black; */
border-radius: 10px;


`;
export const ShowData = styled.div`

padding: 0 10px;
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
height: 40px;
background-color: lightblue;
border-radius: 5px;


span{
    width: 50%;
}
span:last-child{
    font-size: 12px;
}



`;