import styled, { css } from 'styled-components'
import theme from 'styles/theme'

type PropsTitle = {
  sizeTitle?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
  colorTitle: 'primary' | 'secondary ' | 'red'
}
type PropsSub = {
  sizeSub?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
  colorSub: 'primary' | 'secondary' | 'black'
}

const SizeTile = (sizeTitle: string) => {
  return {
    xxsmall: css`
      font-size: ${theme.font.sizes.xxsmall};
    `,
    xsmall: css`
      font-size: ${theme.font.sizes.xsmall};
    `,
    small: css`
      font-size: ${theme.font.sizes.small};
    `,
    medium: css`
      font-size: ${theme.font.sizes.medium};
    `,
    large: css`
      font-size: ${theme.font.sizes.large};
    `,
    xlarge: css`
      font-size: ${theme.font.sizes.xlarge};
    `,
    xxlarge: css`
      font-size: ${theme.font.sizes.xxlarge};
    `
  }[sizeTitle]
}

const SizeSub = (sizeSub: string) => {
  return {
    xxsmall: css`
      font-size: ${theme.font.sizes.xxsmall};
    `,
    xsmall: css`
      font-size: ${theme.font.sizes.xsmall};
    `,
    small: css`
      font-size: ${theme.font.sizes.small};
    `,
    medium: css`
      font-size: ${theme.font.sizes.medium};
    `,
    large: css`
      font-size: ${theme.font.sizes.large};
    `,
    xlarge: css`
      font-size: ${theme.font.sizes.xlarge};
    `,
    xxlarge: css`
      font-size: ${theme.font.sizes.xxlarge};
    `
  }[sizeSub]
}

const ColorVariations = (colorTitle: string) => {
  return {
    primary: css`
      color: ${theme.colors.white};
    `,
    secondary: css`
      color: ${theme.colors.gray};
    `,
    red: css`
      color: ${theme.colors.red};
    `
  }[colorTitle]
}
const ColorVariationsSub = (colorSub: string) => {
  return {
    primary: css`
      color: ${theme.colors.white};
    `,
    secondary: css`
      color: ${theme.colors.gray};
    `,
    black: css`
      color: ${theme.colors.black};
    `
  }[colorSub]
}

export const Wrapper = styled.div`
  font-weight: bold;
  text-align: center;
`
export const StyledTitle = styled.h2<PropsTitle>`
  ${({ colorTitle, sizeTitle }) => css`
    ${!!colorTitle && ColorVariations(colorTitle)}
    ${!!sizeTitle && SizeTile(sizeTitle)}
  `};
`

export const StyledSub = styled.p<PropsSub>`
  ${({ theme, colorSub, sizeSub }) => css`
    padding: ${theme.spacings.small} 0 ${theme.spacings.small} 0;
    ${!!colorSub && ColorVariationsSub(colorSub)}
    ${!!sizeSub && SizeSub(sizeSub)}
  `};
`
