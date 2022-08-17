import styled, { css } from 'styled-components'
type Props = {
  image: string
}

export const Wrapper = styled.section<Props>`
  ${({ image, theme }) => css`
    display: flex;
    flex-direction: column;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: ${theme.spacings.xxlarge};
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: auto 20px;
    padding-top: ${theme.spacings.large};
  `}
`
export const Box = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.primary};
    padding-top: ${theme.spacings.xlarge};
    padding-bottom: ${theme.spacings.large};
  `}
`
