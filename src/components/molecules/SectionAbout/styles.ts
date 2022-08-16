import styled, { css } from 'styled-components'
type Props = {
  image: string
}
export const Wrapper = styled.section<Props>`
  ${({ theme, image }) => css`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 320px;
    padding: 2.6rem calc(3.2rem / 2);

    background-color: ${theme.colors.primary};
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    margin: 220px auto 0;

    &:before {
      display: block;
      position: absolute;
      top: -220px;
      content: '';
      height: 220px;
      width: 100%;
      background-color: ${theme.colors.boxBg};
    }
  `}
`
export const Box = styled.div`
  display: block;
  content: '';
  height: 140px;
  width: 250px;
`
export const Image = styled.img`
  position: absolute;
  height: 320px;
  width: 250px;
  top: -190px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`
export const Logo = styled.img`
  ${({ theme }) => css`
    margin: 0 0 -${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`
