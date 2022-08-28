import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`

    * {
    }
    html {
        
    }
    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        background: #F4F8F6;
    }
    h1, h2, h3, h4, h5, h6, span {
        font-family: 'Poppins', sans-serif;
        color: #000;
    }
    h1 {
        font-size: 2rem;
        font-weight: 700 !important;
    }
    h6{
        font-size: 1.2rem;
        font-weight: 500;
    }
    time {
        font-size: 1rem;
        font-weight: 300;
    }
    .relative {
        position: relative !important;
    }
    .text-center {
        text-align: center !important;
    }
    .my-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }
    .my-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }
    ${variables}
`

export default GlobalStyle