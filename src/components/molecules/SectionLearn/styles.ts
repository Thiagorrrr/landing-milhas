import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    display: flex;
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.primary};
    padding-top: ${theme.spacings.xlarge};
    padding-bottom: ${theme.spacings.large};
  `}
`
