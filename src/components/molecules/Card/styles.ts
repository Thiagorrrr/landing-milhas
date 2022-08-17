import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${theme.colors.primary};
    border: 4px solid ${theme.colors.black};
    width: 80%;
    max-width: 320px;
    height: 100%;
    padding: 46px ${theme.spacings.small} ${theme.spacings.small}
      ${theme.spacings.small};
    margin: 30px auto 0;
  `}
`
export const Offer = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${theme.colors.black};
    max-width: 82px;
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall}
      ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
  `}
`
export const List = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    padding: ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall} 0;
  `}
`
export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-weight: bold;
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`
export const Dot = styled.span`
  ${({ theme }) => css`
    padding-right: ${theme.spacings.xsmall};
  `}
`
export const Prices = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${theme.spacings.xsmall};
    padding-bottom: ${theme.spacings.small};
  `}
`
export const BoxOld = styled.div`
  font-weight: bold;
  width: 50%;
`
export const BoxPrice = styled.div`
  font-weight: bold;
  text-align: right;
`
export const OldPrice = styled.span`
  text-decoration: line-through;
`
export const Price = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.secondary};
  `}
`
export const Box = styled.div``
export const Img = styled.img`
  width: 50px;
  position: absolute;
  height: 50px;
  top: -20px;
  right: -20px;
  z-index: 2;
`
