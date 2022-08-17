import { Button } from '@Components/atoms/Button'
import { Logo } from '@Components/atoms/Logo'
import * as S from './styles'
const dataArchive = [
  {
    id: 1,
    title: 'Regulamentação',
    link: 'https://app.hub.la/terms_of_use'
  }
]
export const Footer = () => (
  <S.Wrapper>
    <S.Whats>
      <S.WhatsTitle>
        Ainda possui dúvidas? Chame nosso time no
        <span className="yellow"> Whatsapp</span>
      </S.WhatsTitle>
      <Button
        target="_blank"
        href="https://wa.me/5521983427854"
        contact={true}
        onClick={() => null}
      >
        Contato
        <S.Logo src="img/icons/whats.svg" />
      </Button>
    </S.Whats>
    <S.Archive>
      <Logo />
      <S.List>
        {dataArchive.map((item) => (
          <S.Item key={item.id}>
            <S.Link href={item.link}>{item.title}</S.Link>
          </S.Item>
        ))}
      </S.List>
    </S.Archive>
    <S.Copy>
      <S.ListContact>
        <S.Item>
          <S.Link href="https://instagram.com/milhasnoalvo?igshid=YmMyMTA2M2Y=">
            Instagram
          </S.Link>
        </S.Item>
      </S.ListContact>
      <S.CopyTitle>Copyright©2022 Milhas no Alvo</S.CopyTitle>
    </S.Copy>
  </S.Wrapper>
)
