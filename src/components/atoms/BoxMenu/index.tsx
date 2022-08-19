import * as S from './styles'
const dataList = [
  {
    id: '0',
    title: 'Home',
    link: '#home'
  },
  {
    id: '1',
    title: 'Oferta',
    link: '#oferta'
  },
  {
    id: '2',
    title: 'Vantagens',
    link: '#vantagens'
  },
  {
    id: '3',
    title: 'Modulos',
    link: '#modulos'
  },
  {
    id: '4',
    title: 'Testemunhas',
    link: '#testemunhas'
  },
  {
    id: '5',
    title: 'Sobre',
    link: '#sobre'
  },
  {
    id: '6',
    title: 'Faq',
    link: '#faq'
  },
  {
    id: '7',
    title: 'Contatos',
    link: '#rodape'
  }
]

type Props = {
  visible: boolean
  removeHidden: () => void
}
export const BoxMenu = ({ visible, removeHidden }: Props) => {
  return (
    <S.Wrapper>
      <S.Box active={visible}>
        <S.List>
          {dataList.map((item) => (
            <S.Item key={item.id}>
              <S.Link href={item.link} onClick={removeHidden}>
                {item.title}
              </S.Link>
            </S.Item>
          ))}
        </S.List>
      </S.Box>
    </S.Wrapper>
  )
}
