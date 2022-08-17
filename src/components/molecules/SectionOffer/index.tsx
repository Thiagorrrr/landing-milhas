import * as S from './styles'
import { Card } from '@Components/molecules/Card'
import { TitleAndSub } from '@Components/atoms/TitleAndSub'
export const SectionOffer = () => (
  <S.Wrapper id="card">
    <TitleAndSub
      title={'PROMOÇÃO'}
      sizeTitle="large"
      sizeSub="medium"
      subTitle={
        <>
          Adesão ao grupo VIP
          <S.Box>
            <S.Img src="img/vips.png" />
          </S.Box>
        </>
      }
      colorTitle="red"
      colorSub="black"
    />
    <Card
      price={'20,00'}
      oldPrice={'39,00'}
      offer={50}
      btnTitle={'Quero aprender'}
      dataList={[
        'Acesso ao Close Friends',
        'Reuniões online semanais',
        'EBook completo sobre milhas aéreas',
        'Planilha para controle de milhas',
        'Acesso a consultores de cartões e gerentes de bancos'
      ]}
    />
  </S.Wrapper>
)
