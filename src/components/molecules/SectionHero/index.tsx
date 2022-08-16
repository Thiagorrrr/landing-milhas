import { Container } from '@Components/atoms/Container/styles'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'
import * as S from './styles'

type Props = {
  image: string
}
export const SectionHero = ({ image }: Props) => (
  <S.Wrapper image={image}>
    <Container>
      <TitleAndSub
        colorTitle="primary"
        colorSub="primary"
        title={
          <>
            Aprenda como <span className="yellow">VIAJAR</span>
            <br></br>
            <span> e ter </span>
            <span className="yellow">
              RENDA EXTRA <br></br>
            </span>
            usando as suas milhas
          </>
        }
        subTitle="Um guia passo a passo para você entender de uma vez por todas como 
      tirar vantagem dos seus gastos."
      />
      <S.Link>
        <a href="#">
          <img src="img/arrowDown.svg" />
        </a>
      </S.Link>
    </Container>
  </S.Wrapper>
)
