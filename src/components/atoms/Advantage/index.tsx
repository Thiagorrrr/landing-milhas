import * as S from './styles'
type Props = {
  img: string
  title: string
  description: React.ReactNode
}

export const Advantage = ({ img, title, description }: Props) => (
  <S.Wrapper>
    <S.Image src={img} />
    <S.BoxText>
      <S.Title>{title} </S.Title>
      <S.Description>{description}</S.Description>
    </S.BoxText>
  </S.Wrapper>
)
