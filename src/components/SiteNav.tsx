// noinspection HtmlUnknownAnchorTarget

import {useEffect} from 'react'
import {HERO_SECTION_ID} from './Hero'

type SiteNavProps = {menuOpen: boolean; setMenuOpen: (open: boolean) => void}

export function SiteNav({menuOpen, setMenuOpen}: SiteNavProps) {
    useEffect(() => {
        document.body.classList.toggle('menu-is-open', menuOpen)
        return () => document.body.classList.remove('menu-is-open')
    }, [menuOpen])

    const linkClass =
        'relative py-3.5 text-xs tracking-[.16em] text-ivory transition-colors hover:text-crimson sm:py-7 sm:pb-6 sm:pt-7'

    return (
        <header className="relative z-10 border-b border-crimson/70 bg-ink/97">
            <nav
                className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 sm:min-h-20 sm:px-12"
                aria-label="Main navigation"
            >
                <a
                    className="flex min-w-0 items-center gap-3 whitespace-nowrap font-serif text-base tracking-[.2em] sm:min-w-60 sm:gap-4 sm:text-xl sm:tracking-[.26em]"
                    href={`#${HERO_SECTION_ID}`}
                    aria-label="Scarlet Oath home"
                    onClick={() => setMenuOpen(false)}
                >
                    <img
                        className="h-9 w-7 object-contain sm:h-11 sm:w-9"
                        src={`${import.meta.env.BASE_URL}assets/logoNoBorder.svg`}
                        alt=""
                    />
                    <span>
                        <b className="font-medium text-crimson">SCARLET</b> OATH
                        <span className="sr-only">Scarlet Oath</span>
                    </span>
                </a>
                <button
                    className="order-2 ml-auto mr-2 flex h-10 w-10 flex-col justify-around border-0 bg-transparent p-2.5 sm:hidden"
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="primary-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="h-px w-6 bg-crimson" />
                    <span className="h-px w-6 bg-crimson" />
                    <span className="h-px w-6 bg-crimson" />
                    <span className="sr-only">Menu</span>
                </button>
                <div
                    className={`absolute left-0 right-0 top-16 hidden flex-col items-stretch gap-0 border-b border-crimson/70 bg-ink/98 px-5 pb-5 pt-2.5 sm:top-auto sm:left-1/2 sm:right-auto sm:flex sm:-translate-x-1/2 sm:flex-row sm:items-center sm:gap-12 sm:border-0 sm:bg-transparent sm:p-0 ${menuOpen ? 'flex' : ''}`}
                    id="primary-menu"
                >
                    <a
                        className={`${linkClass} sm:after:absolute sm:after:bottom-4 sm:after:left-0 sm:after:right-0 sm:after:h-px sm:after:bg-crimson`}
                        href={`#${HERO_SECTION_ID}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        HOME
                    </a>
                    <a className={linkClass} href="#collection" onClick={() => setMenuOpen(false)}>
                        VISION
                    </a>
                    <a className={linkClass} href="#about" onClick={() => setMenuOpen(false)}>
                        ABOUT
                    </a>
                    <a className={linkClass} href="#contact" onClick={() => setMenuOpen(false)}>
                        CONTACT
                    </a>
                </div>
            </nav>
        </header>
    )
}
