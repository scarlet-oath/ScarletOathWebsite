import {useState} from 'react'
import {SiteNav} from './components/SiteNav'
import {Hero} from './components/Hero'
import {LaunchSection} from './components/LaunchSection'
import {SocialSection} from './components/SocialSection'
import {SiteFooter} from './components/SiteFooter'

function CategoryIcon({kind}: {kind: 'lingerie' | 'clothing' | 'gear' | 'star'}) {
    if (kind === 'star') {
        return (
            <span className="ornament-icon" aria-hidden="true">
                ✦
            </span>
        )
    }

    return (
        <svg className="category-icon" viewBox="0 0 100 74" aria-hidden="true">
            {kind === 'lingerie' && (
                <path d="M24 8v17c0 6-8 10-8 19 0 11 10 17 20 17 8 0 14-5 14-13 0 8 6 13 14 13 10 0 20-6 20-17 0-9-8-13-8-19V8M16 43l34 5 34-5M50 49v12" />
            )}
            {kind === 'clothing' && (
                <path d="M34 10 18 17l8 49 24 6 24-6 8-49-16-7-16 9-16-9ZM34 10l4 56M66 10l-4 56M50 19v48M27 27h46" />
            )}
            {kind === 'gear' && (
                <>
                    <ellipse cx="50" cy="23" rx="31" ry="10" />
                    <path d="M19 23v14c0 6 14 11 31 11s31-5 31-11V23M50 48v9" />
                    <circle cx="50" cy="64" r="8" />
                </>
            )}
        </svg>
    )
}

function TrustIcon({kind}: {kind: 'lock' | 'shield' | 'heart' | 'star'}) {
    if (kind === 'star')
        return (
            <span className="trust-star" aria-hidden="true">
                ✦
            </span>
        )
    return (
        <svg className="trust-icon" viewBox="0 0 32 32" aria-hidden="true">
            {kind === 'lock' && (
                <>
                    <rect x="7" y="14" width="18" height="14" rx="1" />
                    <path d="M11 14V9a5 5 0 0 1 10 0v5M16 20v4" />
                </>
            )}
            {kind === 'shield' && <path d="M16 3 26 7v8c0 7-4 11-10 14C10 26 6 22 6 15V7l10-4ZM11 16l3 3 7-7" />}
            {kind === 'heart' && <path d="M16 27S5 20 5 12a6 6 0 0 1 11-3 6 6 0 0 1 11 3c0 8-11 15-11 15Z" />}
        </svg>
    )
}

const categories = [
    {
        title: 'LINGERIE',
        description: 'Seductive designs for your most intimate moments.',
        action: 'DISCOVER MORE',
        href: '#contact',
        icon: 'lingerie' as const,
    },
    {
        title: 'CLOTHING',
        description: 'Bold styles for every side of you.',
        action: 'DISCOVER MORE',
        href: '#contact',
        icon: 'clothing' as const,
    },
    {
        title: 'BDSM GEAR',
        description: 'Quality gear for your desires.',
        action: 'DISCOVER MORE',
        href: '#contact',
        icon: 'gear' as const,
    },
    {
        title: 'CUSTOM & EXCLUSIVE',
        description: 'Unique pieces, made to your specifications.',
        action: 'START A CONVERSATION',
        href: '#contact',
        icon: 'star' as const,
    },
]

export function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="site-shell">
            <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
                <Hero />
                <section className="category-section" id="collection" aria-labelledby="collection-title">
                    <div className="section-intro">
                        <p className="section-kicker">The world of Scarlet Oath</p>
                        <h2 id="collection-title">
                            Made for the <em>unspoken.</em>
                        </h2>
                    </div>
                    <div className="category-grid">
                        {categories.map((category) => (
                            <article className="category-card" key={category.title}>
                                <div className="card-corner card-corner-top" />
                                <div className="card-corner card-corner-bottom" />
                                <CategoryIcon kind={category.icon} />
                                <h3>{category.title}</h3>
                                <div className="mini-divider">
                                    <span>✦</span>
                                </div>
                                <p>{category.description}</p>
                                <a href={category.href}>
                                    {category.action} <span aria-hidden="true">→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                </section>
                <section className="trust-section" aria-labelledby="trust-title">
                    <h2 className="sr-only" id="trust-title">
                        Our values
                    </h2>
                    <div className="trust-grid">
                        {[
                            ['lock', 'DISCREET PACKAGING', 'Your privacy matters.'],
                            ['shield', 'PREMIUM QUALITY', 'Made to last.'],
                            ['heart', 'INCLUSIVE & DIVERSE', 'All bodies. All desires.'],
                            ['star', 'CRAFTED WITH CARE', 'For your most honest self.'],
                        ].map(([icon, title, copy]) => (
                            <div className="trust-item" key={title}>
                                <TrustIcon kind={icon as 'lock' | 'shield' | 'heart' | 'star'} />
                                <h3>{title}</h3>
                                <p>{copy}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <LaunchSection />
                <SocialSection />
            </main>
            <SiteFooter />
        </div>
    )
}
