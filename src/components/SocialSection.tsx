// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {siInstagram} from 'simple-icons'
import {SocialLink} from './SocialLink'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export function SocialSection() {
    return (
        <section
            className="mx-auto grid max-w-6xl gap-10 border-t border-crimson/20 px-6 py-20 sm:gap-16 sm:px-12 lg:grid-cols-[1fr_20rem] lg:items-end"
            id="contact"
            aria-label="Contact and social links"
        >
            <div>
                <p className="mb-3 text-xs uppercase tracking-[.25em] text-crimson">Follow the story</p>
                <h2 className="m-0 mb-4 font-serif text-3xl font-medium leading-tight sm:text-5xl">
                    Let’s make something <em className="text-crimson">honest.</em>
                </h2>
                <p className="m-0 max-w-xl text-sm leading-relaxed text-muted">
                    For custom pieces, private questions, or a little more information, get in touch.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <SocialLink href="https://www.instagram.com/scarlet.oath.designs/" label="Instagram">
                    <svg className="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={siInstagram.path} />
                    </svg>
                </SocialLink>
                <SocialLink href="https://fetlife.com/Scarlet-Oath" label="FetLife">
                    <img
                        className="h-5 w-5 shrink-0 object-contain"
                        src={`${import.meta.env.BASE_URL}assets/fetlife.svg`}
                        alt=""
                    />
                </SocialLink>
            </div>
        </section>
    )
}
