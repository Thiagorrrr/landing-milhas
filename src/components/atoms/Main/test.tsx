import { screen, render } from '@testing-library/react'

import { Main } from './index'

describe('Main test', () => {
  it('should render the heading test', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Sua loja Pet/i })
    ).toBeInTheDocument()
  })
  it('should render snapshot', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render style color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
