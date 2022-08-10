import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
:root{
    --white: #FFFFFF;
    --color-Blue-100: #c7ecf5;
    --color-Blue-200: #3e7cb3;
    --color-Blue-300: #215c90
    --color-blue-500: #4d717a;
    --color-Blue-700: #0b2e4e;

    --color-Gray-100: #c5c5c5;
    --color-Gray-300: #969696;
    --color-Gray-500: #6a6a6a;

    --color-Green-400: #1abd00;
    --color-Red-400: #bd0900;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Poppins',sans-serif ;
    -webkit-font-smoothing: antialiased;
}
a, button{
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
}
input{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}
h1, h2, h3, h4, h5, strong{
    font-weight: 500;
}
`;