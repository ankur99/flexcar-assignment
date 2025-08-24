import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ZipSearch from '@/components/ZipSearch'

describe('ZipSearch', () => {
  it('keeps only digits and max 5', async () => {
    const user = userEvent.setup()
    const onSubmit = jest.fn()
    render(<ZipSearch onSubmit={onSubmit} />)

    const input = screen.getByLabelText(/zip code/i)
    await user.type(input, '12ab34cd567')
    expect((input as HTMLInputElement).value).toBe('12345')
  })

  it('disables Search until valid 5 digits', async () => {
    const user = userEvent.setup()
    const onSubmit = jest.fn()
    render(<ZipSearch onSubmit={onSubmit} />)

    const input = screen.getByLabelText(/zip code/i)
    const btn = screen.getByRole('button', { name: /search/i })
    expect(btn).toBeDisabled()

    await user.type(input, '0211')
    expect(btn).toBeDisabled()

    await user.type(input, '6')
    expect((input as HTMLInputElement).value).toBe('02116')
    expect(btn).not.toBeDisabled()
  })

  it('calls onSubmit with sanitized zip', async () => {
    const user = userEvent.setup()
    const onSubmit = jest.fn()
    render(<ZipSearch onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/zip code/i), '10001')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(onSubmit).toHaveBeenCalledWith('10001')
  })
})
