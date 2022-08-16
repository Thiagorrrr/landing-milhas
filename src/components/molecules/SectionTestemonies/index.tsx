import * as S from './styles'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'
import { CardUser } from '@Components/atoms/CardUser'

const dataList = [
  {
    id: 0,
    description:
      'Fábio me ajudou a entender melhor o mundo das milhas de uma forma bem simples e eficaz, o grupo VIP já se paga ! ',
    name: 'Bruno Xavier',
    ocupation: 'mentorado',
    src: 'img/users/user1.jpeg',
    score: 3
  },
  {
    id: 1,
    description:
      'Fábio me ajudou a entender melhor o mundo das milhas de uma forma bem simples e eficaz, o grupo VIP já se paga ! ',
    name: 'Bruno Xavier',
    ocupation: 'mentorado',
    src: 'img/logo.png',
    score: 5
  }
]

export const SectionTestemonies = () => (
  <S.Wrapper>
    <TitleAndSub
      title={'Testemunhas'}
      sizeTitle="large"
      sizeSub="small"
      subTitle={'Pessoas que aprovaram o grupo VIP:'}
      colorTitle="blue"
      colorSub="black"
    />
    {dataList.map((item) => (
      <CardUser key={item.id} {...item} />
    ))}
  </S.Wrapper>
)
