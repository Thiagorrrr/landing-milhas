import styled, { css } from 'styled-components'
type Props = {
  open?: boolean
}
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    border: 2px solid ${theme.colors.primary};
    margin-bottom: ${theme.spacings.small};
    overflow: hidden;
  `}
`
export const Box = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: -1;
  ${({ theme, open }) =>
    open &&
    css`
      background-color: ${theme.colors.primary};
    `}
`
export const BoxSvg = styled.div<Props>`
  display: flex;
  width: 40px;
  justify-content: center;
`
export const Title = styled.h3<Props>`
  ${({ theme }) => css`
    width: 80%;
    padding: ${theme.spacings.small} 0 ${theme.spacings.small}
      ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
  `}
  ${({ theme, open }) =>
    open &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    `}
`
export const Body = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
  transition: ease-in-out all 200ms;
  overflow: hidden;

  z-index: -1;

  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  ${({ open }) =>
    open &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      transition: ease-in-out all 200ms;
      height: 140px;

      span {
        width: 95%;
        display: block;
      }
    `}
`
export const Image = styled.svg<Props>`
  transition: ease-in-out all 200ms;
  ${({ open }) =>
    open &&
    css`
      transition: ease-in-out all 200ms;
      transform: rotate(180deg);
    `}
  path {
    ${({ theme }) => css`
      fill: ${theme.colors.primary};
    `}
    ${({ theme, open }) =>
      open &&
      css`
        fill: ${theme.colors.white};
      `}
  }
`
