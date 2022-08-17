import styled, { css } from 'styled-components'
type Props = {
  image: string
}
export const Wrapper = styled.section<Props>`
  ${({ theme, image }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center
    background-color: ${theme.colors.primary};
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    padding:10px 0 10px 0;
  `}
`
export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
export const Svg = styled.svg`
  width: 40px;
  height: 40px;
  path {
    ${({ theme }) => css`
      fill: ${theme.colors.secondary};
    `}
  }
`
