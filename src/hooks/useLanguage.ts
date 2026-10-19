// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {useEffect, useState} from 'react'
import {getInitialLanguage, translations} from '../i18n/translations'
import type {Language, Translation} from '../i18n/translations'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export function useLanguage(): {language: Language; setLanguage: (language: Language) => void; t: Translation} {
    const [language, setLanguage] = useState<Language>(getInitialLanguage)

    useEffect(() => {
        document.documentElement.lang = language
        window.localStorage.setItem('scarlet-oath-language', language)

        const query = new URLSearchParams(window.location.search)
        if (language === 'en') query.delete('lang')
        else query.set('lang', language)
        const queryString = query.toString()
        const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}${window.location.hash}`
        window.history.replaceState(null, '', nextUrl)
    }, [language])

    return {language, setLanguage, t: translations[language]}
}
