import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  subTitle?: string
  colorTitle: 'primary' | 'secondary'
  colorSub: 'primary' | 'secondary'
}

export const TitleAndSub: React.FC<Props> = ({
  title,
  subTitle,
  colorTitle,
  colorSub
}) => (
  <S.Wrapper>
    {title ? (
      <S.StyledTitle colorTitle={colorTitle}>{title}</S.StyledTitle>
    ) : null}
    {subTitle ? (
      <S.StyledSub colorSub={colorSub}>{subTitle}</S.StyledSub>
    ) : null}
  </S.Wrapper>
)
