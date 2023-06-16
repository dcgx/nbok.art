import { css } from 'styled-components'

const button = css`
  background-color: transparent;
`

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  button
}

export default mixins