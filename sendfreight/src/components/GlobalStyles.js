import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
  font-size: 11px;
  &::-webkit-scrollbar{
            width: .7rem;
        }
    &::-webkit-scrollbar-thumb{
            background-color: #0646A7;
        }
    &::-webkit-scrollbar-track {
    background: white;
        }
}
body{
    font-family: 'lato', sans-serif;
    
}
a{
  text-decoration: none;
  font-size: 1.1rem;
  color: black;
}
ul {
  list-style: none;
  width:100%;
}
  
`;

export default GlobalStyles;
