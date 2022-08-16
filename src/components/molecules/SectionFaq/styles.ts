import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `}
`
export const Accordion = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `}
`
