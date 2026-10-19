export const languageOptions = ['en', 'nl', 'fr', 'de'] as const

export type Language = (typeof languageOptions)[number]

export type Translation = {
    languageName: string
    comingSoon: string
    eyebrow: string
    headlineBefore: string
    headlineAccent: string
    intro: string
    release: string
    pleasure: string
    adults: string
    launch: string
    findUs: string
    follow: string
    consent: string
    more: string
    homeLabel: string
    socialLabel: string
    launchLabel: string
}

export const translations: Record<Language, Translation> = {
    en: {
        languageName: 'English',
        comingSoon: 'Coming soon',
        eyebrow: 'Lingerie & restraint',
        headlineBefore: 'The art of',
        headlineAccent: 'wanting more.',
        intro: 'Beautifully made pieces for\ndesire with intention. Scarlet Oath is arriving soon.',
        release: 'First release coming soon',
        pleasure: 'For your pleasure',
        adults: 'For adults, with intention',
        launch: 'The first release is taking shape.\nScarlet Oath is coming soon.',
        findUs: 'Find us',
        follow: 'Follow the story',
        consent: '18+ / Consent always.',
        more: 'More soon.',
        homeLabel: 'Scarlet Oath home',
        socialLabel: 'Social links',
        launchLabel: 'Launch information',
    },
    nl: {
        languageName: 'Nederlands',
        comingSoon: 'Binnenkort beschikbaar',
        eyebrow: 'Lingerie & bondage',
        headlineBefore: 'De kunst van',
        headlineAccent: 'meer verlangen.',
        intro: 'Prachtig gemaakte stukken voor\nverlangen met intentie. Scarlet Oath komt binnenkort.',
        release: 'Eerste collectie binnenkort',
        pleasure: 'Voor jouw plezier',
        adults: 'Voor volwassenen, met intentie',
        launch: 'De eerste collectie krijgt vorm.\nScarlet Oath komt binnenkort.',
        findUs: 'Vind ons',
        follow: 'Volg het verhaal',
        consent: '18+ / Toestemming altijd.',
        more: 'Binnenkort meer.',
        homeLabel: 'Scarlet Oath home',
        socialLabel: 'Sociale links',
        launchLabel: 'Lanceringsinformatie',
    },
    fr: {
        languageName: 'Français',
        comingSoon: 'Bientôt disponible',
        eyebrow: 'Lingerie & entraves',
        headlineBefore: "L'art de",
        headlineAccent: 'désirer davantage.',
        intro: 'Des pièces conçues avec soin pour\nle désir en toute intention. Scarlet Oath arrive bientôt.',
        release: 'Première collection bientôt',
        pleasure: 'Pour votre plaisir',
        adults: 'Pour adultes, avec intention',
        launch: 'La première collection prend forme.\nScarlet Oath arrive bientôt.',
        findUs: 'Nous trouver',
        follow: 'Suivez notre histoire',
        consent: '18+ / Le consentement, toujours.',
        more: 'Bientôt plus.',
        homeLabel: 'Accueil Scarlet Oath',
        socialLabel: 'Liens sociaux',
        launchLabel: 'Informations de lancement',
    },
    de: {
        languageName: 'Deutsch',
        comingSoon: 'Demnächst',
        eyebrow: 'Lingerie & Bondage',
        headlineBefore: 'Die Kunst,',
        headlineAccent: 'mehr zu wollen.',
        intro: 'Aufwendig gefertigte Stücke für\nBegehren mit Bedacht. Scarlet Oath kommt bald.',
        release: 'Erste Kollektion kommt bald',
        pleasure: 'Für dein Vergnügen',
        adults: 'Für Erwachsene, mit Bedacht',
        launch: 'Die erste Kollektion nimmt Gestalt an.\nScarlet Oath kommt bald.',
        findUs: 'Finde uns',
        follow: 'Folge der Geschichte',
        consent: '18+ / Einvernehmen, immer.',
        more: 'Bald mehr.',
        homeLabel: 'Scarlet Oath Startseite',
        socialLabel: 'Social-Media-Links',
        launchLabel: 'Informationen zum Start',
    },
}

export const languageLabels = Object.fromEntries(
    languageOptions.map((option) => [option, translations[option].languageName]),
) as Record<Language, string>

function isLanguage(value: string | null): value is Language {
    return languageOptions.some((option) => option === value)
}

export function getInitialLanguage(): Language {
    const urlLanguage = new URLSearchParams(window.location.search).get('lang')
    if (isLanguage(urlLanguage)) return urlLanguage

    const savedLanguage = window.localStorage.getItem('scarlet-oath-language')
    if (isLanguage(savedLanguage)) return savedLanguage

    const browserLanguage = window.navigator.language.slice(0, 2)
    return isLanguage(browserLanguage) ? browserLanguage : 'en'
}
