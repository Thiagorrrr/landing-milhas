import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    width: 100%;
    padding-top: ${theme.spacings.medium};
  `}
`
export const Box = styled.div``
export const Img = styled.img`
  width: 50px;
  position: absolute;
  height: 50px;
  top: 125px;
  right: 20px;
  z-index: 2;
`
