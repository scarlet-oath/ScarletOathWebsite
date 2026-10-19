// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {useLanguage} from './hooks/useLanguage'
import {SiteNav} from './components/SiteNav'
import {Hero} from './components/Hero'
import {LaunchSection} from './components/LaunchSection'
import {SocialSection} from './components/SocialSection'
import {SiteFooter} from './components/SiteFooter'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export function App() {
    const {language, setLanguage, t} = useLanguage()

    return (
        <div className="min-h-screen overflow-hidden bg-[#0b0a0b] text-[#e8ded5] bg-[radial-gradient(ellipse_at_76%_34%,rgba(127,20,37,.14),transparent_32rem)]">
            <main>
                <SiteNav language={language} setLanguage={setLanguage} t={t} />
                <Hero t={t} />
                <LaunchSection t={t} />
                <SocialSection t={t} />
            </main>
            <SiteFooter t={t} />
        </div>
    )
}
