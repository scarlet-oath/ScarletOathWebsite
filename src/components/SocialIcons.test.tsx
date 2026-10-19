// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {describe, it, expect} from 'vitest'
import {render, screen, within} from '@testing-library/react'
import {SocialIcon} from './SocialIcon'
import {SocialLink} from './SocialLink'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
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

describe('SocialIcon', () => {
    it('renders only the svg path branch', () => {
        const {container} = render(<SocialIcon path="M12 2 L2 22 H22 Z" />)
        const svg = container.querySelector('svg')
        expect(svg).not.toBeNull()
        expect(svg).toHaveAttribute('aria-hidden', 'true')
        expect(svg?.querySelector('path')).toHaveAttribute('d', 'M12 2 L2 22 H22 Z')
        expect(container.querySelector('span')).toBeNull()
    })

    it('renders only the masked span branch', () => {
        const src = '/icons/fetlife.svg'
        const {container} = render(<SocialIcon src={src} />)
        const span = container.querySelector('span')
        expect(span).not.toBeNull()
        expect(span).toHaveAttribute('aria-hidden', 'true')
        const mask = span?.style.maskImage ?? span?.style.webkitMaskImage ?? ''
        expect(mask).toContain(src)
        expect(container.querySelector('svg')).toBeNull()
    })
})
