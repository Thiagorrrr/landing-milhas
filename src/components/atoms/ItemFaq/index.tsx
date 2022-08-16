import React from 'react'
import * as S from './styles'
type Props = {
  title: string
  description: string
  item: number
  expand: boolean
  closeAll: (valor: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

export const ItemFaq = ({
  title,
  description,
  item,
  closeAll,
  expand
}: Props) => {
  const Send = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    event.preventDefault()
    console.log('chamou?')

    closeAll(event)
  }
  return (
    <S.Wrapper open={expand} data-index={item} onClick={Send}>
      <S.Box open={expand}>
        <S.Title open={expand}>{title}</S.Title>
        <S.BoxSvg>
          <S.Image
            open={expand}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 13L6 9H14L10 13Z" />
          </S.Image>
        </S.BoxSvg>
      </S.Box>
      <S.Body open={expand}>
        <span>{description}</span>
      </S.Body>
    </S.Wrapper>
  )
}
