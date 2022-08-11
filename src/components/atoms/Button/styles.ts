import styled, { css, DefaultTheme } from 'styled-components'

type Props = {
  contact: boolean
}

const buttonModifiers = {
  contact: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.secondary};
  `
}
export const ButtonWrapper = styled.a<Props>`
  ${({ theme, contact }) => css`
    background: transparent;
    padding: 1rem;
    border: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    font-weight: bold;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${theme.colors.primaryHover};
    }
    ${contact && buttonModifiers.contact(theme)};
  `}
`
