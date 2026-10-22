// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import type {ReactNode} from 'react'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
type SocialLinkProps = {href: string; label: string; children: ReactNode}

export function SocialLink({href, label, children}: SocialLinkProps) {
    return (
        <a
            className="group flex items-center justify-between border-b border-white/15 pb-4 text-2xl font-serif text-[#e8ded5] transition-colors hover:border-[#c11d35] hover:text-[#c11d35]"
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            <span className="flex items-center gap-6">
                {children}
                {label}
            </span>
            <span className="text-base transition-transform group-hover:translate-x-1">↗</span>
        </a>
    )
}
