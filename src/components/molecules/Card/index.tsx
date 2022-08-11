import * as S from './styles'

import { Button } from '@Components/atoms/Button'

type Props = {
  price: string
  oldPrice: string
  offer: number
  btnTitle: string
  dataList: string[]
}
export const Card = ({
  price,
  oldPrice,
  offer = 30,
  btnTitle = 'Quero aprender',
  dataList
}: Props) => (
  <S.Wrapper>
    <S.Offer>{`-${offer}%`}</S.Offer>
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
    <S.Prices>
      <S.BoxOld>
        De <S.OldPrice>{`R$${oldPrice}`}</S.OldPrice> por apenas:
      </S.BoxOld>
      <S.BoxPrice>
        <S.Price>{`R$${price} `}</S.Price>
        por mês
      </S.BoxPrice>
    </S.Prices>
    <Button href="#" onClick={() => null}>
      {btnTitle}
    </Button>
  </S.Wrapper>
)
