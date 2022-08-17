import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 95%;
    max-width: 350px;
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
  align-items: center;
`
export const BoxName = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.xsmall};
  `}
`
export const Name = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-transform: capitalize;
    font-weight: bold;
    color: ${theme.colors.black};
  `}
`
export const Ocupation = styled.span`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.2rem;
    color: ${theme.colors.gray2};
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

export const BoxStar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Star = styled.img`
  ${({ theme }) => css`
    width: 25px;
    height: 25px;
    padding-left: ${theme.spacings.xxsmall};
  `}
`
