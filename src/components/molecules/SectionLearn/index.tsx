import { Advantage } from '@Components/atoms/Advantage'
import { Container } from '@Components/atoms/Container/styles'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'

import * as S from './styles'
const test = [
  {
    img: 'img/icons/airplane.svg',
    title: 'Resgate e Renda Extra:',
    description: (
      <span>
        Como usar milhas para resgatar
        <span className="black"> passagens aereas</span>, descontos em
        <span className="black"> hospedagem</span> e como vender para obter
        <span className="black">renda extra !</span>
      </span>
    )
  },
  {
    img: 'img/icons/creditcard.svg',
    title: 'Milhas com cartão de crédito:',
    description:
      'Quais são os melhores cartões de credito para acumular milhas e como potencializar o seu acumulo todos os dias!'
  },
  {
    img: 'img/icons/buy.svg',
    title: 'Ganhar milhas com compras do dia a dia',
    description:
      ' Quais são os melhores cartões de credito para acumular milhas e como potencializar o seu acumulo todos os dias!'
  }
]
export const SectionLearn = () => (
  <S.Wrapper>
    <Container>
      <TitleAndSub
        title={
          <>
            Você gasta mais de <span className="red">RS 1.500</span> no cartão
            de crédito todo mês e não recebe nada em troca?
          </>
        }
        sizeTitle="medium"
        sizeSub="small"
        subTitle=" Nesse grupo você terá todas as estratégias para ter lucro com milhas aéreas com acesso a consultores e gerentes para o auxílio de um melhor
        cartão de crédito para conseguir milhas.
        Além disso somos uma equipe, o qual teremos networking, venda de
        passagens, reuniões online com retirada de dúvidas !"
        colorTitle="black"
        colorSub="gray"
      />
      <S.Title>O que você vai aprender:</S.Title>
      {test.map((item) => (
        <Advantage
          img={item.img}
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </Container>
  </S.Wrapper>
)
