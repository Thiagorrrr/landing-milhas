import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  position: relative;
`
export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.third};
    color: #fff;
    width: 100%;
    height: ${theme.grid.header};
    padding: ${theme.spacings.small};

    &:after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.third};
      z-index: 15;
    }
  `}
`
