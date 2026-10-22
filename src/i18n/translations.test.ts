// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {describe, it, expect, beforeEach, afterEach} from 'vitest'
import {getInitialLanguage, languageLabels, languageOptions, translations} from './translations'
import type {Translation} from './translations'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
const translationKeys: Array<keyof Translation> = [
    'languageName',
    'comingSoon',
    'eyebrow',
    'headlineBefore',
    'headlineAccent',
    'intro',
    'release',
    'pleasure',
    'adults',
    'launch',
    'findUs',
    'follow',
    'consent',
    'more',
    'homeLabel',
    'socialLabel',
    'launchLabel',
    'languageSelection',
    'languageOptions',
]

describe('getInitialLanguage', () => {
    beforeEach(() => {
        window.localStorage.clear()
        window.history.replaceState(null, '', '/')
    })

    afterEach(() => {
        window.history.replaceState(null, '', '/')
        window.localStorage.clear()
        Reflect.deleteProperty(window.navigator, 'language')
    })

    it('prefers a valid URL language over saved and browser languages', () => {
        window.localStorage.setItem('scarlet-oath-language', 'de')
        Object.defineProperty(window.navigator, 'language', {value: 'fr-FR', configurable: true})
        window.history.replaceState(null, '', '/?lang=nl')
        expect(getInitialLanguage()).toBe('nl')
    })

    it('ignores an invalid URL language and falls through to the saved language', () => {
        window.localStorage.setItem('scarlet-oath-language', 'de')
        window.history.replaceState(null, '', '/?lang=xx')
        expect(getInitialLanguage()).toBe('de')
    })

    it('ignores an empty URL language and falls through to the saved language', () => {
        window.localStorage.setItem('scarlet-oath-language', 'fr')
        window.history.replaceState(null, '', '/?lang=')
        expect(getInitialLanguage()).toBe('fr')
    })

    it('uses the saved language when the URL has no language', () => {
        window.localStorage.setItem('scarlet-oath-language', 'nl')
        Object.defineProperty(window.navigator, 'language', {value: 'de-DE', configurable: true})
        expect(getInitialLanguage()).toBe('nl')
    })

    it('ignores an invalid saved language and falls through to the browser language', () => {
        window.localStorage.setItem('scarlet-oath-language', 'xx')
        Object.defineProperty(window.navigator, 'language', {value: 'de-DE', configurable: true})
        expect(getInitialLanguage()).toBe('de')
    })

    it('resolves a regional browser language to its base language', () => {
        Object.defineProperty(window.navigator, 'language', {value: 'fr-FR', configurable: true})
        expect(getInitialLanguage()).toBe('fr')
    })

    it('resolves a bare browser language directly', () => {
        Object.defineProperty(window.navigator, 'language', {value: 'fr', configurable: true})
        expect(getInitialLanguage()).toBe('fr')
    })

    it('falls back to English for an unsupported browser language', () => {
        Object.defineProperty(window.navigator, 'language', {value: 'ja', configurable: true})
        expect(getInitialLanguage()).toBe('en')
    })

    it('falls back to English when nothing is usable', () => {
        window.localStorage.setItem('scarlet-oath-language', 'xx')
        Object.defineProperty(window.navigator, 'language', {value: 'ja', configurable: true})
        window.history.replaceState(null, '', '/?lang=xx')
        expect(getInitialLanguage()).toBe('en')
    })
})

describe('translations data', () => {
    it('supports exactly en, nl, fr and de', () => {
        expect([...languageOptions]).toEqual(['en', 'nl', 'fr', 'de'])
    })

    it('gives every language the full key set with string-only values', () => {
        for (const language of languageOptions) {
            const entry = translations[language]
            expect(Object.keys(entry).sort()).toEqual([...translationKeys].sort())
            for (const value of Object.values(entry)) {
                expect(typeof value).toBe('string')
                expect(value.length).toBeGreaterThan(0)
            }
        }
    })

    it('maps every language code to its languageName', () => {
        for (const language of languageOptions) {
            expect(languageLabels[language]).toBe(translations[language].languageName)
        }
    })
})
