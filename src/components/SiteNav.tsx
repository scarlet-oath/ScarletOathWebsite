import {useEffect} from 'react'
import {HERO_SECTION_ID} from './Hero'

type SiteNavProps = {
    menuOpen: boolean
    setMenuOpen: (open: boolean) => void
}

export function SiteNav({menuOpen, setMenuOpen}: SiteNavProps) {
    useEffect(() => {
        document.body.classList.toggle('menu-is-open', menuOpen)
        return () => document.body.classList.remove('menu-is-open')
    }, [menuOpen])

    return (
        <header className="site-header">
            <nav className="nav-inner" aria-label="Main navigation">
                <a
                    className="brand-lockup"
                    href={`#${HERO_SECTION_ID}`}
                    aria-label="Scarlet Oath home"
                    onClick={() => setMenuOpen(false)}
                >
                    <img src={`${import.meta.env.BASE_URL}logoNoBorder.svg`} alt="" />
                    <span>
                        <b>SCARLET</b> OATH<span className="sr-only">Scarlet Oath</span>
                    </span>
                </a>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="primary-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span /> <span /> <span /> <span className="sr-only">Menu</span>
                </button>
                <div className={`primary-menu ${menuOpen ? 'is-open' : ''}`} id="primary-menu">
                    <a className="active" href={`#${HERO_SECTION_ID}`} onClick={() => setMenuOpen(false)}>
                        HOME
                    </a>
                    <a href="#collection" onClick={() => setMenuOpen(false)}>
                        VISION
                    </a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        ABOUT
                    </a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        CONTACT
                    </a>
                </div>
            </nav>
        </header>
    )
}
