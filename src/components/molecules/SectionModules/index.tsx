import { CardModules } from '@Components/molecules/CardModules'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'
import Slider from 'react-slick'

import * as S from './styles'
import { Button } from '@Components/atoms/Button'

type Props = {
  image: string
}
const dataList = [
  {
    title: 'Pontos e Milhas',
    list: ['Diferença de pontos e milhas', 'Primeiros passos nesse mercado']
  },
  {
    title: 'Como funciona o mercado de milhas',
    list: ['Lei da oferta e procura', 'Compra e venda']
  },
  {
    title: 'Programas de fidelidade',
    list: ['Programas dos bancos', 'Programas das Companhias']
  },
  {
    title: 'Como acumular milhas',
    list: ['Estratégia para gerar milhas', 'Acumulo passivo e ativo']
  }
]
const settings = {
  className: 'center',
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1.8,
  centerMode: true,
  centerPadding: '0px'
}
export const SectionModules = ({ image }: Props) => (
  <S.Wrapper id="modulos" image={image}>
    <S.Content>
      <TitleAndSub
        title="Módulos do Ebook"
        sizeTitle="large"
        sizeSub="small"
        subTitle="Dá uma olhada em tudo que vamos abordar"
        colorTitle="yellow"
        colorSub="primary"
      />
    </S.Content>
    <S.Box>
      <Slider {...settings}>
        {dataList.map((item) => (
          <CardModules key={item.title} title={item.title} list={item.list} />
        ))}
      </Slider>
    </S.Box>
    <S.Content>
      <Button
        target="_self"
        contact={true}
        href="https://app.hub.la/checkout/glnqbDcYaUqVQC9MQVZM"
        onClick={() => null}
      >
        Quero lucrar com milhas
      </Button>
    </S.Content>
  </S.Wrapper>
)
