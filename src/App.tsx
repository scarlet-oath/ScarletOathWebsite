import {useState} from 'react'
import {Heart, LockKeyhole, ShieldCheck, Sparkles} from 'lucide-react'
import {SiteNav} from './components/SiteNav'
import {Hero} from './components/Hero'
import {LaunchSection} from './components/LaunchSection'
import {SocialSection} from './components/SocialSection'
import {SiteFooter} from './components/SiteFooter'

function CategoryIcon({kind}: {kind: 'lingerie' | 'clothing' | 'gear' | 'star'}) {
    return (
        <svg
            className="mb-4 h-16 w-20 fill-none stroke-crimson stroke-2 stroke-linecap-round stroke-linejoin-round"
            viewBox="0 0 100 74"
            aria-hidden="true"
        >
            {kind === 'lingerie' && (
                <path d="M27 12v13c0 6-9 9-9 19 0 10 9 17 20 17 7 0 12-4 12-12 0 8 5 12 12 12 11 0 20-7 20-17 0-10-9-13-9-19V12M18 44l32 5 32-5M50 49v12" />
            )}
            {kind === 'clothing' && (
                <path d="m34 10-16 8 7 48 25 7 25-7 7-48-16-8-16 10-16-10ZM34 10l5 56M66 10l-5 56M50 20v47M27 29h46" />
            )}
            {kind === 'gear' && (
                <>
                    <path d="M19 21c0-6 14-10 31-10s31 4 31 10v13c0 6-14 11-31 11s-31-5-31-11V21Z" />
                    <path d="M19 21c0 6 14 10 31 10s31-4 31-10M50 45v10" />
                    <circle cx="50" cy="64" r="8" />
                </>
            )}
            {kind === 'star' && <path d="m50 7 6 20 20 6-20 6-6 20-6-20-20-6 20-6 6-20Z" />}
        </svg>
    )
}

function TrustIcon({kind}: {kind: 'lock' | 'shield' | 'heart' | 'star'}) {
    const Icon = {lock: LockKeyhole, shield: ShieldCheck, heart: Heart, star: Sparkles}[kind]
    return <Icon className="h-7 w-7 text-crimson" strokeWidth={1.7} aria-hidden="true" />
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
        <div className="min-h-screen overflow-hidden bg-ink">
            <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
                <Hero />
                <section
                    className="border-b border-crimson/70 px-5 py-12 sm:px-12 sm:py-14"
                    id="collection"
                    aria-labelledby="collection-title"
                >
                    <div className="mb-8 text-center">
                        <p className="mb-3 text-xs uppercase tracking-[.25em] text-crimson">
                            The world of Scarlet Oath
                        </p>
                        <h2
                            className="m-0 font-serif text-3xl font-medium leading-tight tracking-[.02em] sm:text-5xl"
                            id="collection-title"
                        >
                            Made for the <em>unspoken.</em>
                        </h2>
                    </div>
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {categories.map((category) => (
                            <article
                                className="relative flex min-h-64 flex-col items-center border border-crimson/70 bg-ink/50 px-3 py-7 text-center transition-colors hover:border-crimson hover:bg-surface sm:min-h-72 sm:px-6 sm:py-8"
                                key={category.title}
                            >
                                <div className="absolute left-0 top-0 h-2.5 w-2.5 border-b border-r border-crimson bg-ink" />
                                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-l border-t border-crimson bg-ink" />
                                <CategoryIcon kind={category.icon} />
                                <h3 className="mb-3 font-serif text-sm font-medium tracking-[.1em] sm:text-lg">
                                    {category.title}
                                </h3>
                                <div className="mb-4 flex w-36 items-center gap-2 text-crimson before:h-px before:flex-1 before:bg-crimson after:h-px after:flex-1 after:bg-crimson">
                                    <span className="text-base">✦</span>
                                </div>
                                <p className="mb-5 min-h-10 max-w-48 text-xs leading-relaxed text-muted sm:text-sm">
                                    {category.description}
                                </p>
                                <a
                                    className="mt-auto text-xs font-bold tracking-[.18em] text-crimson"
                                    href={category.href}
                                >
                                    {category.action} <span aria-hidden="true">→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                </section>
                <section
                    className="border-b border-crimson/70 bg-gradient-to-r from-crimson/[.09] via-transparent to-crimson/[.09] px-3 py-8 sm:px-12"
                    aria-labelledby="trust-title"
                >
                    <h2 className="sr-only" id="trust-title">
                        Our values
                    </h2>
                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-y-0">
                        {[
                            ['lock', 'DISCREET PACKAGING', 'Your privacy matters.'],
                            ['shield', 'PREMIUM QUALITY', 'Made to last.'],
                            ['heart', 'INCLUSIVE & DIVERSE', 'All bodies. All desires.'],
                            ['star', 'CRAFTED WITH CARE', 'For your most honest self.'],
                        ].map(([icon, title, copy]) => (
                            <div
                                className="flex min-h-24 flex-col items-center border-r border-crimson/70 px-2 text-center first:lg:border-r last:border-0 even:lg:border-r-0 lg:px-6 odd:border-r"
                                key={title}
                            >
                                <TrustIcon kind={icon as 'lock' | 'shield' | 'heart' | 'star'} />
                                <h3 className="my-2.5 font-serif text-xs font-medium tracking-[.12em] lg:tracking-[.2em]">
                                    {title}
                                </h3>
                                <p className="m-0 text-xs text-muted">{copy}</p>
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
