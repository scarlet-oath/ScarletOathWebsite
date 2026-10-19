import {siInstagram} from 'simple-icons'
import {SocialLink} from './SocialLink'
import {SocialIcon} from './SocialIcon'
import type {Translation} from '../i18n/translations'

type SocialSectionProps = {
    t: Translation
}

export function SocialSection({t}: SocialSectionProps) {
    return (
        <section
            className="mx-auto max-w-310 border-t border-white/10 px-5.5 pb-18.75 pt-6.25 sm:px-10.5 sm:pb-25"
            aria-label={t.socialLabel}
        >
            <div className="flex justify-between text-[10px] uppercase tracking-[.16em] text-[#a99991]">
                <span className="text-[#c11d35]">{t.findUs}</span>
                <span>{t.follow}</span>
            </div>
            <div className="mt-11.25 grid grid-cols-1 gap-4 sm:mt-15.5 sm:grid-cols-2">
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
