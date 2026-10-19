import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles.css'

function App() {
    return (
        <main
            className="min-h-screen overflow-hidden bg-[#12090b] text-[#e8ded5] bg-[radial-gradient(ellipse_at_76%_34%,rgba(127,20,37,.25),transparent_32rem)]">
            <nav className="mx-auto flex max-w-310 items-center justify-between px-5.5 py-6 sm:px-10.5 sm:py-9"
                 aria-label="Main navigation">
                <a className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[.04em]"
                   aria-label="Scarlet Oath home">
                    <img className="block h-9 w-auto" src={`${import.meta.env.BASE_URL}logo.svg`} alt=""/>
                    <span>Scarlet Oath</span>
                </a>
                <span className="text-[10px] uppercase tracking-[.08em] text-[#a99991] sm:text-xs">Coming soon</span>
            </nav>

            <section
                className="mx-auto grid min-h-auto max-w-310 grid-cols-1 items-center gap-8 px-5.5 pb-22.5 pt-18.75 sm:grid-cols-2 sm:gap-[7%] sm:px-10.5 sm:pt-15"
                id="top">
                <div className="self-start sm:self-auto">
                    <p className="mb-8.5 flex items-center text-[11px] uppercase tracking-[.12em] text-[#a99991]">
                        <span className="mr-3.25 inline-block h-px w-7 bg-[#c11d35]"/> Lingerie &amp; restraint</p>
                    <h1 className="mb-7.75 font-serif text-[clamp(4rem,18vw,6rem)] font-semibold leading-[.91] tracking-[-.075em] sm:text-[clamp(4.5rem,8.4vw,7.8rem)]">The
                        art of<br/><em className="text-[#c11d35]">wanting more.</em></h1>
                    <p className="max-w-97.5 text-base leading-[1.7] text-[#a99991]">Beautifully made pieces for
                        desire with intention. Scarlet Oath is arriving soon.</p>
                    <span
                        className="mt-5 inline-flex items-center gap-6.25 border-b border-[#87505a] pb-2.5 pt-3.5 text-[11px] uppercase tracking-[.12em]">First release coming soon</span>
                </div>

                <div className="relative flex min-h-97.5 items-center justify-center sm:min-h-135">
                    <div
                        className="absolute h-[115%] w-[115%] bg-[radial-gradient(ellipse,rgba(193,29,53,.22),rgba(193,29,53,0)_68%)]"/>
                    <img
                        className="relative z-10 block w-[95%] max-w-83.75 drop-shadow-[0_25px_35px_rgba(150,17,37,.15)] sm:max-w-125"
                        src={`${import.meta.env.BASE_URL}logo.svg`} alt="Scarlet Oath emblem"/>
                    <span
                        className="absolute bottom-[2%] right-[8%] text-[10px] uppercase tracking-[.12em] text-[#a99991]">Est. 2024 <span
                        className="mx-2 text-[#c11d35]">///</span> For your pleasure</span>
                </div>
            </section>

            <section
                className="mx-auto max-w-310 border-t border-white/15 px-5.5 pb-18.75 pt-6.25 sm:px-10.5 sm:pb-25"
                aria-label="Launch information">
                <div className="flex justify-between text-[10px] uppercase tracking-[.16em] text-[#a99991]"><span
                    className="text-[#c11d35]">Scarlet Oath</span><span>For adults, with intention</span></div>
                <p className="mt-11.25 max-w-155 font-serif text-[clamp(1.8rem,3.3vw,3.1rem)] leading-[1.08] tracking-[-.04em] text-[#a99991] sm:mt-15.5">The first release is taking shape. Scarlet Oath is coming soon.</p>
            </section>

            <footer
                className="mx-auto flex max-w-310 flex-col gap-3.75 border-t border-white/10 px-5.5 py-6.25 text-[11px] uppercase tracking-widest text-[#a99991] sm:flex-row sm:items-center sm:justify-between sm:px-10.5 sm:pb-9.5">
                <span className="font-bold text-[#e8ded5]">Scarlet Oath</span>
                <span>18+ / Consent always.</span>
                <span>More soon.</span>
            </footer>
        </main>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode><App/></StrictMode>,
)
