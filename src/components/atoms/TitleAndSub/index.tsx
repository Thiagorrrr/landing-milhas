import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  sizeTitle?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
  subTitle?: string
  sizeSub?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
  colorTitle: 'primary' | 'secondary ' | 'red'
  colorSub: 'primary' | 'secondary' | 'black'
}

export const TitleAndSub: React.FC<Props> = ({
  title,
  sizeTitle = 'medium',
  subTitle,
  sizeSub = 'small',
  colorTitle,
  colorSub
}) => (
  <S.Wrapper>
    {title ? (
      <S.StyledTitle sizeTitle={sizeTitle} colorTitle={colorTitle}>
        {title}
      </S.StyledTitle>
    ) : null}
    {subTitle ? (
      <S.StyledSub sizeSub={sizeSub} colorSub={colorSub}>
        {subTitle}
      </S.StyledSub>
    ) : null}
  </S.Wrapper>
)
