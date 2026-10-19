import {useEffect, useRef, useState} from 'react'

export function LanguagePicker({language, options, labels, onChange}) {
    const [isOpen, setIsOpen] = useState(false)
    const pickerRef = useRef(null)

    useEffect(() => {
        function closeOnOutsideClick(event) {
            if (!pickerRef.current?.contains(event.target)) setIsOpen(false)
        }

        function closeOnEscape(event) {
            if (event.key === 'Escape') setIsOpen(false)
        }

        document.addEventListener('pointerdown', closeOnOutsideClick)
        document.addEventListener('keydown', closeOnEscape)
        return () => {
            document.removeEventListener('pointerdown', closeOnOutsideClick)
            document.removeEventListener('keydown', closeOnEscape)
        }
    }, [])

    return (
        <div className="relative" ref={pickerRef}>
            <button className="flex min-w-[68px] items-center justify-between gap-3 border border-[#5a353b] bg-[#12090b] px-3 py-2 text-xs font-medium uppercase tracking-[.12em] text-[#e8ded5] transition-colors hover:border-[#c11d35]" type="button" aria-label="Language selection" aria-expanded={isOpen} aria-haspopup="listbox" onClick={() => setIsOpen((open) => !open)}>
                {language}
                <span className={`text-base leading-none text-[#c11d35] transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 z-30 mt-2 min-w-full overflow-hidden border border-[#5a353b] bg-[#12090b] p-1 shadow-[0_12px_30px_rgba(0,0,0,.45)]" role="listbox" aria-label="Language options">
                    {options.map((option) => (
                        <button className={`block w-full px-3 py-2 text-left text-[10px] uppercase tracking-[.12em] transition-colors ${language === option ? 'bg-[#5e101b] text-[#e8ded5]' : 'text-[#a99991] hover:bg-[#2a1116] hover:text-[#e8ded5]'}`} type="button" role="option" aria-selected={language === option} key={option} onClick={() => { onChange(option); setIsOpen(false) }}>
                            {option} <span className="ml-2 text-[9px] normal-case tracking-normal opacity-60">{labels[option]}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
