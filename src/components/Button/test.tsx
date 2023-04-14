import { Button } from "."
import { render, screen } from '@testing-library/react'

it('Should render Button component', () => {
    render(<Button>Test</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

it('should render a disabled button', () => {
    render(<Button disabled>Test</Button>)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
})