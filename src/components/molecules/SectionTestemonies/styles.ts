import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.boxBg};
    padding-top: ${theme.spacings.small};
  `}
`
export const Box = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
  `}
`
