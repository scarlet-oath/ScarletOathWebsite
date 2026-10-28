import {siInstagram} from 'simple-icons'
import {SocialLink} from './SocialLink'
import {SocialIcon} from './SocialIcon'
export function SocialSection() {
    return (
        <section className="contact-section" id="contact" aria-label="Contact and social links">
            <div>
                <p className="section-kicker">Follow the story</p>
                <h2>
                    Let’s make something <em>honest.</em>
                </h2>
                <p className="contact-copy">
                    For custom pieces, private questions, or a little more information, get in touch.
                </p>
            </div>
            <div className="social-links">
                <SocialLink href="https://www.instagram.com/scarlet.oath.designs/" label="Instagram">
                    <SocialIcon path={siInstagram.path} />
                </SocialLink>
                <SocialLink href="https://fetlife.com/Scarlet-Oath" label="FetLife">
                    <SocialIcon src={`${import.meta.env.BASE_URL}fetlife.svg`} />
                </SocialLink>
            </div>
        </section>
    )
}
