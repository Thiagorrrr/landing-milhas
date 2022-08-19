import * as S from './styles'
type Props = {
  onClick: () => void
  visible: boolean
}
export const Menu = ({ onClick, visible }: Props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Container>
        <S.Btn active={visible}>
          {[...Array(3)].map((item, index) => (
            <S.Line className={`item${index}`} key={index}></S.Line>
          ))}
        </S.Btn>
      </S.Container>
    </S.Wrapper>
  )
}
