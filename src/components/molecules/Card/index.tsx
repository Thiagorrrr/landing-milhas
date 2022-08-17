import * as S from './styles'

import { Button } from '@Components/atoms/Button'

type Props = {
  price?: string
  oldPrice?: string
  offer?: number
  btnTitle: string
  dataList: string[]
  link: string
}
export const Card = ({
  link,
  price,
  oldPrice,
  offer,
  btnTitle,
  dataList
}: Props) => (
  <S.Wrapper>
    {offer && (
      <>
        <S.Box>
          <S.Img src="img/vips.png" />
        </S.Box>
        <S.Offer>{`-${offer}%`}</S.Offer>
      </>
    )}

    <S.List>
      {dataList.map((item: string) => (
        <S.Item key={item}>
          <S.Dot>
            <img src="img/dot.svg" />
          </S.Dot>
          {item}
        </S.Item>
      ))}
    </S.List>
    {price && (
      <S.Prices>
        {oldPrice && (
          <S.BoxOld>
            De <S.OldPrice>{`R$${oldPrice}`}</S.OldPrice> por apenas:
          </S.BoxOld>
        )}

        <S.BoxPrice>
          <S.Price>{`R$${price} `}</S.Price>
          por mês
        </S.BoxPrice>
      </S.Prices>
    )}

    <Button target="_self" href={link} onClick={() => null}>
      {btnTitle}
    </Button>
  </S.Wrapper>
)
