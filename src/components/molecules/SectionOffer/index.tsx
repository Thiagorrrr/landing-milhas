import * as S from './styles'
import { Card } from '@Components/molecules/Card'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'
import Slider from 'react-slick'

const dataList = [
  {
    id: 0,
    price: '20,00',
    oldPrice: '39,00',
    offer: 50,
    btnTitle: 'Quero aprender',
    dataList: [
      'Acesso ao Close Friends',
      'Reuniões online semanais',
      'EBook completo sobre milhas aéreas',
      'Planilha para controle de milhas',
      'Acesso a consultores de cartões e gerentes de bancos'
    ],
    link: 'https://app.hub.la/checkout/glnqbDcYaUqVQC9MQVZM'
  },
  {
    id: 1,
    price: '0',
    btnTitle: 'Quero participar',
    dataList: ['Grupo gratuito de promoções'],
    link: 'https://chat.whatsapp.com/J0IePVhCfSvCTGIFkAVh6o'
  }
]

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '0px'
}
export const SectionOffer = () => (
  <S.Wrapper id="oferta">
    <TitleAndSub
      title={'PROMOÇÃO'}
      sizeTitle="large"
      sizeSub="medium"
      subTitle={'Adesão ao grupo VIP'}
      colorTitle="red"
      colorSub="black"
    />
    <Slider {...settings}>
      {dataList.map((item) => (
        <Card
          key={item.id}
          price={item.price}
          oldPrice={item.oldPrice}
          offer={item.offer}
          btnTitle={item.btnTitle}
          dataList={item.dataList}
          link={item.link}
        />
      ))}
    </Slider>
  </S.Wrapper>
)
