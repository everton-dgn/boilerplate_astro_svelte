import { render, screen } from '@testing-library/svelte'
import { event } from 'tests/utils'

import CounterButton from '../CounterButton.svelte'

const mockSetIncrement = vi.fn()
vi.mock('hooks/useCount/useCount.svelte', () => ({
  useCount: () => ({
    count: () => 0,
    setIncrement: mockSetIncrement
  })
}))

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    render(CounterButton)

    const btn = screen.getByRole('button', { name: /count:/i })
    await event().click(btn)

    expect(mockSetIncrement).toHaveBeenCalledTimes(1)
  })
})
