import styled, { css } from 'styled-components'

type Props = {
  active: boolean
}
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
export const Box = styled.div`
  display: block;
  position: absolute;
  overflow: scroll;

  left: 0;
  width: 100%;

  transition: ease-in-out all 200ms;

  ${({ theme }) => css<Props>`
    transform: translateY(calc(-100% - ${theme.grid.header}));
    top: ${theme.grid.header};
    height: calc(100vh - ${theme.grid.header});
    background-color: ${theme.colors.third};
  `}

  ${({ active }) =>
    active &&
    css`
      transition: ease-in-out all 200ms;
      transform: translateY(0%);
    `}
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacings.large};
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    text-transform: capitalize;
    padding-bottom: ${theme.spacings.medium};
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.white};
  `}
`
