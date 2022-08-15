import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`

    * {
    }
    html {
        
    }
    body {
        font-family: 'Noto Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, span {
        font-family: 'Noto Sans', sans-serif;
        color: #55536f;
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
    ${variables}
`

export default GlobalStyle