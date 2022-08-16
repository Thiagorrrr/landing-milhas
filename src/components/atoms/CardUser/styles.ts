import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;
    max-width: 320px;
    display: inline-block;
    border-radius: 20px;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};
  `}
`
export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.spacings.small};
  `}
`
export const BoxTextImg = styled.div`
  display: flex;
`
export const BoxName = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.small};
  `}
`
export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
export const Ocupation = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
