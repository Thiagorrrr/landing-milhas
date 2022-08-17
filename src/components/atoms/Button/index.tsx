import React from 'react'

import * as S from './styles'

type Props = {
  target: string
  children: React.ReactNode
  href: string
  onClick: () => void
  contact?: boolean
}

export const Button: React.FC<Props> = ({
  children,
  target,
  contact = false,
  href,
  onClick
}) => (
  <S.ButtonWrapper
    target={target}
    contact={contact}
    href={href}
    onClick={onClick}
  >
    {children}
  </S.ButtonWrapper>
)
