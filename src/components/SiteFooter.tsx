// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import type {Translation} from '../i18n/translations'
// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
type SiteFooterProps = {
    t: Translation
}

export function SiteFooter({t}: SiteFooterProps) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="mx-auto flex max-w-310 flex-col gap-3.75 border-t border-white/10 px-5.5 py-6.25 text-[11px] uppercase tracking-widest text-[#a99991] sm:flex-row sm:items-center sm:justify-between sm:px-10.5 sm:pb-9.5">
            <span className="font-bold text-[#e8ded5]">Scarlet Oath</span>
            <span>{t.consent}</span>
            <span>
                {t.more} <span>&copy; {currentYear} Anna Sas</span>
            </span>
        </footer>
    )
}
