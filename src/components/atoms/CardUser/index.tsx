import React from 'react'

import * as S from './styles'

type Props = {
  description: string
  name: string
  ocupation: string
  score: number
  src: string
  children?: JSX.Element | JSX.Element[]
}

export const CardUser: React.FC<Props> = ({
  description,
  name,
  ocupation,
  src,
  score
}) => {
  const stars = 5
  return (
    <S.Wrapper>
      <S.Description>{description}</S.Description>

      <S.Box>
        <S.BoxTextImg>
          <S.Image src={src} />
          <S.BoxName>
            <S.Name>{name}</S.Name>
            <S.Ocupation>{ocupation}</S.Ocupation>
          </S.BoxName>
        </S.BoxTextImg>
        <S.BoxStar>
          {[...Array(stars)].map((item, index) => {
            return (
              <>
                {index < score ? (
                  <S.Star key={index} src="img/icons/starFull.svg" />
                ) : (
                  <S.Star key={index} src="img/icons/starLess.svg" />
                )}
              </>
            )
          })}
        </S.BoxStar>
      </S.Box>
    </S.Wrapper>
  )
}
