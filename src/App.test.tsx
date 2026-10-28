import {describe, it, expect} from 'vitest'
import {render, screen, within} from '@testing-library/react'
import {App} from './App'

describe('App', () => {
    it('renders the homepage brand, collection content, social links and copyright line', () => {
        render(<App />)
        expect(screen.getByRole('heading', {name: 'SCARLET OATH'})).toBeInTheDocument()
        expect(screen.getByText('LINGERIE')).toBeInTheDocument()
        const homeLink = screen.getByRole('link', {name: 'Scarlet Oath home'})
        expect(within(homeLink).getByText('Scarlet Oath')).toBeInTheDocument()
        expect(screen.getByRole('link', {name: /Instagram/})).toHaveAttribute(
            'href',
            'https://www.instagram.com/scarlet.oath.designs/',
        )
        expect(screen.getByRole('link', {name: /FetLife/})).toHaveAttribute('href', 'https://fetlife.com/Scarlet-Oath')
        expect(screen.getByText(`© ${new Date().getFullYear()} Anna Sas`)).toBeInTheDocument()
    })

    it('links the home brand to the hero anchor', () => {
        render(<App />)
        expect(screen.getByRole('link', {name: 'Scarlet Oath home'})).toHaveAttribute('href', '#top')
        expect(document.getElementById('top')?.tagName).toBe('SECTION')
    })
})
