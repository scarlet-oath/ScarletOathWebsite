// noinspection HtmlUnknownAnchorTarget

// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export const HERO_SECTION_ID = 'top'

export function Hero() {
    return (
        <section
            className="relative isolate grid min-h-140 place-items-center overflow-hidden border-b border-crimson/70 bg-[#090607] sm:min-h-155"
            id={HERO_SECTION_ID}
        >
            <svg
                className="hero-atmosphere absolute inset-0 z-[-1] h-full w-full opacity-70"
                viewBox="0 0 1440 620"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
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
            <div className="flex flex-col items-center px-5 py-6 text-center sm:py-9">
                <img
                    className="mb-4 h-24 w-20 object-contain sm:h-28 sm:w-24"
                    src={`${import.meta.env.BASE_URL}logoNoBorder.svg`}
                    alt="Scarlet Oath emblem"
                />
                <h1 className="m-0 font-serif text-3xl font-semibold leading-none tracking-widest text-ivory sm:text-6xl sm:tracking-[.16em]">
                    <span className="text-crimson">SCARLET</span> OATH
                </h1>
                <p className="my-5 mb-6 text-xs tracking-[.18em] sm:text-sm sm:tracking-[.27em]">
                    LINGERIE <i className="mx-1.5 text-crimson not-italic sm:mx-2.5">·</i> CLOTHING{' '}
                    <i className="mx-1.5 text-crimson not-italic sm:mx-2.5">·</i> BDSM GEAR
                </p>
                <div className="flex w-11/12 max-w-xs items-center gap-3.5 text-crimson before:h-px before:flex-1 before:bg-crimson">
                    <span className="text-2xl leading-none">✦</span>
                </div>
                <p className="my-6 text-sm leading-relaxed tracking-[.13em] sm:text-base sm:tracking-[.2em]">
                    BECAUSE SOME PROMISES
                    <br />
                    ARE MEANT TO BE BROKEN.
                </p>
                <a
                    className="border border-crimson px-5 py-3.5 text-xs tracking-[.17em] transition-colors hover:bg-crimson sm:px-7"
                    href="#collection"
                >
                    DISCOVER THE VISION{' '}
                    <span className="ml-3 text-lg" aria-hidden="true">
                        →
                    </span>
                </a>
            </div>
        </section>
    )
}
