import {describe, it, expect} from 'vitest'
import {render, screen, within} from '@testing-library/react'
import {SocialLink} from './SocialLink'

describe('SocialLink', () => {
    it('renders an external link with label and children', () => {
        render(
            <SocialLink href="https://example.com/scarlet-oath" label="Example Network">
                <span data-testid="social-icon">icon</span>
            </SocialLink>,
        )
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', 'https://example.com/scarlet-oath')
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noreferrer')
        expect(link).toHaveTextContent('Example Network')
        expect(within(link).getByTestId('social-icon')).toBeInTheDocument()
    })
})
