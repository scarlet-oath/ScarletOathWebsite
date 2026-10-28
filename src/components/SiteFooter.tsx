const currentYear = new Date().getFullYear()
export function SiteFooter() {
    return (
        <footer className="site-footer">
            <nav className="footer-nav" aria-label="Footer navigation">
                <a href="#top">Home</a>
                <a href="#collection">Vision</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="footer-bottom">
                <span>18+ / Consent always.</span>
                <span>© {currentYear} Anna Sas</span>
                <a href="#top">Back to top ↑</a>
            </div>
        </footer>
    )
}
