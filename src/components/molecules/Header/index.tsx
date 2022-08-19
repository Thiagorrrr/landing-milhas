import * as S from './styles'
import { Logo } from '@Components/atoms/Logo'
import { Menu } from '@Components/molecules/Menu'
import { BoxMenu } from '@Components/atoms/BoxMenu'
import { MenuActivated } from 'hooks/shared'

export const Header = () => {
  const { visible, toggle, removeHidden } = MenuActivated()
  return (
    <S.Wrapper>
      <S.Box>
        <Logo />
        <Menu visible={visible} onClick={toggle} />
      </S.Box>
      <BoxMenu visible={visible} removeHidden={removeHidden} />
    </S.Wrapper>
  )
}
