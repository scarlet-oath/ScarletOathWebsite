// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {StrictMode, useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {siInstagram} from 'simple-icons'
import './styles.css'
import {SocialLink} from "./socialLink.jsx";
import {SocialIcon} from "./socialIcon.jsx";
import {getInitialLanguage, languageOptions, translations} from './i18n/translations.jsx'
import {LanguagePicker} from './languagePicker.jsx'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
function App() {
    const [language, setLanguage] = useState(getInitialLanguage)
    const currentYear = new Date().getFullYear()
    const t = translations[language]

    useEffect(() => {
        document.documentElement.lang = language
        window.localStorage.setItem('scarlet-oath-language', language)

        const query = new URLSearchParams(window.location.search)
        query.set('lang', language)
        const nextUrl = `${window.location.pathname}?${query.toString()}${window.location.hash}`
        window.history.replaceState(null, '', nextUrl)
    }, [language])

    return (
        <main
            className="min-h-screen overflow-hidden bg-[#0b0a0b] text-[#e8ded5] bg-[radial-gradient(ellipse_at_76%_34%,rgba(127,20,37,.14),transparent_32rem)]">
            <nav className="relative mx-auto flex max-w-310 items-center justify-between px-5.5 py-6 sm:px-10.5 sm:py-9"
                 aria-label="Main navigation">
                <a className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[.04em]"
                   aria-label={t.homeLabel}>
                    <img className="block h-9 w-auto" src={`${import.meta.env.BASE_URL}logo.svg`} alt=""/>
                    <span>Scarlet Oath</span>
                </a>
                <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[.08em] text-[#a99991] sm:block sm:text-xs">{t.comingSoon}</span>
                <div className="flex items-center gap-3 sm:gap-4">
                    <LanguagePicker language={language} options={languageOptions} labels={Object.fromEntries(languageOptions.map((option) => [option, translations[option].languageName]))} onChange={setLanguage}/>
                </div>
            </nav>

            <section
                className="mx-auto grid min-h-auto max-w-310 grid-cols-1 items-center gap-8 px-5.5 pb-22.5 pt-18.75 sm:grid-cols-2 sm:gap-[7%] sm:px-10.5 sm:pt-15"
                id="top">
                <div className="order-2 self-start sm:order-none sm:self-auto">
                    <p className="mb-8.5 flex items-center text-[11px] uppercase tracking-[.12em] text-[#a99991]">
                        <span className="mr-3.25 inline-block h-px w-7 bg-[#c11d35]"/> {t.eyebrow}</p>
                    <h1 className="mb-7.75 font-serif text-[clamp(4rem,18vw,6rem)] font-semibold leading-[.91] tracking-[-.075em] sm:text-[clamp(4.5rem,8.4vw,7.8rem)]">{t.headlineBefore}
                        <br/><em className="text-[#c11d35]">{t.headlineAccent}</em></h1>
                    <p className="max-w-97.5 text-base leading-[1.7] text-[#a99991]">{t.intro}</p>
                    <span
                        className="mt-5 inline-flex items-center gap-6.25 border-b border-[#87505a] pb-2.5 pt-3.5 text-[11px] uppercase tracking-[.12em]">{t.release}</span>
                </div>

                <div className="relative order-1 flex min-h-97.5 flex-col items-center justify-center sm:order-none sm:min-h-135">
                    <div
                        className="absolute h-[115%] w-[115%] bg-[radial-gradient(ellipse,rgba(193,29,53,.22),rgba(193,29,53,0)_68%)]"/>
                    <img
                        className="relative z-10 block w-[78%] max-w-75 drop-shadow-[0_25px_35px_rgba(150,17,37,.15)] sm:max-w-100"
                        src={`${import.meta.env.BASE_URL}logo.svg`} alt="Scarlet Oath emblem"/>
                    <span
                        className="relative z-10 mt-5 hidden self-end mr-[8%] text-[10px] uppercase tracking-[.12em] text-[#a99991] sm:block">Est. 2026 <span
                        className="mx-2 text-[#c11d35]">///</span> {t.pleasure}</span>
                </div>
            </section>

            <section
                className="mx-auto max-w-310 border-t border-white/15 px-5.5 pb-18.75 pt-6.25 sm:px-10.5 sm:pb-25"
                aria-label={t.launchLabel}>
                <div className="flex justify-between text-[10px] uppercase tracking-[.16em] text-[#a99991]"><span
                    className="text-[#c11d35]">Scarlet Oath</span><span>{t.adults}</span></div>
                <p className="mx-auto mt-11.25 w-full max-w-155 text-center font-serif text-[clamp(1.8rem,3.3vw,3.1rem)] leading-[1.08] tracking-[-.04em] text-[#a99991] sm:mt-15.5">{t.launch}</p>
            </section>

            <section className="mx-auto max-w-310 border-t border-white/10 px-5.5 pb-18.75 pt-6.25 sm:px-10.5 sm:pb-25" aria-label={t.socialLabel}>
                <div className="flex justify-between text-[10px] uppercase tracking-[.16em] text-[#a99991]"><span className="text-[#c11d35]">{t.findUs}</span><span>{t.follow}</span></div>
                <div className="mt-11.25 grid grid-cols-1 gap-4 sm:mt-15.5 sm:grid-cols-2">
                    <SocialLink href="https://www.instagram.com/scarlet.oath.designs/" label="Instagram"><SocialIcon path={siInstagram.path}/></SocialLink>
                    <SocialLink href="https://fetlife.com/Scarlet-Oath" label="FetLife"><SocialIcon src={`${import.meta.env.BASE_URL}fetlife.svg`}/></SocialLink>
                </div>
            </section>

            <footer
                className="mx-auto flex max-w-310 flex-col gap-3.75 border-t border-white/10 px-5.5 py-6.25 text-[11px] uppercase tracking-widest text-[#a99991] sm:flex-row sm:items-center sm:justify-between sm:px-10.5 sm:pb-9.5">
                <span className="font-bold text-[#e8ded5]">Scarlet Oath</span>
                <span>{t.consent}</span>
                <span>{t.more} <span aria-label={`Copyright ${currentYear} Anna Sas`}>&copy; {currentYear} Anna Sas</span></span>
            </footer>
        </main>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode><App/></StrictMode>,
)
