import { render, screen } from '@testing-library/react'
import { Home } from '../pages/404'
import '@testing-library/jest-dom'

it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
        expect(container).toMatchSnapshot()
    }
)
