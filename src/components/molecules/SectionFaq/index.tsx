import Container from '@Components/atoms/Container'
import { ItemFaq } from '@Components/atoms/ItemFaq'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'
import { useCallback, useState } from 'react'

import * as S from './styles'
const dataList = [
  {
    id: '0',
    title: 'Qual é a forma de pagamento ?',
    description:
      'Quis quis eu aliqua aute laboris velit laboris nulla elit aliqua. Ad officia anim quis velit ad laboris Lorem. Dolore proident mollit minim irure pariatur aliqua fugiat laborum. Nulla labore anim qui irure.',
    expanded: false
  },
  {
    id: '1',
    title: 'Quanto tempo fico no Close friends ?',
    description:
      'Ut pariatur et anim amet duis mollit ipsum ex eiusmod fugiat labore. Aliqua elit pariatur duis excepteur reprehenderit in do. Eu eiusmod elit officia commodo aliqua commodo laborum veniam consectetur pariatur Lorem magna non enim. Ex elit enim enim fugiat pariatur mollit in dolor.',
    expanded: false
  },
  {
    id: '2',
    title: 'Como funciona as reuniões online ?',
    description:
      'Id elit aliqua sit reprehenderit fugiat non minim in nostrud sunt culpa nulla voluptate elit. Dolor nisi do ad fugiat fugiat. Commodo labore ex dolor tempor laborum excepteur id pariatur do cupidatat sint non. Incididunt magna cupidatat eiusmod aliquip esse excepteur consectetur.',
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
