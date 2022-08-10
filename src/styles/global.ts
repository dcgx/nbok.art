import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap');

    * {
    }
    html {
        
    }
    body {
        font-family: 'Comic Neue', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, span {
        font-family: 'Comic Neue', sans-serif;
        color: #fff
    }
    h1 {
        font-size: 2rem;
        font-weight: 600;
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