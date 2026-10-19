import {LanguagePicker} from './LanguagePicker'
import {languageLabels, languageOptions} from '../i18n/translations'
import type {Language, Translation} from '../i18n/translations'

type SiteNavProps = {
    language: Language
    setLanguage: (language: Language) => void
    t: Translation
}

export function SiteNav({language, setLanguage, t}: SiteNavProps) {
    return (
        <nav
            className="relative mx-auto flex max-w-310 items-center justify-between px-5.5 py-6 sm:px-10.5 sm:py-9"
            aria-label="Main navigation"
        >
            <a
                className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[.04em]"
                href="#top"
                aria-label={t.homeLabel}
            >
                <img className="block h-9 w-auto" src={`${import.meta.env.BASE_URL}logo.svg`} alt="" />
                <span>Scarlet Oath</span>
            </a>
            <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[.08em] text-[#a99991] sm:block sm:text-xs">
                {t.comingSoon}
            </span>
            <div className="flex items-center gap-3 sm:gap-4">
                <LanguagePicker
                    language={language}
                    options={languageOptions}
                    labels={languageLabels}
                    onChange={setLanguage}
                />
            </div>
        </nav>
    )
}
