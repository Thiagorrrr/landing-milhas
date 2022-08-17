import Container from '@Components/atoms/Container'
import { ItemFaq } from '@Components/atoms/ItemFaq'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'
import { useCallback, useState } from 'react'

import * as S from './styles'
const dataList = [
  {
    id: '0',
    title: 'Qual é a forma de pagamento ?',
    description: 'Pix, cartão de crédito ou Boleto',
    expanded: false
  },
  {
    id: '1',
    title: 'Para quem é o Ebook?',
    description:
      'Iniciantes e intermediários no conhecimento em milhas aéreas ',
    expanded: false
  },
  {
    id: '2',
    title: 'Como vou receber o Ebook?',
    description: 'Assim que fizer o pagamento do grupo VIP terá o acesso.',
    expanded: false
  },
  {
    id: '3',
    title: 'Se eu não gostar, posso sair do grupo?',
    description:
      'Sim, você pode efetuar o pagamento mensal que é de R$20 e não renovar no próximo mês, mas duvido muito que irá querer sair !',
    expanded: false
  },
  {
    id: '4',
    title: 'Como funciona as reuniões semanais ?',
    description:
      'É on-line diretamente comigo e os demais participantes do grupo, o qual batemos a apostila, promoções que teve ao longo da semana e retirada de dúvidas.',
    expanded: false
  }
]

export const SectionFaq = () => {
  const [reload, setReload] = useState(false)

  const CloseAll = (valor: React.MouseEvent) => {
    valor.preventDefault()
    const appMode = (valor.target as HTMLButtonElement).getAttribute(
      'data-index'
    )
    dataList.map((item) => {
      if (item.id != appMode) {
        ;[...dataList, (item.expanded = false)]
      } else if (item.id === appMode) {
        ;[...dataList, (item.expanded = item.expanded ? false : true)]
      } else {
        ;[...dataList, (item.expanded = item.expanded = true)]
      }
    })
    setReload(!reload)
  }

  useCallback(() => {
    setReload(false)
  }, [])
  return (
    <S.Wrapper>
      <Container>
        <TitleAndSub
          colorTitle="black"
          title="Perguntas Frequentes"
          sizeTitle="medium"
        />
        <S.Accordion>
          {dataList.map((item, index) => (
            <ItemFaq
              closeAll={CloseAll}
              key={index}
              expand={item.expanded}
              item={index}
              {...item}
            />
          ))}
        </S.Accordion>
      </Container>
    </S.Wrapper>
  )
}
