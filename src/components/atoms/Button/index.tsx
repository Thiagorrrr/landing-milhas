import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  href: string
  onClick: () => void
  contact?: boolean
}

export const Button: React.FC<Props> = ({
  children,
  contact = false,
  href,
  onClick
}) => (
  <S.ButtonWrapper contact={contact} href={href} onClick={onClick}>
    {children}
  </S.ButtonWrapper>
)
