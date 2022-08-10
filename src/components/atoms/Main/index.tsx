import * as S from './styles'

export const Main = ({
  title = 'Sua loja Pet',
  description = 'Sua nova loja pet'
}) => (
  <S.Wrapper>
    <S.Logo src="img/logo.svg" alt="Imagem de uma logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description} </S.Description>
    <S.Logo src="img/hero-illustration.svg" alt="Imagem de uma ilustração" />
  </S.Wrapper>
)
