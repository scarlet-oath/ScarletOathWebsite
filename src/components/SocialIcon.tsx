// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
type SocialIconProps = {path: string; src?: never; viewBox?: string} | {src: string; path?: never; viewBox?: string}

export function SocialIcon({path, src, viewBox = '0 0 24 24'}: SocialIconProps) {
    if (src) {
        return (
            <span
                className="size-5 shrink-0 bg-current mask-center mask-no-repeat mask-contain"
                style={{maskImage: `url(${src})`, WebkitMaskImage: `url(${src})`}}
                aria-hidden="true"
            />
        )
    }

    return (
        <svg className="size-5 shrink-0 fill-current" viewBox={viewBox} aria-hidden="true">
            <path d={path} />
        </svg>
    )
}
