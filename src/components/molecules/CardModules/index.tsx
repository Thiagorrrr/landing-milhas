import * as S from './styles'

type Props = {
  title: string
  list: string[]
}
export const CardModules = ({ title, list }: Props) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.List>
      {list.map((item: string) => (
        <S.Item key={item}>
          <S.Dot>
            <img src="img/dot.svg" />
          </S.Dot>
          {item}
        </S.Item>
      ))}
    </S.List>
  </S.Wrapper>
)
