// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {describe, it, expect, beforeEach, afterEach} from 'vitest'
import {render, screen, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {App} from './App'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
describe('App', () => {
    beforeEach(() => {
        window.localStorage.clear()
        window.history.replaceState(null, '', '/')
        document.documentElement.lang = ''
    })

    afterEach(() => {
        window.localStorage.clear()
        window.history.replaceState(null, '', '/')
        document.documentElement.lang = ''
    })

    it('renders the English headline, brand, social links and copyright line', () => {
        render(<App />)
        expect(screen.getByText('The art of')).toBeInTheDocument()
        expect(screen.getByText('wanting more.')).toBeInTheDocument()
        const homeLink = screen.getByRole('link', {name: 'Scarlet Oath home'})
        expect(within(homeLink).getByText('Scarlet Oath')).toBeInTheDocument()
        expect(screen.getByRole('link', {name: /Instagram/})).toHaveAttribute(
            'href',
            'https://www.instagram.com/scarlet.oath.designs/',
        )
        expect(screen.getByRole('link', {name: /FetLife/})).toHaveAttribute('href', 'https://fetlife.com/Scarlet-Oath')
        const currentYear = new Date().getFullYear()
        expect(screen.getByText('More soon.')).toBeInTheDocument()
        expect(screen.getByText(`© ${currentYear} Anna Sas`)).toBeInTheDocument()
    })

    it('links the home brand to the hero anchor', () => {
        render(<App />)
        expect(screen.getByRole('link', {name: 'Scarlet Oath home'})).toHaveAttribute('href', '#top')
        const hero = document.getElementById('top')
        expect(hero).not.toBeNull()
        expect(hero?.tagName).toBe('SECTION')
    })

    it('falls back to English and preserves unrelated query parameters for an invalid URL language', () => {
        window.history.replaceState(null, '', '/?lang=xx&ref=campaign')
        render(<App />)
        expect(screen.getByText('The art of')).toBeInTheDocument()
        expect(document.documentElement.lang).toBe('en')
        expect(window.location.search).toBe('?ref=campaign')
    })

    it('switches copy and document language when picking Dutch', async () => {
        const user = userEvent.setup()
        render(<App />)
        await user.click(screen.getByRole('combobox', {name: 'Language selection'}))
        await user.click(screen.getByRole('option', {name: 'nl Nederlands'}))
        expect(screen.getByText('Binnenkort beschikbaar')).toBeInTheDocument()
        expect(screen.getByText('De kunst van')).toBeInTheDocument()
        expect(screen.getByText('meer verlangen.')).toBeInTheDocument()
        expect(document.documentElement.lang).toBe('nl')
        expect(window.localStorage.getItem('scarlet-oath-language')).toBe('nl')
        expect(window.location.search).toBe('?lang=nl')
    })
})
