import styled, { css } from 'styled-components'

type Props = {
  active: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    z-index: 16;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.third};
    z-index: 20;
  `}
`
export const Container = styled.div`
  position: relative;
  width: 40px;
`
export const Btn = styled.div<Props>`
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      .item0 {
        transition: ease-in-out all 200ms;
        transform: rotate(-45deg);
        top: 5px;
      }
      .item1 {
        display: none;
      }
      .item2 {
        transition: ease-in-out all 200ms;
        transform: rotate(45deg);
        top: -5px;
      }
      div#__next {
        overflow: hidden;
      }
    `}
`
export const Line = styled.span`
  display: block;
  content: '';
  width: 40px;
  height: 5px;
  position: relative;
  margin-top: 5px;
  transition: ease-in-out all 200ms;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `}
`
