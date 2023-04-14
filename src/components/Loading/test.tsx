import { Loading } from "."
import { render, screen } from '@testing-library/react'

it('Should render Loading component', () => {
    render(<Loading />)
    const loading = screen.getByTestId('loading')
    expect(loading).toBeInTheDocument()
})
