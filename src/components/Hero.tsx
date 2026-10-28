export const HERO_SECTION_ID = 'top'

export function Hero() {
    return (
        <section className="hero" id={HERO_SECTION_ID}>
            <svg className="hero-atmosphere" viewBox="0 0 1440 620" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="ribbon-left" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#c8102e" stopOpacity=".02" />
                        <stop offset=".48" stopColor="#c8102e" stopOpacity=".8" />
                        <stop offset="1" stopColor="#c8102e" stopOpacity=".03" />
                    </linearGradient>
                    <linearGradient id="ribbon-right" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#c8102e" stopOpacity=".03" />
                        <stop offset=".5" stopColor="#c8102e" stopOpacity=".72" />
                        <stop offset="1" stopColor="#c8102e" stopOpacity=".02" />
                    </linearGradient>
                </defs>
                <path className="ribbon-glow" d="M-90 50C150 120 60 300 390 425c120 45 165 130 50 260" />
                <path d="M-90 50C150 120 60 300 390 425c120 45 165 130 50 260" stroke="url(#ribbon-left)" />
                <path d="M-75 12C205 110 80 315 430 448c102 39 140 128 31 244" stroke="url(#ribbon-left)" />
                <path className="ribbon-glow" d="M1530 36c-235 96-91 265-385 405-126 60-170 147-43 251" />
                <path d="M1530 36c-235 96-91 265-385 405-126 60-170 147-43 251" stroke="url(#ribbon-right)" />
                <path d="M1515-2c-269 117-113 274-414 423-110 54-163 143-52 252" stroke="url(#ribbon-right)" />
            </svg>
            <div className="hero-content">
                <img
                    className="hero-logo"
                    src={`${import.meta.env.BASE_URL}logoNoBorder.svg`}
                    alt="Scarlet Oath emblem"
                />
                <h1>
                    <span>SCARLET</span> OATH
                </h1>
                <p className="hero-descriptor">
                    LINGERIE <i>·</i> CLOTHING <i>·</i> BDSM GEAR
                </p>
                <div className="hero-divider">
                    <span>✦</span>
                </div>
                <p className="hero-tagline">
                    BECAUSE SOME PROMISES
                    <br />
                    ARE MEANT TO BE BROKEN.
                </p>
                <a className="outline-button" href="#collection">
                    DISCOVER THE VISION <span aria-hidden="true">→</span>
                </a>
            </div>
        </section>
    )
}
