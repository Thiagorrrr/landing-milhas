import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 100%;
    padding: ${theme.spacings.medium} 0;
    .slick-dots {
      bottom: -30px;
      li button:before {
        font-size: ${theme.font.sizes.xsmall};
      }
      li.slick-active button:before {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.secondary};
      }
    }
  `}
`
