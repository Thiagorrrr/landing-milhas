import styled from 'styled-components'
import media from 'styled-media-query'

export const LogoWrapper = styled.img`
  width: 11.8rem;

  ${media.greaterThan('medium')`
    width: 38rem;
  `}
`
