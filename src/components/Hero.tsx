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
            <img
                className="absolute inset-0 z-[-1] h-full w-full object-cover opacity-50"
                src={`${import.meta.env.BASE_URL}assets/background.png`}
                alt=""
                aria-hidden="true"
            />
            <div className="flex flex-col items-center px-5 py-6 text-center sm:py-9">
                <img
                    className="mb-4 h-24 w-20 object-contain sm:h-28 sm:w-24"
                    src={`${import.meta.env.BASE_URL}assets/logoNoBorder.svg`}
                    alt="Scarlet Oath emblem"
                />
                <h1 className="m-0 font-serif text-3xl font-semibold leading-none tracking-widest text-ivory sm:text-6xl sm:tracking-[.16em]">
                    <span className="text-crimson">SCARLET</span> OATH
                </h1>
                <p className="my-5 mb-6 text-xs tracking-[.18em] sm:text-sm sm:tracking-[.27em]">
                    LINGERIE <i className="mx-1.5 text-crimson not-italic sm:mx-2.5">·</i> CLOTHING{' '}
                    <i className="mx-1.5 text-crimson not-italic sm:mx-2.5">·</i> BDSM GEAR
                </p>
                <div className="flex w-11/12 max-w-xs items-center gap-3.5 text-crimson before:h-px before:flex-1 before:bg-crimson after:h-px after:flex-1 after:bg-crimson">
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
