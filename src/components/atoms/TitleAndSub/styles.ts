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
  colorTitle?: 'primary' | 'secondary' | 'red' | 'black' | 'yellow' | 'blue'
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
  colorSub?: 'primary' | 'secondary' | 'black' | 'gray'
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
    `,
    black: css`
      color: ${theme.colors.black};
    `,
    yellow: css`
      color: ${theme.colors.secondary};
    `,
    blue: css`
      color: ${theme.colors.primary};
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
    `,
    gray: css`
      color: ${theme.colors.gray};
    `
  }[colorSub]
}

export const Wrapper = styled.div`
  text-align: center;
`
export const StyledTitle = styled.h2<PropsTitle>`
  ${({ theme, colorTitle, sizeTitle }) => css`
    font-weight: bold;
    text-align: center;
    ${!!colorTitle && ColorVariations(colorTitle)}
    ${!!sizeTitle && SizeTile(sizeTitle)}
    .yellow {
      color: ${theme.colors.secondary};
    }
    .red {
      color: ${theme.colors.red};
    }
  `};
`

export const StyledSub = styled.div<PropsSub>`
  ${({ theme, colorSub, sizeSub }) => css`
    text-align: center;
    padding: ${theme.spacings.small} 0 ${theme.spacings.small} 0;
    ${!!colorSub && ColorVariationsSub(colorSub)}
    ${!!sizeSub && SizeSub(sizeSub)}
    .gap {
      padding-bottom: ${theme.spacings.large};
      text-align: initial;
    }
  `};
`
