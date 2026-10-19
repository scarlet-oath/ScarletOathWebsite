import type {Translation} from '../i18n/translations'

type LaunchSectionProps = {
    t: Translation
}

export function LaunchSection({t}: LaunchSectionProps) {
    return (
        <section
            className="mx-auto max-w-310 border-t border-white/15 px-5.5 pb-18.75 pt-6.25 sm:px-10.5 sm:pb-25"
            aria-label={t.launchLabel}
        >
            <div className="flex justify-between text-[10px] uppercase tracking-[.16em] text-[#a99991]">
                <span className="text-[#c11d35]">Scarlet Oath</span>
                <span>{t.adults}</span>
            </div>
            <p className="mx-auto mt-11.25 w-full max-w-155 text-center font-serif text-[clamp(1.8rem,3.3vw,3.1rem)] leading-[1.08] tracking-[-.04em] text-[#a99991] sm:mt-15.5 whitespace-pre-line">
                {t.launch}
            </p>
        </section>
    )
}
