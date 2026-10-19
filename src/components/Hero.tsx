// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import type {Translation} from '../i18n/translations'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
type HeroProps = {
    t: Translation
}
export function Hero({t}: HeroProps) {
    return (
        <section
            className="mx-auto grid min-h-auto max-w-310 grid-cols-1 items-center gap-8 px-5.5 pb-22.5 pt-18.75 sm:grid-cols-2 sm:gap-[7%] sm:px-10.5 sm:pt-15"
            id="top"
        >
            <div className="order-2 self-start sm:order-0 sm:self-auto">
                <p className="mb-8.5 flex items-center text-[11px] uppercase tracking-[.12em] text-[#a99991]">
                    <span className="mr-3.25 inline-block h-px w-7 bg-[#c11d35]" /> {t.eyebrow}
                </p>
                <h1 className="mb-7.75 font-serif text-[clamp(4rem,18vw,6rem)] font-semibold leading-[.91] tracking-[-.075em] sm:text-[clamp(4.5rem,8.4vw,7.8rem)]">
                    {t.headlineBefore}
                    <br />
                    <em className="text-[#c11d35]">{t.headlineAccent}</em>
                </h1>
                <p className="max-w-97.5 text-base leading-[1.7] text-[#a99991] whitespace-pre-line">{t.intro}</p>
                <span className="mt-5 inline-flex items-center gap-6.25 border-b border-[#87505a] pb-2.5 pt-3.5 text-[11px] uppercase tracking-[.12em]">
                    {t.release}
                </span>
            </div>

            <div className="relative order-1 flex min-h-97.5 flex-col items-center justify-center sm:order-0 sm:min-h-135">
                <div className="absolute h-[115%] w-[115%] bg-[radial-gradient(ellipse,rgba(193,29,53,.22),rgba(193,29,53,0)_68%)]" />
                <img
                    className="relative z-10 block w-[78%] max-w-75 drop-shadow-[0_25px_35px_rgba(150,17,37,.15)] sm:max-w-100"
                    src={`${import.meta.env.BASE_URL}logo.svg`}
                    alt="Scarlet Oath emblem"
                />
                <span className="relative z-10 mt-5 hidden self-end mr-[8%] text-[10px] uppercase tracking-[.12em] text-[#a99991] sm:block">
                    Est. 2026 <span className="mx-2 text-[#c11d35]">{'///'}</span> {t.pleasure}
                </span>
            </div>
        </section>
    )
}
