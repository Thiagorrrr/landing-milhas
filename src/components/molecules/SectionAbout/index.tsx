import { Button } from '@Components/atoms/Button'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'
import * as S from './styles'

type Props = {
  image: string
}
export const SectionAbout = ({ image }: Props) => (
  <S.Wrapper image={image}>
    <S.Box>
      <S.Image src="img/users/me.jpg" />
    </S.Box>
    <TitleAndSub
      colorTitle="yellow"
      colorSub="primary"
      title="Sobre mim"
      sizeTitle="large"
      subTitle={
        <>
          <div className="gap">
            Meu nome é Fábio Glaucio, nasci em Duque de Caxias - RJ sou
            funcionário público e sempre tive o desejo de conseguir viajar de
            avião, porém achava os preços exorbitantes até conhecer as milhas
            aéreas.
          </div>
          <div className="gap">
            Iniciei no mercado de milhas aéreas em 2021 através de um amigo que
            estava acumulando milhas para viajar e então mergulhei nesse assunto
            fazendo cursos e me aprofundando no assunto.
          </div>
          <div className="gap">
            Logo, criei um interesse muito grande em ajudar pessoas a ter uma
            qualidade de vida melhor conquistando uma renda extra e a viajar
            barato.
          </div>
        </>
      }
    />
    <Button
      target="_blank"
      href="https://wa.me/5521983427854"
      contact={true}
      onClick={() => null}
    >
      Contato
      <S.Logo src="img/icons/whats.svg" />
    </Button>
  </S.Wrapper>
)
