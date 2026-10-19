import {describe, it, expect, vi} from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {LanguagePicker} from './LanguagePicker'
import type {Language} from '../i18n/translations'

const options = ['en', 'nl', 'fr', 'de'] as const

const labels: Record<Language, string> = {
    en: 'English label',
    nl: 'Dutch label',
    fr: 'French label',
    de: 'German label',
}

function renderPicker(language: Language = 'en') {
    const onChange = vi.fn()
    render(<LanguagePicker language={language} options={options} labels={labels} onChange={onChange} />)
    const trigger = screen.getByRole('combobox', {name: 'Language selection'})
    return {trigger, onChange}
}

describe('LanguagePicker', () => {
    it('renders the trigger with the current language code', () => {
        const {trigger} = renderPicker('fr')
        expect(trigger).toHaveTextContent('fr')
    })

    it('starts closed with no options and no active descendant', () => {
        const {trigger} = renderPicker()
        expect(trigger).toHaveAttribute('aria-expanded', 'false')
        expect(trigger).not.toHaveAttribute('aria-activedescendant')
        expect(screen.queryAllByRole('option')).toHaveLength(0)
    })

    it('opens on click with four options and correct selection state', async () => {
        const user = userEvent.setup()
        const {trigger} = renderPicker('nl')
        await user.click(trigger)
        expect(trigger).toHaveAttribute('aria-expanded', 'true')
        const optionEls = screen.getAllByRole('option')
        expect(optionEls).toHaveLength(4)
        for (const [index, option] of options.entries()) {
            expect(optionEls[index]).toHaveTextContent(`${option} ${labels[option]}`)
            expect(optionEls[index]).toHaveAttribute('aria-selected', option === 'nl' ? 'true' : 'false')
        }
    })

    it('selects an option on click, closes and returns focus to the trigger', async () => {
        const user = userEvent.setup()
        const {trigger, onChange} = renderPicker('en')
        await user.click(trigger)
        await user.click(screen.getByRole('option', {name: 'fr French label'}))
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('fr')
        expect(screen.queryAllByRole('option')).toHaveLength(0)
        expect(trigger).toHaveAttribute('aria-expanded', 'false')
        expect(trigger).toHaveFocus()
    })

    it('opens with Enter and moves the active descendant with ArrowDown and ArrowUp', async () => {
        const user = userEvent.setup()
        const {trigger} = renderPicker('en')
        trigger.focus()
        await user.keyboard('{Enter}')
        expect(trigger).toHaveAttribute('aria-expanded', 'true')
        const optionEls = screen.getAllByRole('option')
        expect(trigger).toHaveAttribute('aria-activedescendant', optionEls[0].id)
        await user.keyboard('{ArrowDown}')
        expect(trigger).toHaveAttribute('aria-activedescendant', optionEls[1].id)
        await user.keyboard('{ArrowDown}')
        expect(trigger).toHaveAttribute('aria-activedescendant', optionEls[2].id)
        await user.keyboard('{ArrowUp}')
        expect(trigger).toHaveAttribute('aria-activedescendant', optionEls[1].id)
    })

    it('jumps to first and last options with Home and End', async () => {
        const user = userEvent.setup()
        const {trigger} = renderPicker('en')
        trigger.focus()
        await user.keyboard('{Enter}')
        const optionEls = screen.getAllByRole('option')
        await user.keyboard('{End}')
        expect(trigger).toHaveAttribute('aria-activedescendant', optionEls[3].id)
        await user.keyboard('{Home}')
        expect(trigger).toHaveAttribute('aria-activedescendant', optionEls[0].id)
    })

    it('selects the active option with Enter, closes and returns focus to the trigger', async () => {
        const user = userEvent.setup()
        const {trigger, onChange} = renderPicker('en')
        trigger.focus()
        await user.keyboard('{Enter}')
        await user.keyboard('{ArrowDown}')
        await user.keyboard('{Enter}')
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('nl')
        expect(screen.queryAllByRole('option')).toHaveLength(0)
        expect(trigger).toHaveAttribute('aria-expanded', 'false')
        expect(trigger).toHaveFocus()
    })

    it('closes on Escape without selecting and returns focus to the trigger', async () => {
        const user = userEvent.setup()
        const {trigger, onChange} = renderPicker('en')
        trigger.focus()
        await user.keyboard('{Enter}')
        await user.keyboard('{ArrowDown}')
        await user.keyboard('{Escape}')
        expect(onChange).not.toHaveBeenCalled()
        expect(screen.queryAllByRole('option')).toHaveLength(0)
        expect(trigger).toHaveAttribute('aria-expanded', 'false')
        expect(trigger).toHaveFocus()
    })

    it('closes on pointerdown outside the picker', () => {
        const {trigger, onChange} = renderPicker('en')
        fireEvent.click(trigger)
        expect(screen.getAllByRole('option')).toHaveLength(4)
        fireEvent.pointerDown(document.body)
        expect(screen.queryAllByRole('option')).toHaveLength(0)
        expect(trigger).toHaveAttribute('aria-expanded', 'false')
        expect(onChange).not.toHaveBeenCalled()
    })
})
