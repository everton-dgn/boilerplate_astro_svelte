import { render, screen } from '@testing-library/svelte'
import { event } from 'tests/utils'

import Button from '../Button.svelte'

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    const onclick = vi.fn()
    render(Button, { label: 'Mais Informações', onclick })

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    await event().click(btn)

    expect(onclick).toHaveBeenCalledTimes(1)
  })
})
