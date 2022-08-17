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
        sizeTitle="large"
        title={
          <>
            Aprenda como <span className="yellow">VIAJAR</span>
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
        <a href="#card">
          <S.Svg viewBox="0 0 45 45" fill="none">
            <path d="M22.5 4.5C32.4225 4.5 40.5 12.5775 40.5 22.5C40.5 32.4225 32.4225 40.5 22.5 40.5C12.5775 40.5 4.5 32.4225 4.5 22.5C4.5 12.5775 12.5775 4.5 22.5 4.5ZM22.5 0C10.08 0 0 10.08 0 22.5C0 34.92 10.08 45 22.5 45C34.92 45 45 34.92 45 22.5C45 10.08 34.92 0 22.5 0ZM24.75 22.5V13.5H20.25V22.5H13.5L22.5 31.5L31.5 22.5H24.75Z" />
          </S.Svg>
        </a>
      </S.Link>
    </Container>
  </S.Wrapper>
)
