import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.third};
  `}
`

export const Whats = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.third};
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.large} calc(${theme.grid.gutter} / 2);
    margin: 0 auto;
    &::after {
      display: block;
      content: '';
      width: calc(100% + 40px);
      height: 2px;
      position: absolute;
      bottom: 0;
      background-color: ${theme.colors.line};
    }
  `}
`
export const WhatsTitle = styled.span`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.spacings.small};
    margin-right: ${theme.spacings.xsmall};
    .yellow {
      color: ${theme.colors.secondary};
    }
  `}
`

export const Archive = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.third};
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.large} calc(${theme.grid.gutter} / 2);
    &::after {
      display: block;
      content: '';
      width: calc(100% + 40px);
      height: 2px;
      position: absolute;
      bottom: 0;
      background-color: ${theme.colors.line};
    }
  `}
`
export const List = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};
  `}
`
export const ListContact = styled.div`
  text-align: center;
`
export const Item = styled.div`
  list-style: none;
  font-weight: bold;
`
export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`
export const Svg = styled.svg`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    margin-left: ${theme.spacings.xsmall};
    path {
      fill: ${theme.colors.white};
    }
  `}
`

export const Copy = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.fourth};
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.large} calc(${theme.grid.gutter} / 2);
  `}
`
export const CopyTitle = styled.div`
  ${({ theme }) => css`
    font-weight: bold;
    margin-top: ${theme.spacings.medium};
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    margin: 0 0 -${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`
