const currentYear = new Date().getFullYear()
export function SiteFooter() {
    return (
        <footer className="border-t border-crimson/70 bg-[#090708] px-6 py-8 text-center sm:px-12">
            <div className="mx-auto my-5 flex max-w-lg items-center gap-3 text-crimson before:h-px before:flex-1 before:bg-crimson after:h-px after:flex-1 after:bg-crimson">
                <span>✦</span>
            </div>
            <nav
                className="mb-6 flex justify-center gap-7 text-xs uppercase tracking-[.18em] text-muted"
                aria-label="Footer navigation"
            >
                <a className="hover:text-crimson" href="#top">
                    Home
                </a>
                <a className="hover:text-crimson" href="#collection">
                    Vision
                </a>
                <a className="hover:text-crimson" href="#about">
                    About
                </a>
                <a className="hover:text-crimson" href="#contact">
                    Contact
                </a>
            </nav>
            <div className="flex flex-col gap-3 text-xs uppercase tracking-[.12em] text-muted sm:flex-row sm:justify-between">
                <span>18+ / Consent always.</span>
                <span>© {currentYear} Anna Sas</span>
                <a className="hover:text-crimson" href="#top">
                    Back to top ↑
                </a>
            </div>
        </footer>
    )
}
