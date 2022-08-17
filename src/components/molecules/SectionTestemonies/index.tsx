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
    score: 5
  },
  {
    id: 1,
    description:
      'O Ebook abriu minha mente, graças a Deus não deixo mais dinheiro na mesa.',
    name: 'Karen Fernandes',
    ocupation: 'mentorada',
    src: 'img/users/user2.jpeg',
    score: 5
  },
  {
    id: 2,
    description:
      'Didática simples, tenho aprendido muito e a melhor parte pra mim são as reuniões semanais.',
    name: 'Marcus Pires',
    ocupation: 'mentorado',
    src: 'img/users/user3.jpeg',
    score: 5
  }
]

export const SectionTestemonies = () => (
  <S.Wrapper>
    <S.Box>
      <TitleAndSub
        title={'Testemunhas'}
        sizeTitle="large"
        sizeSub="small"
        subTitle={'Pessoas que aprovaram o grupo VIP:'}
        colorTitle="blue"
        colorSub="black"
      />
    </S.Box>
    {dataList.map((item) => (
      <CardUser key={item.id} {...item} />
    ))}
  </S.Wrapper>
)
