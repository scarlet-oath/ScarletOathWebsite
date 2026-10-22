// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {useEffect, useId, useRef, useState} from 'react'
import type {KeyboardEvent as ReactKeyboardEvent} from 'react'
import type {Language} from '../i18n/translations'

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
type LanguagePickerProps = {
    language: Language
    options: readonly Language[]
    labels: Record<Language, string>
    selectionLabel: string
    optionsLabel: string
    onChange: (language: Language) => void
}

export function LanguagePicker({
    language,
    options,
    labels,
    selectionLabel,
    optionsLabel,
    onChange,
}: LanguagePickerProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(() => options.indexOf(language))
    const pickerRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const activeOptionRef = useRef<HTMLDivElement>(null)
    const id = useId()
    const listboxId = `${id}-listbox`
    const optionId = (index: number) => `${id}-option-${index}`

    useEffect(() => {
        if (!isOpen) return
        activeOptionRef.current?.scrollIntoView({block: 'nearest'})
    }, [isOpen, activeIndex])

    useEffect(() => {
        if (!isOpen) return

        function closeOnOutsideClick(event: PointerEvent) {
            if (!pickerRef.current?.contains(event.target as Node | null)) setIsOpen(false)
        }

        function closeOnEscape(event: KeyboardEvent) {
            if (event.key !== 'Escape') return
            if (pickerRef.current?.contains(document.activeElement)) {
                setIsOpen(false)
                triggerRef.current?.focus()
            } else {
                setIsOpen(false)
            }
        }

        document.addEventListener('pointerdown', closeOnOutsideClick)
        document.addEventListener('keydown', closeOnEscape)
        return () => {
            document.removeEventListener('pointerdown', closeOnOutsideClick)
            document.removeEventListener('keydown', closeOnEscape)
        }
    }, [isOpen])

    function openPicker() {
        setActiveIndex(options.indexOf(language))
        setIsOpen(true)
    }

    function closePicker() {
        setIsOpen(false)
        triggerRef.current?.focus()
    }

    function selectOption(index: number) {
        const option = options[index]
        if (!option) return
        onChange(option)
        setIsOpen(false)
        triggerRef.current?.focus()
    }

    function handleTriggerKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
        if (!isOpen) {
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                openPicker()
            }
            return
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault()
            setActiveIndex((index) => (index + 1) % options.length)
        } else if (event.key === 'ArrowUp') {
            event.preventDefault()
            setActiveIndex((index) => (index - 1 + options.length) % options.length)
        } else if (event.key === 'Home') {
            event.preventDefault()
            setActiveIndex(0)
        } else if (event.key === 'End') {
            event.preventDefault()
            setActiveIndex(options.length - 1)
        } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            selectOption(activeIndex)
        } else if (event.key === 'Escape') {
            event.preventDefault()
            closePicker()
        } else if (event.key === 'Tab') {
            setIsOpen(false)
        }
    }

    return (
        <div className="relative" ref={pickerRef}>
            <button
                className="flex min-w-17 items-center justify-between gap-3 border border-[#5a353b] bg-[#12090b] px-3 py-2 text-xs font-medium uppercase tracking-[.12em] text-[#e8ded5] transition-colors hover:border-[#c11d35]"
                type="button"
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={isOpen ? listboxId : undefined}
                aria-haspopup="listbox"
                aria-label={selectionLabel}
                aria-activedescendant={isOpen ? optionId(activeIndex) : undefined}
                ref={triggerRef}
                onClick={() => setIsOpen((open) => !open)}
                onKeyDown={handleTriggerKeyDown}
            >
                {language}
                <span
                    className={`text-base leading-none text-[#c11d35] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                    ⌄
                </span>
            </button>
            {isOpen && (
                <div
                    className="absolute right-0 z-30 mt-2 min-w-full overflow-hidden border border-[#5a353b] bg-[#12090b] p-1 shadow-[0_12px_30px_rgba(0,0,0,.45)]"
                    role="listbox"
                    id={listboxId}
                    aria-label={optionsLabel}
                >
                    {options.map((option, index) => (
                        <div
                            className={`block w-full px-3 py-2 text-left text-[10px] uppercase tracking-[.12em] transition-colors ${language === option ? 'bg-[#5e101b] text-[#e8ded5]' : activeIndex === index ? 'bg-[#2a1116] text-[#e8ded5] hover:bg-[#2a1116] hover:text-[#e8ded5]' : 'text-[#a99991] hover:bg-[#2a1116] hover:text-[#e8ded5]'}`}
                            role="option"
                            id={optionId(index)}
                            tabIndex={-1}
                            aria-selected={language === option}
                            key={option}
                            ref={index === activeIndex ? activeOptionRef : null}
                            onPointerDown={(event) => {
                                event.preventDefault()
                                selectOption(index)
                            }}
                        >
                            {option}{' '}
                            <span className="ml-2 text-[9px] normal-case tracking-normal opacity-60">
                                {labels[option]}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
