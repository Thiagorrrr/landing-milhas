import styled, { css } from 'styled-components'
import theme from 'styles/theme'

type PropsTitle = {
  colorTitle: 'primary' | 'secondary'
}
type PropsSub = {
  colorSub: 'primary' | 'secondary'
}

const ColorVariations = (colorTitle: string) => {
  return {
    primary: css`
      color: ${theme.colors.white};
    `,
    secondary: css`
      color: ${theme.colors.gray};
    `
  }[colorTitle]
}
const ColorVariations2 = (colorSub: string) => {
  return {
    primary: css`
      color: ${theme.colors.white};
    `,
    secondary: css`
      color: ${theme.colors.gray};
    `
  }[colorSub]
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: transparent;
    padding: 1rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: bold;
    text-align: center;
  `}
`
export const StyledTitle = styled.h2<PropsTitle>`
  ${({ colorTitle }) => css`
    font-size: ${theme.font.sizes.small};
    ${!!colorTitle && ColorVariations(colorTitle)}
  `};
`

export const StyledSub = styled.p<PropsSub>`
  padding: 16px 0 16px 0;
  ${({ colorSub }) => css`
    ${!!colorSub && ColorVariations2(colorSub)}
  `};
`
