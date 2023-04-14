import { Card } from "."
import { render, screen } from '@testing-library/react'

test('Should render Card component', () => {
    render(<Card>Test</Card>)
    const card = screen.getByText(/Test/i)
    expect(card).toBeInTheDocument()
})
