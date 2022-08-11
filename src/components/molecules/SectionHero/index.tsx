import { TitleAndSub } from '@Components/atoms/TitleAndSub'
import * as S from './styles'

type Props = {
  image: string
}
export const SectionHero = ({ image }: Props) => (
  <S.Wrapper image={image}>
    <TitleAndSub
      colorTitle="primary"
      colorSub="secondary"
      title="Aprenda como VIAJAR e ter RENDA EXTRA usando as suas milhas"
      subTitle="Um guia passo a passo para você entender de uma vez por todas como 
      tirar vantagem dos seus gastos."
    />
    <a href="#">
      <img src="img/arrowDown.svg" />
    </a>
  </S.Wrapper>
)
