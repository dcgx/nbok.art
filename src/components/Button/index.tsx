import { ScriptProps } from 'next/script'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: 1px solid red;
`

const Button = ({ children }: ScriptProps) => {
    return <StyledButton>{children}</StyledButton>
}

export default Button