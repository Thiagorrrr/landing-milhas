import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border: 4px solid ${theme.colors.black};
    margin: ${theme.spacings.xsmall};
    padding: ${theme.spacings.small};
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    padding-top: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.medium};
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
    font-weight: bold;
    padding-bottom: ${theme.spacings.small};
  `}
`
export const Dot = styled.span`
  ${({ theme }) => css`
    padding-right: ${theme.spacings.xsmall};
  `}
`
