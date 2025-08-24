import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FiltersPanel from '@/components/FiltersPanel'

describe('FiltersPanel', () => {
  it('toggles checkboxes and clears all', async () => {
    const user = userEvent.setup()
    const onToggleMake = jest.fn()
    const onToggleColor = jest.fn()
    const onClearAll = jest.fn()

    render(
      <FiltersPanel
        makes={['Toyota', 'Honda']}
        colors={['White', 'Black']}
        selectedMakes={['Toyota']}
        selectedColors={[]}
        onToggleMake={onToggleMake}
        onToggleColor={onToggleColor}
        onClearAll={onClearAll}
      />
    )

    await user.click(screen.getByText('Honda'))
    expect(onToggleMake).toHaveBeenCalledWith('Honda')

    await user.click(screen.getByText('White'))
    expect(onToggleColor).toHaveBeenCalledWith('White')

    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(onClearAll).toHaveBeenCalled()
  })
})
