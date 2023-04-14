import { Input } from "."
import { render, screen } from '@testing-library/react'

const identity = () => { }

it('Should render Input component', () => {
    render(<Input displayValue="value" onSubmit={identity} setDisplayValue={identity} />)
    const input = screen.getByDisplayValue('value')
    expect(input).toBeInTheDocument()
})
