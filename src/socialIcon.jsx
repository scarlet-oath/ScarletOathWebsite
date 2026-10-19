// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export function SocialIcon({path, src, viewBox = '0 0 24 24'}) {
    if (src) {
        return <span className="size-5 shrink-0 bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]" style={{maskImage: `url(${src})`, WebkitMaskImage: `url(${src})`}} aria-hidden="true"/>
    }

    return (
        <svg className="size-5 shrink-0 fill-current" viewBox={viewBox} aria-hidden="true">
            <path d={path}/>
        </svg>
    )
}
