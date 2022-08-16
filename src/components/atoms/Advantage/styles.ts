import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-bottom: ${theme.spacings.large};
  `}
`
export const Image = styled.img`
  width: 20px;
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
  `}
`
export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    padding-bottom: ${theme.spacings.small};
  `}
`
export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  .black {
    font-weight: bold;
  }
`
