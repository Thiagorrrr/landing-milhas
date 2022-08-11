import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    color: #fff;
    width: 100%;
    height: 50px;
    padding: ${theme.spacings.small};
  `}
`
